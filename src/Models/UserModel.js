const BaseModel=require('./BaseModel');
const bcrypt = require('bcrypt');

class UserModel extends BaseModel {
    static tableName = 'users';
    async $beforeInsert() {
        await super.$beforeInsert();
        console.log('Child before insert');
        if(this.hasOwnProperty('password')){
            this.password= bcrypt.hashSync(this.password, process.env.HASH_SALT);
        }
    }
}
module.exports =UserModel;