const {Model} = require('objection');
const BaseModel=require('./BaseModel');

class PostModel extends BaseModel {
    static tableName = 'posts';
    static relationMappings = {
        section: {
            relation: Model.BelongsToOneRelation,
            modelClass: require('./SectionModel'),
            join: {
                from: 'posts.section_id',
                to: 'sections.id'
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