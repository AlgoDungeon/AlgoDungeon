const redis = require('redis');

// initializes a connection to redis for server-side caching
const redisClient = redis.createClient({
  host: 'redis-10330.c114.us-east-1-4.ec2.cloud.redislabs.com',
  port: 10330,
  password: '5wxv6Fd3aXrNtA4lLg8rtV4E5QsHxuK5', // default user password
});

const redisController = {};

// may need new logic for duplicate sessions
redisController.checkActiveSession = async (req, res, next) => {
  if (!req.cookies || !req.cookies.algodungeonssid) return next();

  redisClient.get(req.cookies.algodungeonssid, (err, activeUser) => {
    console.log('inside redis controller');
    if (err) {
      console.error(err);
      next(err);
    }

    if (activeUser) {
      res.locals.activeUser = `REDIS CACHE: ${activeUser}`;
      res.locals.ssid = decodeURIComponent(req.cookies.algodungeonssid);
      console.log(res.locals.activeUser);
    }
    return next();
  });
  //   try {
  //     const activeUser = await redisClient.get(`${req.cookies.algodungeonssid}`);

  //     if (activeUser) {
  //       res.locals.activeUser = `REDIS CACHE: ${activeUser}`;
  //       res.locals.ssid = decodeURIComponent(req.cookies.algoduengeonssid);
  //       console.log(res.locals.activeUser);
  //     }
  //     return next();
  //   } catch (err) {
  //     console.error(err.message);
  //     return next(err);
  //   }
};

redisController.checkSaves = async (req, res, next) => {
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

module.exports = redisController;
