exports.up = function(knex) {
  return knex.schema.createTable('User', function(table) {
    table.increments('id').primary();
    table.string('firstName', 50).notNullable();
    table.string('lastName', 50).notNullable();
    table.string('email', 150).notNullable().unique();
    table.string('password', 72).notNullable();
  }).createTable('Church', function(table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.string('slug', 30).notNullable();
    table.string('email', 150).unique();
    table.string('phone', 20);
    table.string('address', 150);
    table.float('latitude');
    table.float('longitude');
  }).createTable('ChurchUser', function(table) {
    table.integer('userId').notNullable().unsigned().references('id').inTable('User');
    table.integer('churchId').notNullable().unsigned().references('id').inTable('Church');
    table.string('roles', 1000).notNullable();
    table.primary(['userId', 'churchId', 'roles']);
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ChurchUser')
    .dropTableIfExists('Church')
    .dropTableIfExists('User');
};
