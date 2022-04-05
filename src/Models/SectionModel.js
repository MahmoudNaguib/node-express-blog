const BaseModel=require('./BaseModel');

class SectionModel extends BaseModel {
    static tableName = 'sections';
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title','is_active'],
            properties: {
                title: { type: 'string', minLength: 5, maxLength: 255 },
            }
        };
    }

}
module.exports =SectionModel;