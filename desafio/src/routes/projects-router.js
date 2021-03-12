import Router from 'koa-router'
import ProjectController from '../controllers/projects-controller'

const router = new Router()

router.get('/projects', ProjectController.index)
router.get('/projects/:id', ProjectController.show)
router.post('/projects/add', ProjectController.store)
router.del('/projects/:id', ProjectController.destroy)

export default router.routes()
