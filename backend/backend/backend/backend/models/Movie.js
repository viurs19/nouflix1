const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  poster: String,
  videoUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
