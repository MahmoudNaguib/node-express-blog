const { Model } = require('objection');
const knex = require('../Database/knex');
Model.knex(knex)

class CommentModel extends Model {
    static tableName = 'comments';
    static relationMappings = {
        post: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./PostModel'),
            join: {
                from: 'comments.post_id',
                to: 'posts.id'
            }
        },
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./UserModel'),
            join: {
                from: 'comments.user_id',
                to: 'users.id'
            }
        }
    };
}
module.exports =CommentModel;