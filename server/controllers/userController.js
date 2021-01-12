const User = require('../models/AlgoUserModel');

const userController = {};

userController.signup = (req, res, next) => {
  console.log('req body includes', req.body);

  const newUser = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };

  User.create(newUser, (err, user) => {
    console.log('user is', user);
    if (err) {
      // send back to login page
      return next({
        log: 'Error in userController.createUser User.create',
        message: { Error: 'Error in User.create' },
      });
    }

    const userID = user.id;
    res.locals.userID = userID;
    return next();
  });
};

userController.login = (req, res, next) => {
  console.log('verifying user');
  const plainTextPass = req.body.password;

  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      // send back to login
      return next(err);
    }

    if (user === null) return res.redirect('/login');

    bcrypt.compare(plainTextPass, user['_doc']['password'], (err, result) => {
      if (err) {
        return res.redirect('/login');
      }

      if (result) {
        const userID = user.id;
        res.locals.userID = userID;
        // console.log('leaving verify, res.locals includes', res.locals);
        return next();
      } else {
        return res.redirect('/login');
      }
    });
  });
};

module.exports = userController;
