const Model = require('../Models/SectionModel');
const Resource = require('./Resources/SectionResource');
const {getDate} = require('../Helpers/Helpers');
SectionsController = {
    index: async (req, res, next) => {
        let rows = await Model.query();
        return res.send({data: new Resource().toArray(rows)});
    },
    show: async (req, res, next) => {
        let row = await Model.query().findById(req.params.id);
        if(!row){
            return res.status(404).send({message:'Record not found'});
        }
        return res.send({data: new Resource().toRow(row)});
    },
    store: async (req, res, next) => {
        if(req.body.title){
            let row=await Model.query().insert({title:req.body.title});
            return res.status(201).send({message:'Created successfully', data: new Resource().toRow(row)});
        }
        return res.send('Failed to save');
    },
    update: async (req, res, next) => {
        let row = await Model.query().findById(req.params.id);
        if(!row){
            return res.status(404).send({message:'Record not found'});
        }
        if(req.body.title){
            if(await Model.query().where({id:req.params.id}).update({title:req.body.title})){
                row=await Model.query().findById(req.params.id);
                return res.status(200).send({message:'Updated successfully', data: new Resource().toRow(row)});
            }
        }
        return res.send('Failed to save');
    },
    delete: async (req, res, next) => {
        let row = await Model.query().findById(req.params.id);
        if(!row){
            return res.status(404).send({message:'Record not found'});
        }
        if(await Model.query().where({id:req.params.id}).delete()){
            return res.status(200).send({message:'Delete successfully'});
        }
        return res.send('Failed to save');
    },
}


module.exports = SectionsController;