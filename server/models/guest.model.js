const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    trim: true,
    required: true,
  },
  houseid: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Guest", guestSchema);
