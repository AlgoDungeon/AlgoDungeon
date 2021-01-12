const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const algoController = require('../controllers/algoController')
const sessionController = require('../controllers/sessionController')
const cookieController = require('../controllers/cookieController')


router.get('/', (req, res, next) => {
    res.status(200).json('image you recieved a set of questions and answers')
})



router.post('/', algoController.checkAnswer, (req, res, next) => {
    
    res.status(200).json('answer has been checked!')
})

module.exports = router