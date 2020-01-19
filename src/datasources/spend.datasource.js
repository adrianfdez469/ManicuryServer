const { DataSource } = require('apollo-datasource');
const Spend = require('../models/spendwork.model');

class SpendDataSource extends DataSource {
    constructor(){
        super();
    }
    initialize(config){
        this.context = config.context;
    }

    async getSpends(filter){
        try {
            const where = {};
            if(filter.filter.spendamount){
                if(filter.filter.spendamount.E){
                    where.spendamount = filter.filter.spendamount.IQ;    
                }else{
                    if(filter.filter.spendamount.GTE){
                        where.spendamount = {'$gte': filter.filter.spendamount.GTE}; 
                    }
                    if(filter.filter.spendamount.LTE){
                        where.spendamount = {...where.spendamount, '$lte': filter.filter.spendamount.LTE}; 
                    }
                }
            }
            if(filter.filter.spendtype){
                where.spendtype = {"$regex": filter.filter.spendtype, "$options": "i"};
            }
            if(filter.filter.initialDate){
                where.date = {"$gte": filter.filter.initialDate};    
            }
            if(filter.filter.endDate){
                where.date = {...where.date, "$lte": filter.filter.endDate};    
            }

            const spends = await Spend.find(where);
            return spends;
        } catch (err) {
            console.log(err);
        }
    }

    async getSpend(spendId){
        try {
            const spend = await Spend.findById(spendId);
            return spend;
        } catch (err) {
            console.log(err);
        }
    }

    async addSpend(spendtype, spendamount){
        try{
            const spend = new Spend({spendtype, spendamount});
            await spend.save();
            return spend;
        }catch(err){
            console.log(err);
        }
    }

    async updateSpend(spendId, spendtype, spendamount){
        try{
            const spend = await Spend.findById(spendId);
            spend.spendtype = spendtype;
            spend.spendamount = spendamount;
            await spend.save();
            return spend;
        } catch(err){
            console.log(err);            
        }
    }

    async removeSpend(spendId){
        try {
            const spend = await Spend.findById(spendId);
            await spend.remove();
            return true;
        } catch (err) {
            console.log(err);
        }
    }



}

module.exports = SpendDataSource;