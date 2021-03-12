import { Model } from 'objection'
import { baseModel } from './index'

import Navers from './Naver'

class Project extends baseModel {
    static tableName = 'projects'

    static get relationMappings() {
        return {
            navers: {
                relation: Model.ManyToManyRelation,
                modelClass: Navers,
                join: {
                  from: 'projects.id',
                  through: {
                    from: 'projects_navers.project_id',
                    to: 'projects_navers.naver_id'
                  },
                  to: 'navers.id'
                }
              }
        };
    }
}

export default Project
