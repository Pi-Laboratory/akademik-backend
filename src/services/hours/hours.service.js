// Initializes the `hours` service on path `/hours`
const { Hours } = require('./hours.class');
const createModel = require('../../models/hours.model');
const hooks = require('./hours.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hours', new Hours(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hours');

  service.hooks(hooks);
};
