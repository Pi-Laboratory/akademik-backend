// Initializes the `schedules` service on path `/schedules`
const { SubjectLecturers } = require('./subject_lecturers.class');
const createModel = require('../../models/subject_lecturers.model');
const hooks = require('./subject_lecturers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const schedules = new SubjectLecturers(options, app);
  schedules.docs = {
    description: 'Service untuk entitas mata kuliah -> dosen',
    definitions: {
      'subject-lecturers_list': {
        $ref: '#/definitions/subject_lecturers'
      },
      subject_lecturers: {
        type: 'object',
        required: ['subject_id', 'lecturer_id'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID mata kuliah -> dosen'
          },
          subject_id: {
            type: 'integer',
            description: 'ID matakuliah'
          },
          lecturer_id: {
            type: 'integer',
            description: 'ID dosen'
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
  app.use('/subject-lecturers', schedules);

  // Get our initialized service so that we can register hooks
  const service = app.service('subject-lecturers');

  service.hooks(hooks);
};
