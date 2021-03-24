import Naver from 'models/Naver'
import Project from 'models/Project'

import {BadRequest} from '../helpers'
import {hasDuplicateValues} from '../helpers'

export const index = async ctx => {
  return await Project.query().select('id', 'name')
}

export const show = async ctx =>{ 
  return await Project
    .query()
    .withGraphFetched('navers')
    .where('id', ctx.params.id)
    .throwIfNotFound({
      message: `project with id ${ctx.params.id} doesnt exist`,
      type: `Custom type`
    })
  }

export const store = async ctx => {
  const {body} = ctx.request;

  const navers =[];


  if(hasDuplicateValues(body.navers)){
    throw new BadRequest(`Array de navers tem id's duplicados`);
  } 

  if(body.navers){
    for (const id of body.navers) {
      const naver = await Naver.query().findById(id).throwIfNotFound({
        message: `naver with id ${id} doesnt exist`,
        type: `Custom type`
      });
      navers.push(naver)
    }
  }

  const project = await Project.query().insert({
    name: body.name,
  })

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
