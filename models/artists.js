const mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  medium: String,
  style: String
});

module.exports = mongoose.model('Artist', artistSchema);
