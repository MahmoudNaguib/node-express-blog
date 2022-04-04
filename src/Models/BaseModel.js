const { Model } = require('objection');
const knex = require('../Database/knex');
Model.knex(knex);


class BaseModel extends Model {
}
module.exports =BaseModel;