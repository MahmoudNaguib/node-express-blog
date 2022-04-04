const {getDate} = require('../../Helpers/Helpers');

class BaseResource {
    toArray(rows){
        let output={};
        output.data=[];
        for(let i=0; i<rows.length; i++){
            output['data'].push(this.toJson(rows[i]));
        }
        return output;
    }
    paginate(rows){
        rows=rows.results;
        let output=[];
        for(let i=0; i<rows.length; i++){
            output.push(this.toJson(rows[i]));
        }
        return output;
    }
}

module.exports = BaseResource
