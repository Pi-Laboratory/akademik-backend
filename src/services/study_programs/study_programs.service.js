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
  const study_programs = new StudyPrograms(options, app);
  study_programs.docs = {
    description: 'Service untuk entitas program studi',
    definitions: {
      study_programs_list: {
        $ref: '#/definitions/study_programs'
      },
      study_programs: {
        type: 'object',
        required: ['name', 'major_id'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID program studi'
          },
          name: {
            type: 'string',
            description: 'Nama'
          },
          major_id: {
            type: 'integer',
            description: 'ID jurusan'
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
  app.use('/study-programs', study_programs);

  // Get our initialized service so that we can register hooks
  const service = app.service('study-programs');

  service.hooks(hooks);
};
