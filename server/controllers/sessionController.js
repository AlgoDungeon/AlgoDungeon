const Session = require('../models/sessionModel');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
  const ssid = res.locals.ssid || req.cookies.algodungeonssid;
  // console.log('looking for session with id', id);
  Session.findOne({ cookieSSID: ssid }, (err, activeSession) => {
    if (err) {
      err.message = { Error: 'Error within sessionController.isLoggedIn' };
      next(err);
    }
    // console.log('activeSession is ', activeSession);

    if (activeSession !== null) return next();

    return res.json(false);
  });
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  //write code here
  const ssid = res.locals.ssid;
  // used to detect previous active session
  Session.findOne({ cookieSSID: ssid }, (err, activeSession) => {
    if (err) {
      err.message = { Error: 'Error in sessionController.startSession' };
    }
    // console.log('active session found in start session');
    if (activeSession) next();
    else {
      Session.create({ cookieSSID: ssid }, (err, newSession) => {
        if (err) {
          err.message = {
            Error: 'Error in sessionController.startSession',
            err,
          };
          return next(err);
        }
        console.log('starting session with ssid', ssid);
        return next();
      });
    }
  });
};

sessionController.endSession = (req, res, next) => {
  //write code here
  const cookieID = req.cookies;
  console.log(cookieID);
  Session.findByIdAndDelete(
    req.cookies.algodungeonssid,
    (err, activeSession) => {
      if (err) {
        err.message = { Error: 'Error in sessionController.endSession' };
        return next(err);
      }

      return next();
    }
  );
};

module.exports = sessionController;
