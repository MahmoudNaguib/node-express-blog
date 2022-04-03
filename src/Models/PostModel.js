const { Model } = require('objection');
const knex = require('../Database/knex');
Model.knex(knex)

class PostModel extends Model {
    static tableName = 'posts';
    static relationMappings = {
        section: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./SectionModel'),
            join: {
                from: 'posts.section',
                to: 'posts.id'
            }
        },
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./UserModel'),
            join: {
                from: 'posts.user_id',
                to: 'users.id'
            }
        }
    };
}
module.exports =PostModel;