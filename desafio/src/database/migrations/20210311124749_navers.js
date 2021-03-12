export const up = knex =>
  knex.schema
    .createTable('navers', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('job_role').unsigned()
      table.datetime('birthdate')
      table.datetime('admission_date')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.datetime('updated_at')
    })
    .raw(
      `CREATE TRIGGER update_navers_updated_at BEFORE UPDATE 
          ON navers FOR EACH ROW EXECUTE PROCEDURE
          update_updated_at_column();`
  )

export const down = knex =>
  knex.schema
    .dropTable('navers');

