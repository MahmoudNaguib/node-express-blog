const {faker} = require('@faker-js/faker');
const {getRandomInteger} = require('../../Helpers/Helpers');

const factory = {
    generate: (data={}) => {
        let row = {};
        row.title = (data.title!=undefined)?data.title:'Section ' + getRandomInteger(1, 100000);
        row.is_active = 1;
        return row;
    }
}
module.exports = factory;