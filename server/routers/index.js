const express = require('express')
const router = express.Router()
const errorHandler = require('../middlewares/ErrorHandler')
const authentication = require('../middlewares/Authentication')

const UserController = require('../controllers/UserController')

router.post('/login', UserController.loginUser)
router.post('/register', UserController.registerUser)

router.use(authentication)

router.use(errorHandler)

module.exports = router