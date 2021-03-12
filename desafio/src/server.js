import Koa from 'koa'
import Cors from '@koa/cors'
import koaBody from 'koa-body'
import helmet from 'koa-helmet'
import { logger } from 'koa2-winston'
import * as winston from 'winston'

import routes from 'routes'
import { errorHandlingMiddleware } from 'middlewares'
import {  createTransporterPostgres } from 'helpers'
import { LOGGER_GROUP, LOGGER_STREAM_GENERAL } from './utils'


const app = new Koa()

app.use(helmet())

/**
 * é equivalente a
 * app.use(helmet.contentSecurityPolicy());
  app.use(helmet.dnsPrefetchControl());
  app.use(helmet.expectCt());
  app.use(helmet.frameguard());
  app.use(helmet.hidePoweredBy());ex
  app.use(helmet.hsts());
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(helmet.permittedCrossDomainPolicies());
  app.use(helmet.referrerPolicy());
  app.use(helmet.xssFilter());
 */


app.use(
  logger({
    transports: [
      createTransporterPostgres(),
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.simple(),
          winston.format.colorize({ all: true })
        )
      })
    ],
    reqKeys: ['header.content-type', 'query', 'body'],
    reqSelect: [],
    reqUnselect: ['header.cookie', 'header.authorization', 'body.password'],
    resKeys: ['status', 'message'],
    resSelect: [],
    resUnselect: ['header']
  })
)


/**
 *  uma especificação do W3C que, quando implementado pelo navegador,
 *  permite que um site acesse recursos de outro site mesmo estando 
 *  em domínios diferentes.
 */
app.use(
  Cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
    exposeHeaders: ['X-Request-Id']
  })
)

app.use(koaBody({ multipart: true }))

app.use(errorHandlingMiddleware);

app.use(routes.routes())
app.use(routes.allowedMethods())

export default app
