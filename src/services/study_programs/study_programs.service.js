// Initializes the `study_programs` service on path `/study-programs`
const { StudyPrograms } = require('./study_programs.class');
const createModel = require('../../models/study_programs.model');
const hooks = require('./study_programs.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/study-programs', new StudyPrograms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('study-programs');

  service.hooks(hooks);
};
