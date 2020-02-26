const { ApolloServer } = require('apollo-server');
const {getUserByToken} = require('./util');


const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'views','build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'views', 'build', 'index.html'));
});
app.listen(9000,()=>{
    console.log('View is up and running on http://localhost:9000');
});

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