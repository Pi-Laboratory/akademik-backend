// Initializes the `studies` service on path `/studies`
const { Studies } = require('./studies.class');
const createModel = require('../../models/studies.model');
const hooks = require('./studies.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  const studies = new Studies(options, app);
  studies.docs = {
    description: 'Service untuk entitas studi',
    definitions: {
      'studies_list': {
        $ref: '#/definitions/study_plans'
      },
      studies: {
        type: 'object',
        required: ['semester', 'subject_lecturer_id', 'student_id'],
        properties: {
          semester: {
            type: 'string',
            description: 'Paket semester'
          },
          student_id: {
            type: 'integer',
            description: 'ID mahasiswa'
          },
          subject_lecturer_id: {
            type: 'integer',
            description: 'ID mata kuliah -> dosen'
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
  };
  // Initialize our service with any options it requires
  app.use('/studies', studies);

  // Get our initialized service so that we can register hooks
  const service = app.service('studies');

  service.hooks(hooks);
};
