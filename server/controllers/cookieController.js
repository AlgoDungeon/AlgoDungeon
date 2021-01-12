const cookieController = {};

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
  //console.log(req.body);
  const ssid = res.locals.userID;
  res.cookie('algodungeonid', ssid, { httpOnly: true });
  console.log('leaving cookie controller', res.locals);
  return next();
};

cookieController.deleteSSIDCookie = (req, res, next) => {
  //console.log(req.body);
  res.clearCookie('algodungeonid');
  return next();
};

module.exports = cookieController;
