const mongoose = require('mongoose');
const reqPromise = require('request-promise');
Currency = mongoose.model('Currency');

// TASKS
const mongoTask = `[Task Mongo DB]`;

const coins = ["AUD", "EUR", "USD", "GBP", "BTC", "CAD", "ARS", "LTC", "JPY", "CHF"];

const configAPIcall = {
  uri: 'https://economia.awesomeapi.com.br/all',
  json: true
};

let setMongoData = setTimeout(() => {
  console.log(`${mongoTask}: populando base de dados`);
  console.log(`${mongoTask}: ${Date()}`);
  currencySetTask();
  clearTimeout(setMongoData);
}, 2000);


let updateMongoData = setInterval(() => {
  console.log(`${mongoTask}: atualizando base de dados`);
  console.log(`${mongoTask}: periodo 4 min: ${Date()}`);
}, 240000);

const currencySetTask = async (req, res, next) => {
  try {
    const resCurry = await reqPromise(configAPIcall);
    coins.forEach(codeId => {
      Currency.find({code: codeId}, (err, coin) => {
        if (coin.length === 0) {
          const newCurrency = new Currency({
            name:resCurry[codeId].name,
            code:resCurry[codeId].code,
            value:resCurry[codeId].bid,
          });
          newCurrency.save((err, coin) => {
            if (err) next(err);
            console.log(`Moeda salva: ${resCurry[codeId].name}`);
          });
        }
      });
    });
    console.log(`${mongoTask}: Base de dados Populada`);
  } catch (err) {
    console.log(err);
  }
};

const currencyUpdateTask = async (req, res, next) => {}
