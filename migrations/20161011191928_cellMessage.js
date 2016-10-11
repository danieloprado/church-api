exports.up = function(knex) {
  return knex.schema.table('Informative', table => {
    table.integer('type').notNullable().unsigned().defaultTo(1);
  });
};

exports.down = function(knex) {
  return knex.schema.table('Informative', table => {
    table.dropColumn('type');
  });
};
