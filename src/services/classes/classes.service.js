// Initializes the `classes` service on path `/classes`
const { Classes } = require('./classes.class');
const createModel = require('../../models/classes.model');
const hooks = require('./classes.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const classes = new Classes(options, app);
  classes.docs = {
    description: 'Service untuk entitas kelas',
    definitions: {
      classes_list: {
        $ref: '#/definitions/classes'
      },
      classes: {
        type: 'object',
        required: ['name', 'major_id', 'study_program_id'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID kelas'
          },
          name: {
            type: 'string',
            description: 'Nama'
          },
          major_id: {
            type: 'integer',
            description: 'ID jurusan'
          },
          study_program_id: {
            type: 'integer',
            description: 'ID program studi'
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
  app.use('/classes', classes);

  // Get our initialized service so that we can register hooks
  const service = app.service('classes');

  service.hooks(hooks);
};
