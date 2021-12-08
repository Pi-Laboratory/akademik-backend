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
  const study_results = new StudyResults(options, app);
  study_results.docs = {
    description: 'Service untuk entitas hasil studi',
    definitions: {
      'study-results_list': {
        $ref: '#/definitions/study_results'
      },
      study_results: {
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
          score: {
            type: 'integer',
            description: 'Nilai ( 1 - 4 )'
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
  app.use('/study-results', new StudyResults(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('study-results');

  service.hooks(hooks);
};
