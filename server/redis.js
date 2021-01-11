const redis = require('redis');

const redisURL = 'redis-10330.c114.us-east-1-4.ec2.cloud.redislabs.com:10330';

const client = redis.createClient(redisURL);
client.on('connect', () => {
  console.log('connected to redis');
});

// const exports = {};

module.exports = client;
