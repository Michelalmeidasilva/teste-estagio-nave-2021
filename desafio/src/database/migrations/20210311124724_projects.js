export const up = knex =>
  knex.schema
    .createTable('projects', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.datetime('updated_at')
    })
    .raw(
      `CREATE TRIGGER update_projects_updated_at BEFORE UPDATE 
          ON projects FOR EACH ROW EXECUTE PROCEDURE
          update_updated_at_column();`)

export const down = knex =>
  knex.schema
    .dropTableIfExists('projects')

