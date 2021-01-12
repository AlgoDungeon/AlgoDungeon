const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 5;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  level: { type: Number, default: 1 },
});

userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (hashErr, hash) {
      if (err) return next(hashErr);

      user.password = hash;
      return next();
    });
  });
});

module.exports = mongoose.model("User", userSchema);
