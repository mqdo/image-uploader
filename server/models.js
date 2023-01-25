const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
  filename: String,
  uploadTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = new mongoose.model('Image', imageSchema);