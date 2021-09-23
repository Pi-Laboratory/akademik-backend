// Initializes the `lecturers` service on path `/lecturers`
const { Lecturers } = require('./lecturers.class');
const createModel = require('../../models/lecturers.model');
const hooks = require('./lecturers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const lecturers = new Lecturers(options, app);
  lecturers.docs = {
    description: 'Service untuk entitas dosen',
    definitions: {
      lecturers_list: {
        $ref: '#/definitions/employees'
      },
      lecturers: {
        type: 'object',
        required: ['nidn', 'status'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID dosen'
          },
          nidn: {
            type: 'string',
            description: 'Nomor Induk Dosen Nasional'
          },
          certified: {
            type: 'boolean',
            description: 'Punya sertifikat'
          },
          status: {
            type: 'string',
            description: 'Status'
          },
          employees_id: {
            type: 'integer',
            description: 'ID pegawai'
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
          },
        }
      }
    }
  }
  app.use('/lecturers', lecturers);

  // Get our initialized service so that we can register hooks
  const service = app.service('lecturers');

  service.hooks(hooks);
};
