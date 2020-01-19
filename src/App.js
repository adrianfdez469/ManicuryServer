const { ApolloServer } = require('apollo-server');
const {getUserByToken} = require('./util');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({req}) => {
        try{
            if(req.headers.authorization){
                const token = req.headers.authorization.replace('Bearer ', '');
                const user = await getUserByToken(token);
                return {...req, user};  
            }else{
                return req;
            }
        }catch(err){
            return req;
        }
    }
});

server.listen()
    .then(info => {
        console.log(`Server up and running on ${info.url}`);    
    })
    .catch(err => console.log(err));