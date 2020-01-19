const fs = require('fs');
const path = require('path');
const { DataSource } = require('apollo-datasource');
const Client = require('../models/client.model');

class ClientDataSource extends DataSource {    
    constructor(){
        super();
    }
    initialize(config) {
        this.context = config.context;
    }
    async addClient(name, phone, address){
        try{
            const newClient = new Client({name, phone, address});
            await newClient.save();
            return newClient;
        }catch(err){
            console.log(err);
        }
    }

    async updateClient(clientId, name, phone, address){
        try{
            const client = await Client.findById(clientId);
            client.name = name;
            client.phone = phone;
            client.address = address;
            await client.save();
            return client;
        }catch(err){
            console.log(err);
        }
    }

    async removeClient(clientId){
        try{
            await Client.findByIdAndRemove(clientId);
            return true;
        }catch(err){
            console.log(err);            
        }        
    }

    async getClients(filter){
        try{
            
            const where = {};
            if(filter.filter.name)
                where.name = {"$regex": filter.filter.name, "$options": "i"};
            if(filter.filter.phone)
                where.phone = filter.filter.phone;

            const clientes = await Client.find(where);
            return clientes;
        }catch(err){
            console.log(err);
        }
    }

    async getClient(clientId){
        try {
            return await Client.findById(clientId);
        } catch (err) {
            console.log(err);
        }
    }

    async uploadImage(clientId, imagePath){
        try {
            const client = await Client.findById(clientId);
            const oldImagePath = client.imgUrl;
            const pathArray = oldImagePath.split('/');
            const oldImageFileName = pathArray[pathArray.length - 1];
            const rootPath = path.dirname( process.mainModule.filename );
            fs.rmdir(path.join(rootPath, 'public', 'files', oldImageFileName));
            
            client.imageUrl = imagePath;
            await client.save();
            return client;

        } catch (err) {
            console.log(err);            
        }
    }
}

module.exports = ClientDataSource;