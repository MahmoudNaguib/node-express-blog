const { Model } = require('objection');
const knex = require('../Database/knex');
Model.knex(knex)


class SectionModel extends Model {
    static tableName = 'sections';
}
module.exports =SectionModel;