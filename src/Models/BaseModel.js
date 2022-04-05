const {Model} = require('objection');
const knex = require('../Database/knex');
Model.knex(knex);


class BaseModel extends Model {
    static modifiers = {
        active(query) {
            query.where('is_active', 1);
        }
    };
    async $beforeInsert() {
        console.log('Parent before insert');
        if(this.hasOwnProperty('is_active')){
            this.is_active=(this.is_active=='0' || this.is_active==false || this.is_active=='false')?0:1;
        }
    }
    async $beforeUpdate() {
        console.log('Parent before update');
        if(this.hasOwnProperty('is_active')){
            this.is_active=(this.is_active=='0' || this.is_active==false || this.is_active=='false')?0:1;
        }
    }
}

module.exports = BaseModel;