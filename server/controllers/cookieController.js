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
cookieController.setSSIDCookie = async (req, res, next) => {
  await bcrypt.genSalt(SALT_WORK_FACTOR, async function (err, salt) {
    if (err) return next(err);

    await bcrypt.hash(res.locals.userID, salt, async function (hashErr, hash) {
      if (err) return next(hashErr);

      res.locals.ssid = await hash;
    });
  });

  //console.log(req.body);
  res.cookie('algodungeonssid', res.locals.ssid, { httpOnly: true });
  console.log('leaving cookie controller', res.locals);
  return next();
};

// used in logout middleware
cookieController.deleteSSIDCookie = (req, res, next) => {
  //console.log(req.body);
  res.clearCookie('algodungeonssid');
  return next();
};

module.exports = cookieController;
