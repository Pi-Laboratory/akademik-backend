// Initializes the `neighbors` service on path `/neighbors`
const { Neighbors } = require('./neighbors.class');
const createModel = require('../../models/neighbors.model');
const hooks = require('./neighbors.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/neighbors', new Neighbors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('neighbors');

  service.hooks(hooks);
};
