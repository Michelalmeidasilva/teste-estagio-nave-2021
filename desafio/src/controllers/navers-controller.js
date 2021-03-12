import Naver from 'models/Naver'

export const index = async ctx => { 
  return await Naver.query()
}

export const show = async ctx =>{
  return await Naver.query()
  .findOne({ id: ctx.params.id })
  .throwIfNotFound()
}

export const store = async ctx => {
  const { body } = ctx.request
  return await  Naver.query().insert({
    name: body.name,
    navers_id: body.navers_id
  })
}

export const update = async ctx => {
  const { body } = ctx.request
  return await Naver.query().patchAndFetchById(ctx.params.id, {
    name: body.name,
    job_role: body.job_role,
    admission_date: body.admission_date,
    birthdate: body.birthdate
  })
}

export const destroy = async ctx => {
  return await Naver.query().deleteById(ctx.params.id).returning('*')
}

export default {
  index,
  show,
  store,
  update,
  destroy
}
