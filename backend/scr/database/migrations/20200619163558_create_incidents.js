
exports.up = function(knex, Promise) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        table.string('user_id');

        table.foreign('ong_id').references('id').inTable('ongs');
        table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('incidents');
};
