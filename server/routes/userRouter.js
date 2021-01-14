const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const redisController = require('../controllers/redisController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');
const savefileController = require('../controllers/savefileController');
// /user/signup
router.post(
  '/signup',
  userController.signup,
  cookieController.setSSIDCookie,
  redisController.checkActiveSession,
  sessionController.startSession,
  (req, res) => {
    return res.status(200).json(true);
  }
);

// /user/login
router.post(
  '/login',
  userController.login,
  cookieController.checkCookies,
  cookieController.setSSIDCookie,
  redisController.checkActiveSession,
  sessionController.startSession,
  (req, res) => {
    return res.status(200).json(true);
  }
);

// /user/logout
router.get(
  '/logout',
  savefileController.saveFile,
  sessionController.endSession,
  cookieController.deleteSSIDCookie,
  (req, res) => {
    return res.status(200).json(true);
  }
);

module.exports = router;
