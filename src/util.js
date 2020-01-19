const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = "MANICURI_OLGUITA_APP_/*-+";
const getUserByToken = async (token) => {
    try {
        const user = jwt.verify(token, JWT_SECRET_KEY);
        return user;
    } catch (err) {
        throw err;
    }
    
}

class Response {
    constructor(){
        this.success = true;
        this.message = "";
    }

    isAuth(user){
        if(!user){
            this.message = "Not Authenticated";
            this.success = false;
        }
        return this;
    }

    async resolve(func){
        try {
            if(this.success === false){
                return this;
            }
            this.message = await func(this);
            
        } catch (err) {
            this.success = false;
            this.message = err.message;
        }
        return this;
    }
}

const CRUD_OP = {
    CREATED: "CREATED",
    UPDATED: "UPDATED",
    DELETED: "DELETED"
}

module.exports = {
    JWT_SECRET_KEY,
    getUserByToken,
    Response,
    CRUD_OP
}