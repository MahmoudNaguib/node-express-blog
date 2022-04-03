exports.up = function (knex) {
    return knex.schema.createTable('sections', table => {
        table.bigIncrements('id').index();
        table.string('title').nullable();
        table.tinyint('is_active').index().defaultTo(1);
        table.timestamps(true,true);
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('sections');
};
exports.config = { transaction: false };