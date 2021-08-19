// Initializes the `users` service on path `/users`
const { Users } = require('./users.class');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const users = new Users(options, app);
  users.docs = {
    description: 'Service untuk entitas pengguna/akun',
    definitions: {
      users_list: {
        $ref: '#/definitions/users'
      },
      users: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID pengguna'
          },
          username: {
            type: 'string',
            description: 'Username pengguna'
          },
          password: {
            type: 'string',
            description: 'Password pengguna'
          },
          student_id: {
            type: 'integer',
            description: 'ID mahasiswa (akun mahasiswa)'
          },
          lecturer_id: {
            type: 'integer',
            description: 'ID dosen (akun dosen)'
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
  app.use('/users', users);

  // Get our initialized service so that we can register hooks
  const service = app.service('users');

  service.hooks(hooks);
};
