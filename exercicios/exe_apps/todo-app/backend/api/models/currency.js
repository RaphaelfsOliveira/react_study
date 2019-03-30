// IMPORTS
const mongoose = require('mongoose');

// Schemas
const currencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

// exports
module.exports = mongoose.model('Currency', currencySchema);
