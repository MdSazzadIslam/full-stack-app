require("dotenv").config();
const redis = require("redis");

exports.get = function (key, done) {
  getClient.get(key, done);
};

exports.set = function (key, value) {
  getClient.set(key, value, redis.print);
};

exports.del = function (key, done) {
  const cli = getClient();
  cli.get(key, function (err, u) {
    if (err) return done(err);
    cli.del(key);
    done();
  });
};

function getClient() {
  return redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST, {});
}
