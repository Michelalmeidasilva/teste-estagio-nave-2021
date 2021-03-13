export const seed = async knex => {
  await knex('navers').del()
  await knex('navers').insert([
    {
      name: 'nave-team',
      birthdate: '1998-06-12',
      admission_date: '2020-06-12',
      job_role: 'naver'
    } 
  ])
}
