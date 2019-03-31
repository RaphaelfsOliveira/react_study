const mongoose = require('mongoose');
const curryConversion = require('../models/currency');
Currency = mongoose.model('Currency');

// CONTROLLERS
exports.coin_conversion = (req, res) => {
  const curryParams = {
    from: null,
    to: null,
    amount: req.params.amount
  };

  const getCurrencies = coinCode => {
    const promise = Currency.find({code: coinCode}).exec();
    return promise;
  };

  const getCurrenciesParamAW = async () => {
    try {
      curryParams.from = (await getCurrencies(req.params.from))[0].value;
      curryParams.to = (await getCurrencies(req.params.to))[0].value;
    } catch (err) {
      console.log(`Error getCurrenciesParamAW: ${err}`);
    } finally {
      const convertVal = curryConversion(curryParams);

      const resp = {
        convertedValue: parseFloat(convertVal),
        params: {
          from: req.params.from,
          to: req.params.to,
          amount: parseFloat(req.params.amount),
        }
      }
      res.json(resp);
    }
  };
  getCurrenciesParamAW();
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
  Currency.deleteMany({}, err => {
    if (err) res.json(err);
    res.json({message: "deleteMany It's Rock N' Roll Baby!"});
  });
};
