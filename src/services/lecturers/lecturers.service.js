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
        $ref: '#/definitions/lecturers'
      },
      lecturers: {
        type: 'object',
        required: ['nip', 'nidn', 'name', 'id_number', 'birth_date', 'birth_city', 'birth_country', 'gender', 'religion', 'blood_type', 'married_status', 'home_address', 'city', 'country', 'postal_code', 'type', 'status'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID dosen'
          },
          nip: {
            type: 'string',
            description: 'Nomor Induk Pegawai'
          },
          nidn: {
            type: 'string',
            description: 'Nomor Induk Dosen Nasional'
          },
          name: {
            type: 'string',
            description: 'Nama'
          },
          front_degree: {
            type: 'string',
            description: 'Gelar depan'
          },
          back_degree: {
            type: 'string',
            description: 'Gelar belakang'
          },
          id_number: {
            type: 'string',
            description: 'Nomor KTP'
          },
          birth_date: {
            type: 'string',
            format: 'date',
            description: 'Tanggal lahir'
          },
          birth_city: {
            type: 'string',
            description: 'Kota tempat lahir'
          },
          birth_country: {
            type: 'string',
            description: 'Negara tempat lahir'
          },
          gender: {
            type: 'string',
            description: 'Jenis kelamin'
          },
          religion: {
            type: 'string',
            description: 'Agama'
          },
          blood_type: {
            type: 'string',
            description: 'Golongan darah'
          },
          married_status: {
            type: 'string',
            description: 'Status menikah'
          },
          home_address: {
            type: 'string',
            description: 'Alamat rumah'
          },
          city: {
            type: 'string',
            description: 'Kota'
          },
          country: {
            type: 'string',
            description: 'Negara'
          },
          postal_code: {
            type: 'string',
            description: 'Kode pos'
          },
          phone_number: {
            type: 'string',
            description: 'Nomor HP'
          },
          type: {
            type: 'string',
            description: 'Tipe'
          },
          status: {
            type: 'string',
            description: 'Status'
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
