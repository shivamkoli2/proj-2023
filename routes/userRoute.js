const express = require('express')
const { loginController, registerController } = require('../controller/userController')

//router object
const router = express.Router()

//routes
//POST || LOGIN
router.post('/login',loginController)

//POST || REGISTER 
router.post('/register',registerController)

module.exports = router