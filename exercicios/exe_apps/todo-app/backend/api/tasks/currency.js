const mongoose = require('mongoose');
const reqPromise = require('request-promise');
Currency = mongoose.model('Currency');

// TASKS
const mongoTask = `[Task Jarvis]:`;

const coins = ["AUD", "EUR", "USD", "GBP", "BTC", "CAD", "ARS", "LTC", "JPY", "CHF"];

const configAPIcall = {
  uri: 'https://economia.awesomeapi.com.br/all',
  json: true
};

let setMongoData = setTimeout(() => {
  currencySetTask();
  createBrlTask();
  clearTimeout(setMongoData);
}, 2000);


let updateMongoData = setInterval(() => {
  currencyUpdateTask();
}, 240000);

const currencySetTask = async (req, res, next) => {
  console.log(`${mongoTask} populando base de dados`);
  console.log(`${mongoTask} ${Date()}`);
  try {
    const resCurry = await reqPromise(configAPIcall);
    coins.forEach(codeId => {
      Currency.find({code: codeId}, (err, coin) => {
        if (coin.length === 0) {
          const newCurrency = new Currency({
            name: resCurry[codeId].name,
            code: resCurry[codeId].code,
            value: resCurry[codeId].bid,
            timestamp: resCurry[codeId].timestamp,
          });
          newCurrency.save((err, coin) => {
            if (err) next(err);
            console.log(`Moeda salva: ${resCurry[codeId].name}`);
          });
        }
      });
    });
    console.log(`${mongoTask} Base de dados Populada`);
  } catch (err) {
    console.log(err);
  }
};

const createBrlTask = async (req, res, next) => {
  Currency.find({code: 'BRL'}, (err, coin) => {
    if (coin.length === 0) {
      const newCurrency = new Currency({
        name: 'Real Brasileiro',
        code: 'BRL',
        value: 1,
        timestamp: 'fixo',
      });
      newCurrency.save((err, coin) => {
        if (err) next(err);
        console.log(`Moeda salva: ${coin.name}`);
      });
    }
  });
};

const getCurrySync = coinCode => {
  const coin = Currency.find({code: coinCode});
  return coin;
};

const coinOutdated = (codeCoin, codeApi, tsCoin, tsApi) => {
  return (codeCoin === codeApi && tsCoin !== tsApi);
}

const compareCurrency = (curryRes) => {
  coins.forEach((codeId, i) => {
    getCurrySync(codeId).exec((err, coin) => {

      if (coinOutdated(coin[0].code, curryRes[codeId].code,
      coin[0].timestamp, curryRes[codeId].timestamp)) {

        Currency.updateOne({code: coin[0].code}, {
          value: curryRes[codeId].value,
          timestamp: curryRes[codeId].timestamp
        }, (err, res) => {
          console.log(`${mongoTask} Moeda atualizada: ${coin[0].name}}`);
        });

      }
    });
  });
};

const currencyUpdateTask = async () => {
  let resCurry;

  console.log(`${mongoTask} atualizando base de dados`);
  console.log(`${mongoTask} periodo 4 min: ${Date()}`);

  try {
    resCurry = await reqPromise(configAPIcall);
  } catch (err) {
    console.log(`Error currencyUpdateTask: ${err}`);
  } finally {
    compareCurrency(resCurry);
    return resCurry;
  }
};
