const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const algoController = require('../controllers/algoController')
const sessionController = require('../controllers/sessionController')
const cookieController = require('../controllers/cookieController')


// api/user/signup
router.post('/signup', userController.signup, (req, res, next) => {
    return res.status(200);
  })

  // api/user/login
  router.post('/login', userController.login, (req, res, next) => {
    res.data = true // hardcoded for testing
    return res.status(200).json(res.data);
  })
  
  // api/user/
  router.get('/', (req, res, next) => {
      
  })

   // api/user/logout
   router.get('/logout', userController.login, (req, res, next) => {
    return res.status(200);
  })

  module.exports = router