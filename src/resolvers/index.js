const { GraphQLScalarType, Kind, GraphQLObjectType } = require('graphql');
const {prisma} = require('../../prisma/generated/prisma-client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET_KEY, Response, CRUD_OP} = require('../util');

const resolvers = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return new Date(value);
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
              return parseInt(ast.value, 10); // ast value is always in string format
            }
            if(ast.kind === Kind.STRING){
                const date = new Date(ast.value);
                if(date.toString() === "Invalid Date"){
                    return null;
                }else{
                    return date;
                }  
            }
            return null;
        }
    }),
    IngressOfWork: {
        client: async parent => {
            return await prisma.ingressOfWork({id: parent.id}).client();
        },
        workType: async parent => {
            return await prisma.ingressOfWork({id: parent.id}).workType();
        }
    },
    Query: {
        login: async (_, {username, password}) => {
            const response = new Response();
            const func = async context => {
                const user = await prisma.user({username})
                if(!user)
                    throw Error("Wrong credentials");
                
                const ok = await bcrypt.compare(password, user.password);
                if(!ok)
                    throw Error("Wrong credentials");
                
                const usr = {...user};
                delete usr.password;
                context.token = `Bearer ${jwt.sign({usr}, JWT_SECRET_KEY)}`;
                context.username = username;
                context.avatarUrl = '';
                return "Logged In";
            }
            return await response.resolve(func);
        },
        clients: async (parent, args, {user}, info) => {
            const response = new Response();
            const func = async context => {
                context.client = await prisma.clients({where: {
                    AND: {
                        name_contains: args.name,
                        address_contains: args.address,
                        phone_contains: args.phone
                    }
                }});
                return "Ok";
            }
            return await response.isAuth(user).resolve(func);
        },
        client: async (parent, {clientId}, {user}, info) => {
            const response = new Response();
            
            const func = async context => {
                context.client = await prisma.client({id: clientId});
                return "Ok";
            }
            return await response.isAuth(user).resolve(func);
        },
        worktypes: async (_, {name}, {user}) => {
            const response = new Response();
            const func = async context => {
                context.worktype = await prisma.workTypes({where: {name_contains: name}});
                return "Ok";
            }
            return await response.isAuth(user).resolve(func);
        },
        worktype: async (_, {id}, {user}) => {
            const response = new Response();
            const func = async context => {
                context.worktype = await prisma.workType({id});
                return "Ok";
            }
            return await response.isAuth(user).resolve(func);
        },
        spends: async (_, {spendtype, spendamount = {gte: undefined, lte: undefined, eq: undefined}, dateRange = {before:undefined, after:undefined}, pagination = {start:0, limit:20}},{user}) => {
            const response = new Response();
            const {before, after} = dateRange;
            const {gte, lte, eq} = spendamount; 
            const {start, limit} = pagination;
            
            const func = async context => {
                context.spend = await prisma.spendOfWorks({where: {
                    AND: [
                        {date_gte: after},
                        {date_lte: before},
                        {spendtype_contains: spendtype},
                        {spendamount_gte: gte},
                        {spendamount_lte: lte},
                        {spendamount: eq}
                    ]
                }, 
                orderBy: "date_DESC",
                skip: start,
                first: limit
            });
                return "Ok";
            }
            return response.isAuth(user).resolve(func);

        },
        spend: async (_, {id},{user}) => {
            const response = new Response();
            const func = async context => {
                context.spend = await prisma.spendOfWork({id});
                return "Ok";
            }
            return await response.isAuth(user).resolve(func);
        },
        totalSpends: async (_, {dateRange = {before:undefined, after:undefined}}, {user}) => {
            const {before, after} = dateRange;
            const response = new Response();
            const func = async context => {
                const spends = await prisma.spendOfWorks({where: {
                        AND: [
                            {date_gte: after},
                            {date_lte: before}
                        ]
                    }                
                });

                context.total = spends.reduce((acumulator, value) => {
                    acumulator += value.spendamount;
                    return acumulator;
                }, 0);
                return "Ok";
            }

            return response.isAuth(user).resolve(func);
        },
        ingresses: async (_, {worktype, 
                                client, 
                                ingress = {gte: undefined, lte: undefined, eq: undefined},
                                tip = {gte: undefined, lte: undefined, eq: undefined}, 
                                dateRange = {before:undefined, after:undefined}, 
                                pagination = {start:0, limit:20}}, {user}
                        ) => {

            const response = new Response();
            const {gte: ingressAmount_gte, lte:ingressAmount_lte, eq: ingressAmount} = ingress;
            const {gte:tip_gte, lte: tip_lte, eq:tipammount} = tip;
            const {before, after} = dateRange;
            const {start, limit} = pagination;

            const func = async context => {

                const where = {
                        AND: [
                            {workType: {name_contains: worktype}},
                            //{client: {name_contains: client}},
                            {ingressAmount_gte},
                            {ingressAmount_lte},
                            {ingressAmount},
                            
                            {tip_gte},
                            {tip_lte},
                            {tip:tipammount},
                            
                            {date_gte: after},
                            {date_lte: before}
                        ]};
                if(client)
                        where.AND.push({client: {name_contains: client}});
                
                const ingresses = await prisma.ingressOfWorks({
                    where,                    
                    orderBy: "date_DESC",
                    skip: start,
                    first: limit,
                });

                context.ingress = ingresses;
                
                return "Ok";
            }
            return await response.isAuth(user).resolve(func);
        },
        ingress: async (_, {id}, {user}) => {
            const response = new Response();
            const func = async context => {
                context.ingress = await prisma.ingressOfWork({id});
                return "Ok";
            }
            return await response.isAuth(user).resolve(func);
        }, 
        totalIngresses: async (_, {dateRange = {before:undefined, after:undefined}}, {user}) => {
            const {before, after} = dateRange;
            const response = new Response();
            const func = async context => {
                const ingress = await prisma.ingressOfWorks({where: {
                        AND: [
                            {date_gte: after},
                            {date_lte: before}
                        ]
                    }                
                });

                context.total = ingress.reduce((acumulator, value) => {
                    acumulator += value.ingressAmount;
                    return acumulator;
                }, 0);
                return "Ok";
            }

            return response.isAuth(user).resolve(func);
        }
    },
    Mutation: {
        createUser: async (_, {username, password1, password2}) => {
            const response = new Response();
            const func = async context => {
                if(password1 !== password2){
                    throw Error("The password fields are diferent");
                }
                const userExists = await prisma.user({username});
                if(userExists){
                    throw Error("The user already exists");
                }
                const hashPass = await bcrypt.hash(password1, 12);
                context.user = await prisma.createUser({username, password: hashPass});
                return CRUD_OP.CREATED;
            }
            return await response.resolve(func);
        },
        upsertClient: async (_, {clientId, name, phone, address}, {user}, info) => {
            const response = new Response();
            let func;
            if(clientId){
                func = async context => {
                    context.client = await prisma.updateClient({data: {name, phone, address}, where: {id: clientId}});
                    return CRUD_OP.UPDATED;
                }
            }else {
                func = async context => {
                    context.client = await prisma.createClient({name, address, phone});
                    return CRUD_OP.CREATED;
                }
            }
            return await response
                .isAuth(user)
                .resolve(func);
        },
        removeClient: async (parent, {clientId}, {user}, info) => {
            
            const response = new Response();
            const func = async () => {
                await prisma.deleteClient({id:clientId});
                return CRUD_OP.DELETED;
            }
            return await response
                    .isAuth(user)
                    .resolve(func);
            
        },
        uploadImage: (parent, {clientId}, {dataSources}, info) => {
            return args.file.then(file => {
                // Esto necesita retoques
                //dataSources.clientAPI.uploadImage(clientId, file);
                return file; 
            })
            .then(file => file)
            .catch(err => console.log(err));
        },
        upsertWorkType: async (_, {workTypeId, name, price}, {user}) => {
            const response = new Response();

            let func;           
            if(workTypeId) {
                func = async context => {
                    const worktype = await prisma.updateWorkType({where:{id: workTypeId}, data: {name, price}});
                    context.worktype = worktype;
                    return  CRUD_OP.UPDATED;
                };
            }
            else {
                func = async context => {
                    const worktype = await prisma.createWorkType({price, name});
                    context.worktype = worktype;
                    return CRUD_OP.CREATED;
                };
            }
            return await response
                    .isAuth(user)
                    .resolve(func);
        },
        removeWorkType: async (_, {workTypeId}, {user}) => {
            const response = new Response();
            
            const func = async (context) => {
                await prisma.deleteWorkType({id:workTypeId});
                return CRUD_OP.DELETED;
            }
            return await response
                .isAuth(user)
                .resolve(func);
            
        },
        upsertSpend: async (_, {spendId, spendtype, amount, date}, {user}) => {
            const response = new Response();

            

            let func;
            if(spendId){
                func = async context => {
                    context.spend = await prisma.updateSpendOfWork({where: {id:spendId}, data: {spendamount: amount, spendtype, date}});
                    return CRUD_OP.UPDATED;
                }
            }else{
                const actualDate = date || new Date();
                func = async context => {
                    context.spend = await prisma.createSpendOfWork({spendtype, spendamount: amount, date: actualDate});
                    return CRUD_OP.CREATED;
                }
            }
            return await response.isAuth(user).resolve(func);
        },
        removeSpend: async (_, {spendId}, {user}) => {
            const response = new Response();
            const func = async () => {
                await prisma.deleteSpendOfWork({id: spendId});
                return CRUD_OP.DELETED;
            }
            return response.isAuth(user).resolve(func);
        },
        upsertIngress: async (_, {ingressId, worktypeId, clientId, amount, tip, date}, {user}) => {
            const response = new Response();
            let func;
            if(ingressId){
                func = async context => {
                    context.ingress = await prisma.updateIngressOfWork({
                        where: {id: ingressId}, 
                        data: {
                            client: {connect: {id: clientId}}, 
                            workType: {connect: {id: worktypeId}}, 
                            ingressAmount: amount, 
                            tip,
                            date
                        }
                    });   
                    return CRUD_OP.UPDATED;
                }
            }else{
                const actualDate = date || new Date();
                func = async context => {
                    const ingObj = {
                        workType: {connect: {id: worktypeId}},
                        ingressAmount: amount,
                        tip,
                        date: actualDate
                    };
                    
                    
                    if(clientId)
                        ingObj.client = {connect: {id: clientId}};
                    /*context.ingress = await prisma.createIngressOfWork({
                        client: {connect: {id: clientId}},
                        workType: {connect: {id: worktypeId}},
                        ingressAmount: amount,
                        tip,
                        date: actualDate
                    });*/
                    context.ingress = await prisma.createIngressOfWork(ingObj);
                    return CRUD_OP.CREATED;
                }
            }

            return await response.isAuth(user).resolve(func);
        },
        removeIngress: async (_, {ingressId}, {user}) => {
            const response = new Response();
            const func = async () => {
                await prisma.deleteIngressOfWork({id: ingressId});
                return CRUD_OP.DELETED;
            }
            return await response.isAuth(user).resolve(func);
        }
    }
}

module.exports = resolvers;