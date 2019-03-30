module.exports = app => {
  const currency = require('../controllers/currency');

  // Routes
  app.route('/conversion')
  .get(currency.coin_list)
  .post(currency.coin_create);

  app.route('/conversion/from=:from&to=:to&amount=:amount')
  .get(currency.coin_conversion);

  app.route('/conversion/:coinId')
  .get(currency.coin_retrieve)

  app.route('/conversion/delete')
  .delete(currency.coin_delete);
};
