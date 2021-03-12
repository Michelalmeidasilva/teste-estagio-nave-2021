import Naver from 'models/Naver'
import Project from 'models/Project'


export const index = async ctx => await Project.query().eager('navers')


export const show = async ctx => 
  await Project
    .query()
    .eager('navers')
    .where('id', ctx.params.id)
    .throwIfNotFound({
      message: `project with id ${ctx.params.id} doesnt exist`,
      type: `Custom type`
    })


export const store = async ctx => {
  const {body} = ctx.request;

  const project = await Project.query().insert({
    name: body.name,
  })

  project.navers =[];
  for (const id of body.navers) {
    const naver = await Naver.query().findById(id).throwIfNotFound({
      message: `naver with id ${id} doesnt exist`,
      type: `Custom type`
    });
    project.navers.push(naver)
  }

  for (const naver of project.navers) {
    await project.$relatedQuery('navers').relate(naver)
  }

  return project;
}

export const destroy = async ctx => {
 return { 
   'deleted' : await Project.query().deleteById(ctx.params.id).returning('*')
 }
}

export default {
  index,
  show,
  store,
  destroy
}
