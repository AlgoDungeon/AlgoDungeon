const Session = require('../models/sessionModel');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  // write code here
  const id = res.locals.userID || req.cookies.algodungeonid;
  // console.log('looking for session with id', id);
  Session.findOne({ cookieId: id }, (err, activeSession) => {
    if (err) {
      err.message = { Error: 'Error within sessionController.isLoggedIn' };
      next(err);
    }
    // console.log('activeSession is ', activeSession);

    if (activeSession !== null) return next();

    return res.redirect('/signup');
  });
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  //write code here
  const ID = res.locals.userID;
  Session.findOne({ cookieId: ID }, (err, activeSession) => {
    if (err) {
      err.message = { Error: 'Error in sessionController.startSession' };
    }
    // console.log('active session found in start session');
    if (activeSession) next();
    else {
      Session.create({ cookieId: ID }, (err, newSession) => {
        if (err) {
          err.message = {
            Error: 'Error in sessionController.startSession',
            err,
          };
          return next(err);
        }
        console.log('starting session with id', ID);
        return next();
      });
    }
  });
};

sessionController.endSession = (req, res, next) => {
  //write code here
  const cookieID = req.cookies;
  console.log(cookieID);
  Session.findByIdAndDelete(req.cookies.algodungeonid, (err, activeSession) => {
    if (err) {
      err.message = { Error: 'Error in sessionController.endSession' };
      return next(err);
    }

    return next();
  });
};

module.exports = sessionController;
