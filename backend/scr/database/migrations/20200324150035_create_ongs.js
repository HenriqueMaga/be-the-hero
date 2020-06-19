
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().primary().unique();
        table.string('password').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
      });
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ongs');
};
