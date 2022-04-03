const { Model } = require('objection');
const knex = require('../Database/knex');
Model.knex(knex)

class UserModel extends Model {
    static tableName = 'users';
}
module.exports =UserModel;