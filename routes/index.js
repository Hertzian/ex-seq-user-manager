const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')
const usersController = require('../controllers/dashboard/usersController')

/* GET home page. */
router.get('/', indexController.index)
router.get('/login', indexController.login)
router.get('/register', indexController.register)
router.get('/password', indexController.password)

/* Admin pages */
router.get('/admin/dashboard', indexController.index)
//router.get('/admin/users/get-all', usersController.getAll)

module.exports = router
