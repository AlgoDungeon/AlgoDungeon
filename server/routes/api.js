const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const algoController = require('../controllers/algoController')
const sessionController = require('../controllers/sessionController')
const cookieController = require('../controllers/cookieController')


const userRoutes = require('./userRoutes')
const sessionRoutes = require('./sessionRoutes')
const savefileRoutes = require('./savefileRoutes')
const problemRoutes = require('./problemRoutes')

router.use('/user', userRoutes)

router.use('/session', sessionRoutes)

router.use('/savefiles' savefileRoutes)

router.use('/problems', problemRoutes)



router.get('/gamefiles', (req, res, next) => {

})

router.post('/gamefiles', (req, res, next) => {

})

module.exports = router