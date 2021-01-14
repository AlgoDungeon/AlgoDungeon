const cookieController = {};
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 5;
/**
 * setCookie - set a cookie with a random number
 */
cookieController.checkCookies = (req, res, next) => {
  if (req.cookies && req.cookies.algodungeonssid) {
    res.locals.ssid = decodeURIComponent(req.cookies.algodungeonssid);
  }

  return next();
};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = async (req, res, next) => {
  if (res.locals.ssid) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    res.locals.ssid = await bcrypt.hash(String(res.locals.userID), salt);
  } catch (error) {
    next(error);
  }

  console.log(`ssid in set cookie - ${res.locals.ssid}`);
  res.cookie('algodungeonssid', res.locals.ssid, {
    httpOnly: true,
  });
  return next();
};

// used in logout middleware
cookieController.deleteSSIDCookie = (req, res, next) => {
  res.clearCookie('algodungeonssid');
  return next();
};

module.exports = cookieController;
