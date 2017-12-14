const root = require('./root');
const healthCheck = require('./healthCheck');

const routes = function (app) {
  app.use('/', root);
  app.use('/health-check', healthCheck);
};

module.exports = routes;
