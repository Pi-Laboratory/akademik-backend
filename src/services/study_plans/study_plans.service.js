// Initializes the `study_plans` service on path `/study-plans`
const { StudyPlans } = require('./study_plans.class');
const createModel = require('../../models/study_plans.model');
const hooks = require('./study_plans.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const studyPlans = new StudyPlans(options, app);
  studyPlans.docs = {
    description: 'Service untuk entitas rencana studi',
    definitions: {
      study_plans_list: {
        $ref: '#/definitions/study_plans'
      },
      study_plans: {
        type: 'object',
        required: [''],
        properties: {
          semester: {
            type: 'integer',
            description: 'Paket semester'
          },
          schedule_id: {
            type: 'integer',
            description: 'ID jadwal'
          },
          student_id: {
            type: 'integer',
            description: 'ID mahasiswa'
          }
        }
      }
    }
  }
  app.use('/study-plans', studyPlans);

  // Get our initialized service so that we can register hooks
  const service = app.service('study-plans');

  service.hooks(hooks);
};
