import { Model } from 'objection'
import Project  from './Project'
import { baseModel } from './index'

class Naver extends baseModel{
  static tableName = 'navers'

  static get relationMappings() {
    return {
      projects: {
        relation: Model.ManyToManyRelation,
        modelClass: Project,
        join: {
          from: 'navers.id',
          through: {
            from: 'projects_navers.naver_id',
            to: 'projects_navers.project_id'
          },
          to: 'projects.id'
        }
      }
    };
  }
}




export default Naver
