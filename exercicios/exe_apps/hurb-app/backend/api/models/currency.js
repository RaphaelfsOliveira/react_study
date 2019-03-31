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
  },
  timestamp : {
    type: String,
    required: true
  }
});

const curryConversion = (params) => {
  let fromCoin = params.from;
  let toCoin = params.to;
  let amount = params.amount;

  if (fromCoin && toCoin && amount) {
    const calc = ((1/toCoin)/(1/fromCoin))*amount;
    return parseFloat(calc).toFixed(2);
  }
  return `Error need params, from: ${fromCoin}, to: ${toCoin}, amount: ${amount}`;
};

// exports
module.exports = mongoose.model('Currency', CurrencySchema);
Currency = mongoose.model('Currency');
module.exports = curryConversion;
