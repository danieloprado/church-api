exports.up = function(knex) {
  return knex.schema.createTable('Appointment', function(table) {
    table.increments('id').primary();
    table.string('title', 100).notNullable();
    table.string('description', 1000);
    table.dateTime('beginDate').notNullable();
    table.dateTime('endDate');
    table.integer('churchId').notNullable().unsigned().references('id').inTable('Church');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Appointment');
};
