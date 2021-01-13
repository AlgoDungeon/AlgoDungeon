const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const algoController = require('../controllers/algoController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

// api/user/signup
router.post(
  '/signup',
  userController.signup,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    return res.status(200).json(true);
  }
);

// api/user/login
router.post(
  '/login',
  userController.login,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    return res.status(200).json(true);
  }
);

// api/user/
router.get('/', (req, res) => {});

// api/user/logout
router.get('/logout', userController.login, (req, res) => {
  return res.status(200);
});

module.exports = router;
