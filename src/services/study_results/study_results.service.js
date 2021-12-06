// Initializes the `study_results` service on path `/study-results`
const { StudyResults } = require('./study_results.class');
const createModel = require('../../models/study_results.model');
const hooks = require('./study_results.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/study-results', new StudyResults(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('study-results');

  service.hooks(hooks);
};
