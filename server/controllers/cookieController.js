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
  console.log(
    `entering cookie controller, res.locals includes ${String(
      res.locals.userID
    )}`
  );

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    res.locals.ssid = await bcrypt.hash(String(res.locals.userID), salt);
  } catch (error) {
    next(error);
  }

  await res.cookie('algodungeonssid', res.locals.ssid, { httpOnly: true });
  return next();
};

// used in logout middleware
cookieController.deleteSSIDCookie = (req, res, next) => {
  //console.log(req.body);
  res.clearCookie('algodungeonssid');
  return next();
};

module.exports = cookieController;
