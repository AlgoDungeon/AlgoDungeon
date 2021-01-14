const Session = require('../models/sessionModel');
const redis = require('redis');

// redis endpoint: redis-10330.c114.us-east-1-4.ec2.cloud.redislabs.com:10330
// username: AlgoDungeonAdmin | password: AlgoDungeon22!

// initializes a connection to redis for server-side caching
const redisClient = redis.createClient({
  host: 'redis-10330.c114.us-east-1-4.ec2.cloud.redislabs.com',
  port: 10330,
  password: '5wxv6Fd3aXrNtA4lLg8rtV4E5QsHxuK5', // default user password
});

const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  // checks to see if redis cache found an active user
  // saves time by not querying the database
  console.log(
    `inside session controller active user is ${res.locals.activeUser}`
  );
  if (res.locals.activeUser) return next();
  console.log(`ssid in start session = ${res.locals.ssid}`);
  const ssid = String(res.locals.ssid);

  // used to detect previous active session
  // provides fault tolerance and data persistence in case redis cache crashes or loses data
  await Session.findOne({ cookieId: ssid }, async (err, activeSession) => {
    if (err) {
      err.message = { Error: 'Error in sessionController.startSession' };
      return next(err);
    }

    if (activeSession) {
      // stores active session to redis cache for 2 hours
      // key of ssid will match browser cookie, later be used associate a session with a user
      redisClient.setex(ssid, 7200, req.body.username);
      next();
    } else {
      try {
        // stores active session to redis cache for 2 hours
        // key of ssid will match browser cookie, later be used associate a session with a user
        redisClient.setex(ssid, 7200, req.body.username);
        // creates session in database for 2 hours
        await Session.create({ cookieId: ssid });
        return next();
      } catch (err) {
        console.error(err.message);
        return next(err);
      }
    }
  });
};

sessionController.endSession = async (req, res, next) => {
  if (!req.cookies || !req.cookies.algodungeonssid) return next();

  try {
    await Session.findOneAndDelete({ cookieId: req.cookies.algodungeonssid });
    return next();
  } catch (err) {
    console.error(err.message);
    return next(err);
  }
};

module.exports = sessionController;
