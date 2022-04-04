const BaseModel=require('./BaseModel');

class UserModel extends BaseModel {
    static tableName = 'users';
}
module.exports =UserModel;