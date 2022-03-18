// Initializes the `provinces` service on path `/provinces`
const { Provinces } = require('./provinces.class');
const createModel = require('../../models/provinces.model');
const hooks = require('./provinces.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/provinces', new Provinces(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('provinces');

  service.hooks(hooks);
};
