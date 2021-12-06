// Initializes the `hours` service on path `/hours`
const { Hours } = require('./hours.class');
const createModel = require('../../models/hours.model');
const hooks = require('./hours.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const hours = new Hours(options, app);
  hours.docs = {
    description: 'Service untuk entitas jam',
    definitions: {
      hours_list: {
        $ref: '#/definitions/hours'
      },
      hours: {
        type: 'object',
        required: ['day', 'start', 'end', 'subject_lecturer_id'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID jam'
          },
          day: {
            type: 'integer',
            description: 'Hari (0-6 mulai dari Minggu)'
          },
          start: {
            type: 'string',
            format: 'time',
            description: 'Mulai'
          },
          end: {
            type: 'string',
            format: 'time',
            description: 'Selesai'
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
  }
  app.use('/hours', hours);

  // Get our initialized service so that we can register hooks
  const service = app.service('hours');

  service.hooks(hooks);
};
