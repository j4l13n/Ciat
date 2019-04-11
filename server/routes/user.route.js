import express from 'express'
import userCtrl from '../controllers/user.controller'
import authctrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create)

router.route('/api/users/:userId')
    .get(authctrl.requireSignin, userCtrl.read)
    .put(authctrl.requireSignin ,userCtrl.update)
    .delete(authctrl.requireSignin ,userCtrl.remove)

router.param('userId', userCtrl.userById)

export default router