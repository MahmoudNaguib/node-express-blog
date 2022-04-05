const Model = require('../Models/PostModel');
const Resource = require('../Resources/PostResource');
module.exports = {
    pairs: async (req, res) => {
        let rows = await Model.query().modify('active');
        return res.send(new Resource().pairs(rows, 'id', 'title'));
    },
    index: async (req, res) => {
        let rows= Model.query().withGraphFetched({section:true,user:true}).modify('active');
        return res.send(await new Resource().paginate(rows, (req.query.page) ? req.query.page : 1));
    },
    show: async (req, res) => {
        let row = await Model.query().withGraphFetched({section:true,user:true}).modify('active').findById(req.params.id);
        if (!row) {
            return res.status(404).send({message: 'Record not found'});
        }
        return res.send({data: new Resource().toJson(row)});
    },
}
