const {getDate} = require('../../Helpers/Helpers');

class SectionResource {
    toArray(rows){
        let output=[];
        for(let i=0; i<rows.length; i++){
            output.push(this.toRow(rows[i]));
        }
        return output;
    }
    toRow(row) {
        if(row){
            return {
                type: 'sections',
                id: parseInt(row.id.toString()),
                attributes: {
                    title: row.title,
                    created_at: getDate(row.created_at),
                    updated_at: getDate(row.updated_at),
                },
                relationships: {},
            };
        }
    }
}

module.exports = SectionResource;



/*const {getDate} = require('../../Helpers/Helpers');

class SectionResource {
    type = 'sections';
    row = {};
    relationships = {};
    constructor(row) {
        this.row = row;
    }
    toArray() {
        return {
            type: this.type,
            id: parseInt(this.row.id.toString()),
            attributes: {
                title: this.row.title,
                created_at: this.row.created_at,
                updated_at: this.row.updated_at,
            },
            relationships: {},
        };
    }
}

module.exports = SectionResource;*/
