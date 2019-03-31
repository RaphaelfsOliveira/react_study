const mongoose = require('mongoose');
const curryConversion = require('../models/currency');
Currency = mongoose.model('Currency');

// CONTROLLERS
exports.coin_conversion = (req, res) => {
  const curryArray = [];
  const amount = req.params.amount;
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
      curryParams.from = await getCurrencies(req.params.from);
      curryParams.to = await getCurrencies(req.params.to);
    } catch (err) {
      console.log(`Error getCurrenciesParamAW: ${err}`);
    } finally {
      console.log(
        'getCurrenciesParamAW',
        curryParams.from[0].value,
        curryParams.to[0].value,
        curryParams.amount
      );
    }
  };
  getCurrenciesParamAW().then(data => {
    console.log('  ');
    console.log('#### ParamAW THEN ####');
    console.log('FROM', curryParams.from[0].value);
    console.log('TO', curryParams.to[0].value);
    console.log('amount', curryParams.amount);
    console.log('  ');
  });


  console.log(curryParams);

  // [req.params.from, req.params.to].forEach(coinParams => {
  //   const getPromise = getCurrencies(coinParams);
  //
  //   getPromise
  //   .then(coinValue =>{
  //     curryArray.push(coinValue[0].value);
  //   })
  //   .catch(err => {
  //     console.log(`Error getPromise: ${err}`);
  //   })
  //   .finally(() => {
  //     console.log('fechou a promesa');
  //     console.log(curryArray, curryArray.length === 2);
  //
  //     if (curryArray.length === 2) {
  //       curryArray.forEach((coin, i) => {
  //         console.log(`Array: ${coin}, ${i}`);
  //       });
  //     }
  //   });
  // });



  const convertVal = curryConversion(req.params);
  console.log(convertVal);

  const resp = {
    currencyValue: convertVal,
    params: req.params
  }

  res.json(resp);
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
