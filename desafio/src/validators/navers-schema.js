import Joi from '@hapi/joi'

import { validationMiddleware } from 'middlewares'

const NaverValidate = {
    store: () =>
    validationMiddleware({
        body: {
          name: Joi.string().required(),
          job_role: Joi.string().required(),
          birthdate: Joi.date().required(),
          admission_date: Joi.date().required(),
        }
    }),

    update: () =>
    validationMiddleware({
        body: {
          name: Joi.string().required(),
          job_role: Joi.string().required(),
          birthdate: Joi.date().required(),
          admission_date: Joi.date().required(),
        }
    })
}


export default NaverValidate
