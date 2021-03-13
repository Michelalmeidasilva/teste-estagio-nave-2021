export const up = knex =>
  knex.schema
    .createTable('projects_navers', table => {
      table.increments('id').primary()
      table.integer('project_id').unsigned()
      table
      .foreign('project_id')
      .references('id')
      .inTable('projects')
      .onDelete('CASCADE')   
      table.integer('naver_id').unsigned()
      table
      .foreign('naver_id')
      .references('id')
      .inTable('navers')
      .onDelete('CASCADE')
      table.timestamp('added_at').defaultTo(knex.fn.now())
  })

export const down = knex =>
  knex.schema
    .dropTableIfExists('projects_navers')

