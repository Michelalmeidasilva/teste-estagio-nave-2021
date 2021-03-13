export const seed = async knex => {
  await knex('projects').del()
  await knex('projects').insert([
    {
      name: 'nave-team project'
    } 
  ])
}
