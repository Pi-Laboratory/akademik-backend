// Initializes the `registrations` service on path `/registrations`
const { Registrations } = require('./registrations.class');
const createModel = require('../../models/registrations.model');
const hooks = require('./registrations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/registrations', new Registrations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('registrations');

  service.hooks(hooks);
};
