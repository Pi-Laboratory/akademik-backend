// Initializes the `schedules` service on path `/schedules`
const { Schedules } = require('./schedules.class');
const createModel = require('../../models/schedules.model');
const hooks = require('./schedules.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const schedules = new Schedules(options, app);
  schedules.docs = {
    description: 'Service untuk entitas jadwal',
    definitions: {
      schedules_list: {
        $ref: '#/definitions/schedules'
      },
      schedules: {
        type: 'object',
        required: ['day', 'subject_id', 'class_id', 'hour_id', 'lecturer_id'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID jadwal'
          },
          day: {
            type: 'integer',
            description: 'Hari'
          },
          subject_id: {
            type: 'integer',
            description: 'ID matakuliah'
          },
          class_id: {
            type: 'integer',
            description: 'ID kelas'
          },
          hour_id: {
            type: 'integer',
            description: 'ID jam'
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
  app.use('/schedules', schedules);

  // Get our initialized service so that we can register hooks
  const service = app.service('schedules');

  service.hooks(hooks);
};
