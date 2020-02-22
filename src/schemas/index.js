const {gql} = require('apollo-server');

const typeDefs = gql`

    scalar Date

    type File {
        filename: String!
        mimetype: String!
        enconding: String!
    }

    # User of the system. Used for authentication/security.
    type User {
        id: ID!
        username: String!
        #password: String!
    }

    # Clients of the system, used to link the ingress to the client and to have the related data of the client.
    type Client {
        id: ID!
        name: String!
        phone: String
        address: String
        imgUrl: String
    }

    type WorkTypeCategory {
        id: ID!
        name: String!
        color: String!
    }

    # Work types, used to define the type of ingress
    type WorkType {
        id: ID!
        name: String!
        price: Float!
        category: WorkTypeCategory!
    }

    # This is used to track all the works that my mom does, all the ingresses that she has on the manicury
    type IngressOfWork {
        id: ID!
        workType: WorkType!
        client: Client
        ingressAmount: Float!
        tip: Float!
        date: Date
    }

    input dateRange {
        before: Date
        after: Date
    }
    input numberRange {
        gte: Float,
        lte: Float,
        eq: Float
    }

    input pagination {
        start: Int
        limit: Int
    }
    
    # This is to track all the spends tha she has related to his work
    type SpendOfWork {
        id: ID!
        spendtype: String!
        spendamount: Float!
        date: Date
    }

    interface IResponse{
        success: Boolean!
        message: String
    }
    
    type userResponse implements IResponse{
        success: Boolean!
        message: String 
        user: User
    }

    type clientResponse implements IResponse{
        success: Boolean!
        message: String 
        client: Client
    }

    type clientsResponse implements IResponse{
        success: Boolean!
        message: String 
        client: [Client]
    }

    type workTyupeCategorysResponse implements IResponse {
        success: Boolean!
        message: String
        worktypecategory: [WorkTypeCategory]
    }

    type workTypeResponse implements IResponse{
        success: Boolean!
        message: String
        worktype: WorkType
    }
    
    type workTypesResponse implements IResponse{
        success: Boolean!
        message: String
        worktype: [WorkType]
    }

    type loginResponse implements IResponse{
        success: Boolean!
        message: String
        token: String
        username: String
        avatarUrl: String
    }

    type spendResponse implements IResponse{
        success: Boolean!
        message: String
        spend: SpendOfWork
    }
    
    type spendsResponse implements IResponse{
        success: Boolean!
        message: String
        spend: [SpendOfWork]
    }

    type totalSpendsResponse implements IResponse {
        success: Boolean!
        message: String
        total: Float!
    }

    type ingressResponse implements IResponse{
        success: Boolean!
        message: String
        ingress: IngressOfWork
    }

    type ingressesResponse implements IResponse{
        success: Boolean!
        message: String
        ingress: [IngressOfWork]
    }

    type totalIngressesResponse implements IResponse{
        success: Boolean!
        message: String
        total: Float!
    }

    type Response implements IResponse{
        success: Boolean!
        message: String
    }

    type Query {
        # User
        login(username: String!, password: String!): loginResponse! # Returns a token
        user(token: String!): userResponse!

        # Client
        clients(name: String, phone: String, address: String): clientsResponse!
        client(id: ID!): clientResponse!

        # worktypecatergory
        worktypecategory(name: String): workTyupeCategorysResponse!

        # WorkType
        worktypes(name: String): workTypesResponse!
        worktype(id: ID!): workTypeResponse!

        # Spend of work
        spends(spendtype: String, spendamount: numberRange, dateRange: dateRange, pagination: pagination): spendsResponse!
        spend(id: ID!): spendResponse!
        totalSpends(dateRange: dateRange): totalSpendsResponse!

        # IngressOfWork
        ingresses(worktype: String, client: String, ingress: numberRange, tip: numberRange, 
            dateRange: dateRange, pagination: pagination, worktypeIds: [ID], wtcategoryIds: [ID]): ingressesResponse!
        ingress(id:ID): ingressResponse!
        totalIngresses(worktypeIds: [ID], wtcategoryIds: [ID], dateRange: dateRange): totalIngressesResponse!
    }

    type Mutation {
        createUser(username: String!, password1: String!, password2: String!): userResponse!

        upsertClient(clientId: ID, name: String!, phone: String, address: String): clientResponse!
        removeClient(clientId: ID!): Response!
        uploadImage(clientId: ID!, file: Upload!): File!
        #deleteClientImage(clientId: ID!): Boolean!

        upsertWorkType(workTypeId: ID, wtcategoryId: ID!, name: String!, price: Float!): workTypeResponse!
        removeWorkType(workTypeId: ID!): Response!

        upsertSpend(spendId: ID, spendtype: String!, amount: Float!, date: Date): spendResponse!
        removeSpend(spendId: ID!): Response!

        upsertIngress(ingressId: ID, worktypeId: ID!, clientId: ID, amount: Float!, tip: Float!, date: Date): ingressResponse!
        removeIngress(ingressId: ID!): Response!
        
    }

`;

module.exports = typeDefs;

