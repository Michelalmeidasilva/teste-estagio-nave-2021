import Router from 'koa-router'
import ProjectController from '../controllers/projects-controller'
import ProjectValidate from '../validators/projects-schema'

const router = new Router()

router.get('/projects', ProjectController.index)
router.get('/projects/:id', ProjectController.show)
router.post('/projects/add', ProjectValidate.store(), ProjectController.store)
router.del('/projects/delete/:id', ProjectController.destroy)

export default router.routes()
