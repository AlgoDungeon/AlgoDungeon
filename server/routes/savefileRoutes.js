const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')
const algoController = require('../controllers/algoController')
const sessionController = require('../controllers/sessionController')
const cookieController = require('../controllers/cookieController')

// /api/savefiles
router.get('/', (req, res, next) => {
    res.status(200).json('loaded a game')
})

// /api/savefiles
router.post('/', (req, res, next) => {
    res.status(200).json('posted a dave file!')
})

module.exports = router