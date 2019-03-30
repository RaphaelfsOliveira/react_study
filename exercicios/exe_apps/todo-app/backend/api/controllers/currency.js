const mongoose = require('mongoose');
Currency = mongoose.model('Currency');

// CONTROLLERS
exports.coin_conversion = (req, res) => {
  console.log(req.params, typeof req.params);
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
    res.json(coin);
  });
};

exports.coin_update = (req, res) => {
};

exports.coin_delete = (req, res) => {
};