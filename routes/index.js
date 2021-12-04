const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/', homeController.login)
router.get('/home', homeController.home)
router.get('/register', homeController.register)
router.get('/password', homeController.password)

module.exports = router
