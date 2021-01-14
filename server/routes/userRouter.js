const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const algoController = require('../controllers/algoController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');
const savefileController = require('../controllers/savefileController');
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
  cookieController.checkCookies,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    return res.status(200).json(true);
  }
);

// api/user/logout
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
