// Initializes the `semesters` service on path `/semesters`
const { Semesters } = require('./semesters.class');
const createModel = require('../../models/semesters.model');
const hooks = require('./semesters.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/semesters', new Semesters(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('semesters');

  service.hooks(hooks);
};
