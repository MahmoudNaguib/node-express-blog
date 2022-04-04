const BaseModel=require('./BaseModel');

class CommentModel extends BaseModel {
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