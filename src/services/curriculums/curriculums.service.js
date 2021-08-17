// Initializes the `curriculums` service on path `/curriculums`
const { Curriculums } = require('./curriculums.class');
const createModel = require('../../models/curriculums.model');
const hooks = require('./curriculums.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/curriculums', new Curriculums(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('curriculums');

  service.hooks(hooks);
};
