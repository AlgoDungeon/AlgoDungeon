const cookieController = {};
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 5;

/**
 * setCookie - set a cookie with a random number
 */
cookieController.setCookie = (req, res, next) => {
  // write code here
  res.cookie('algodungeonsecret', String(Math.floor(Math.random() * 100)));
  return next();
};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  console.log(
    `entering cookie controller res.locals.userID is ${res.locals.userID}`
  );
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(res.locals.userID, salt, function (hashErr, hash) {
      if (err) return next(hashErr);

      res.locals.ssid = hash;
      console.log(res.locals.ssid);
    });
  });

  //console.log(req.body);
  res.cookie('algodungeonssid', res.locals.ssid, { httpOnly: true });
  console.log('leaving cookie controller, res.locals.ssid is', res.locals.ssid);
  return next();
};

// used in logout middleware
cookieController.deleteSSIDCookie = (req, res, next) => {
  //console.log(req.body);
  res.clearCookie('algodungeonssid');
  return next();
};

module.exports = cookieController;
