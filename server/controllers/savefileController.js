const File = require('../models/savefileModel');

const savefileController = {};

savefileController.loadFile = async (req, res, next) => {
  try {
    const files = await File.find({ username: req.body.username });
    res.locals.files = files;
    console.log('files returned from load', files);
    return next();
  } catch (err) {
    console.error(err.message);
    return next(err);
  }
};

/**
 * startSession - create and save a new Session into the database.
 */
savefileController.saveFile = async (req, res, next) => {
  try {
    const files = await File.find({ username: req.body.username });
    res.locals.files = files;
    if (files.length > 2)
      res.status(200).json('You can have a maximum of three save files');
  } catch (err) {
    console.error(err.message);
    return next(err);
  }

  try {
    const newFile = await File.create({
      username: req.body.username,
      level: req.body.level,
      location: req.body.location,
      health: req.body.health,
      enemies: req.body.enemies,
      algosDone: req.body.algosDone,
    });
    console.log(newFile);
    return next();
  } catch (err) {
    console.error(err.message);
    return next(err);
  }
};

module.exports = savefileController;
