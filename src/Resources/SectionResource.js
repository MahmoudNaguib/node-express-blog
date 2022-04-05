const {getDate} = require('../Helpers/Helpers');
const BaseResource=require('./BaseResource');

module.exports=class SectionResource extends BaseResource{
    toJson(row) {
        if(row){
            return {
                type: 'sections',
                id: parseInt(row.id.toString()),
                attributes: {
                    title: row.title,
                    is_active: row.is_active,
                    created_at: getDate(row.created_at),
                    updated_at: getDate(row.updated_at),
                },
                relationships: {},
            };
        }
    }
}
