module.exports = app => {
  const currency = require('../controllers/currency');
  const APIPATH = '/api';

  // Routes
  app.route(`${APIPATH}/conversion`)
  .get(currency.coin_list)
  .post(currency.coin_create);

  app.route(`${APIPATH}/conversion/from=:from&to=:to&amount=:amount`)
  .get(currency.coin_conversion);

  app.route(`${APIPATH}/conversion/:coinId`)
  .get(currency.coin_retrieve)

  app.route(`${APIPATH}/conversion/delete`)
  .delete(currency.coin_delete);
};
