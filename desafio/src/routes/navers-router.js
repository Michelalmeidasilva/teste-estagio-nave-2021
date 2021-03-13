import Router from 'koa-router'

import NaverController from '../controllers/navers-controller'
import NaverValidate from '../validators/navers-schema'

const router = new Router()


router.get('/navers', NaverController.index)
router.get('/navers/:id', NaverController.show)
router.post('/navers/add', NaverValidate.store(), NaverController.store)
router.del('/navers/delete/:id', NaverController.destroy)

export default router.routes()
