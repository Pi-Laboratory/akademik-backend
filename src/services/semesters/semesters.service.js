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
  const semesters = new Semesters(options, app);
  semesters.docs = {
    description: 'Service untuk entitas semester',
    definitions: {
      semesters_list: {
        $ref: '#/definitions/semesters'
      },
      semesters: {
        type: 'object',
        required: ['year', 'type', 'start_date', 'end_date', 'start_input_period', 'end_input_period'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID semester'
          },
          year: {
            type: 'integer',
            description: 'Tahun'
          },
          type: {
            type: 'string',
            description: 'Jenis'
          },
          start_date: {
            type: 'string',
            format: 'date',
            description: 'Waktu mulai'
          },
          end_date: {
            type: 'string',
            format: 'date',
            description: 'Waktu selesai'
          },
          start_input_period: {
            type: 'string',
            format: 'date',
            description: 'Waktu mulai input'
          },
          end_input_period: {
            type: 'string',
            format: 'date',
            description: 'Waktu selesai input'
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
  app.use('/semesters', semesters);

  // Get our initialized service so that we can register hooks
  const service = app.service('semesters');

  service.hooks(hooks);
};
