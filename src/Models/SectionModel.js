const { Model } = require('objection');
const knex = require('../Database/knex');
Model.knex(knex);

class SectionModel extends Model {
    static tableName = 'sections';
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title'],
            properties: {
                title: { type: 'string', minLength: 5, maxLength: 255 },
            }
        };
    }
    $beforeInsert() {
        if (this.id) {
            //console.log
            throw new objection.ValidationError({
                message: 'identifier should not be defined before insert',
                type: 'MyCustomError',
                data: someObjectWithSomeData
            });
        }
    }
}
module.exports =SectionModel;