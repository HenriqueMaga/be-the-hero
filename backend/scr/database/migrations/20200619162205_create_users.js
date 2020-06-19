
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.string('id').primary();
        table.string('username').notNullable().primary().unique();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
      });
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
