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
sessionController.startSession = async (req, res, next) => {
  //write code here
  const ssid = String(res.locals.ssid);

  // used to detect previous active session
  await Session.findOne({ cookieId: ssid }, async (err, activeSession) => {
    if (err) {
      err.message = { Error: 'Error in sessionController.startSession' };
      return next(err);
    }

    if (activeSession) {
      next();
    } else {
      try {
        await Session.create({ cookieId: ssid });
        return next();
      } catch (err) {
        console.error(err.message);
        return next(err);
      }
    }
  });
};

sessionController.endSession = (req, res, next) => {
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
