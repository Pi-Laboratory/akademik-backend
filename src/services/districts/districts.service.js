// Initializes the `districts` service on path `/districts`
const { Districts } = require('./districts.class');
const createModel = require('../../models/districts.model');
const hooks = require('./districts.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/districts', new Districts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('districts');

  service.hooks(hooks);
};
