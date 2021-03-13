import Joi from '@hapi/joi'

import { validationMiddleware } from 'middlewares'

const ProjectValidate = {
    store: () =>
    validationMiddleware({
        body: {
          name: Joi.string().required(),
          navers: Joi.array().items(Joi.number())
        }
    }),

}

export default ProjectValidate;