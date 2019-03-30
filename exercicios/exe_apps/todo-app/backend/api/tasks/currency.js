const mongoose = require('mongoose');
const reqPromise = require('request-promise');
Currency = mongoose.model('Currency');

// TASKS
const mongoTask = `[Task Mongo DB]`;

const coins = ["AUD", "EUR", "USD", "GBP", "BTC", "CAD",
              "ARS", "LTC", "JPY", "USDT", "CHF"];

const configAPIcall = {
  uri: 'https://economia.awesomeapi.com.br/all',
  json: true
};

let setMongoData = setTimeout(() => {
  console.log(`${mongoTask}: populando base de dados`);
  console.log(`${mongoTask}: ${Date()}`);
  currencyUpdateTask();
  clearTimeout(setMongoData);
}, 2000);


let updateMongoData = setInterval(() => {
  console.log(`${mongoTask}: atualizando base de dados`);
  console.log(`${mongoTask}: periodo 4 min: ${Date()}`);
}, 240000);


const currencyUpdateTask = async (req, res, next) => {
  try {
    const resCurry = await reqPromise(configAPIcall);
    coins.forEach(code => {
      Currency.find({code: code}, (err, coin) => {
        if (!(coin)) {
          const newCurrency = new Currency({
            name:resCurry[code].name,
            code:resCurry[code].code,
            value:resCurry[code].bid,
          });
          newCurrency.save((err, coin) => {
            if (err) res.json(err);
            console.log(`Moeda salva: ${resCurry[code].name}`);
          });
        }
      });
    });
    console.log(`${mongoTask}: Moedas já adicionadas ao DB`);
  } catch (err) {
    console.log(err);
  }
};
