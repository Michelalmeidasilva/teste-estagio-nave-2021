export const up = knex =>
  knex.schema
    .createTable('logs', table => {
      table.uuid('id').primary()
      table.string('level')
      table.string('message')
      table.json('meta')
      table.timestamp('timestamp', { useTz: true }).defaultTo(knex.fn.now())
  })

export const down = knex =>
  knex.schema
    .dropTableIfExists('logs')
