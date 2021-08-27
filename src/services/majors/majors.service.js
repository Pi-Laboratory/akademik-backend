// Initializes the `majors` service on path `/majors`
const { Majors } = require('./majors.class');
const createModel = require('../../models/majors.model');
const hooks = require('./majors.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const majors = new Majors(options, app);
  majors.docs = {
    description: 'Service untuk entitas jurusan',
    definitions: {
      majors_list: {
        $ref: '#/definitions/majors'
      },
      majors: {
        type: 'object',
        required: ['name'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID jurusan'
          },
          name: {
            type: 'string',
            description: 'Nama'
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
  app.use('/majors', majors);

  // Get our initialized service so that we can register hooks
  const service = app.service('majors');

  service.hooks(hooks);
};
