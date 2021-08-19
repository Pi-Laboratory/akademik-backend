// Initializes the `rooms` service on path `/rooms`
const { Rooms } = require('./rooms.class');
const createModel = require('../../models/rooms.model');
const hooks = require('./rooms.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const rooms = new Rooms(options, app);
  rooms.docs = {
    description: 'Service untuk entitas ruangan',
    definitions: {
      rooms_list: {
        $ref: '#/definitions/rooms'
      },
      rooms: {
        type: 'object',
        required: ['name', 'code', 'capacity', 'type'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID ruangan'
          },
          name: {
            type: 'string',
            description: 'Nama'
          },
          code: {
            type: 'string',
            description: 'Kode'
          },
          capacity: {
            type: 'integer',
            description: 'Kapasitas'
          },
          type: {
            type: 'string',
            description: 'Jenis'
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
  app.use('/rooms', rooms);

  // Get our initialized service so that we can register hooks
  const service = app.service('rooms');

  service.hooks(hooks);
};
