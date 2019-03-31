const mongoose = require('mongoose');
const curryConversion = require('../models/currency');
Currency = mongoose.model('Currency');

// CONTROLLERS
exports.coin_conversion = (req, res) => {
  console.log(req.params, typeof req.params);
  let from, to, amount;
  from = req.params.from;
  to = req.params.to;
  amount = req.params.amount;


  console.log(from, to, amount);

  const convertVal = curryConversion(from, to, amount);
  const test = {
    test: convertVal,
    params: req.params
  }
  console.log(convertVal);
  if (err) res.json(err);
  res.json(req.params);  
};

exports.coin_create = (req, res) => {
  const newCoin = new Currency(req.body);
  newCoin.save((err, coin) => {
    if (err) res.json(err);
    res.json(coin);
  });
};

exports.coin_retrieve = (req, res) => {
  Currency.findById(req.params.coinId, (err, coin) => {
    if (err) res.json(err);
    res.json(coin);
  });
};

exports.coin_list = (req, res) => {
  Currency.find({}, (err, coin) => {
    if (err) res.json(err);
    coin = {
      'totalCount': coin.length,
      'currencies': coin
    }
    res.json(coin);
  }).sort('code');
};

exports.coin_delete = (req, res) => {
  const codeId = req.params.code;
  Currency.deleteMany({}, err => {
    if (err) res.json(err);
    res.json({message: "deleteMany It's Rock N' Roll Baby!"});
  });
};
