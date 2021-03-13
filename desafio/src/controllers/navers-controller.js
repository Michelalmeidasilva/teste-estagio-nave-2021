import Naver from 'models/Naver'
import Project from 'models/Project'

export const index = async ctx => { 
  return await Naver.query().select('id', 'name', 'birthdate', 'admission_date', 'job_role')
}

export const show = async ctx =>{ 
  return await Naver
    .query()
    .withGraphFetched('projects')
    .where('id', ctx.params.id)
    .throwIfNotFound({
      message: `naver with id ${ctx.params.id} doesnt exist`,
      type: `Custom type`
    })
  }

export const store = async ctx => {
  const {body} = ctx.request;

  const naver = await Naver.query().insert({
      name: body.name,
      admission_date: body.admission_date,
      job_role: body.job_role,
      birthdate: body.birthdate,
    })

  naver.projects =[];
  
  if(body.projects){
    for (const id of body.projects) {
      const project = await Project.query().findById(id).throwIfNotFound({
        message: `project with id ${id} doesn't exist`,
        type: `Custom type`
      });
      naver.projects.push(project)
    }

    for (const project of naver.projects) {
      await naver.$relatedQuery('projects').relate(project)
    }
  }

  return naver;
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
  return {
  'deleted': await Naver.query().deleteById(ctx.params.id).returning('*')
  }
}

export default {
  index,
  show,
  store,
  destroy
}
