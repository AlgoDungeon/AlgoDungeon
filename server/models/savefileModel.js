const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  level: { type: Array, required: true },
  location: { type: Number, required: true },
  health: { type: Number, required: true },
  enemies: { type: Array },
  algosDone: { type: Array },
  username: { type: String, required: true },
});

module.exports = mongoose.model('File', fileSchema);
