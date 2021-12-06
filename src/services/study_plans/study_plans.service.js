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
  const study_plans = new StudyPlans(options, app);
  study_plans.docs = {
    description: 'Service untuk entitas rencana studi',
    definitions: {
      'study-plans_list': {
        $ref: '#/definitions/study_plans'
      },
      study_plans: {
        type: 'object',
        required: ['semester', 'subject_lecturer_id', 'student_id'],
        properties: {
          semester: {
            type: 'integer',
            description: 'Paket semester'
          },
          subject_lecturer_id: {
            type: 'integer',
            description: 'ID mata kuliah -> dosen'
          },
          student_id: {
            type: 'integer',
            description: 'ID mahasiswa'
          },
          created_at: {
            type: 'string',
            format: 'date-time',
            description: 'Waktu dibuat'
          },
          updated_at: {
            type: 'string',
            format: 'date-time',
            description: 'Waktu diupdate'
          }
        }
      }
    }
  }
  app.use('/study-plans', study_plans);

  // Get our initialized service so that we can register hooks
  const service = app.service('study-plans');

  service.hooks(hooks);
};
