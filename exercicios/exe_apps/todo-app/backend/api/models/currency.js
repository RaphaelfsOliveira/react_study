// IMPORTS
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schemas
const CurrencySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    index: true,
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
  }
});

CurrencySchema.methods.calcValue = function() {
  return (1 / this.model('Currency').value);
};

const curryConversion = (from, to, amount) => {
  let fromCoin = from;
  let toCoin = to;
  amount = amount

  if (fromCoin && toCoin && amount) {
    return ((1/toCoin)/(1/fromCoin))*amount;
  }
  return `Error need params`;
};

// exports
module.exports = mongoose.model('Currency', CurrencySchema);
module.exports = curryConversion;
