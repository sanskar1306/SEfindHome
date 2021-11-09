const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
  title: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  about: {
    type: String,
    trim: true,
    required: true,
  },
  rent: {
    type: Number,
    trime: true,
    required: true,
  },

  address: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  pin: {
    type: Number,
    min: 100000,
    max: 999999,
    trim: true,
    required: true,
  },
  phone: {
    type: Number,
    min: 1000000000,
    max: 9999999999,
    trim: true,
    required: true,
  },
  booked: {
    type: Boolean,
    default: false,
  },
  profilePic: {
    type: String,
    trim: true,
    default: '',
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', userSchema);
