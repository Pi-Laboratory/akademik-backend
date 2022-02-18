// Initializes the `preceptors` service on path `/preceptors`
const { Preceptors } = require('./preceptors.class');
const createModel = require('../../models/preceptors.model');
const hooks = require('./preceptors.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/preceptors', new Preceptors(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('preceptors');

  service.hooks(hooks);
};
