const BaseResource=require('../BaseResource');

module.exports=class TinySectionResource extends BaseResource{
    toJson(row) {
        if(row){
            return {
                title: row.title,
            };
        }
    }
}
