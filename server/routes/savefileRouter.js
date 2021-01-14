const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const algoController = require('../controllers/algoController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

// /savefiles
router.get('/', (req, res) => {
  res.status(200).json(res.locals.files);
});

// /savefiles
router.post('/', (req, res) => {
  res.status(200).json(true);
});

module.exports = router;
