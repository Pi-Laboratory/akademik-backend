// Initializes the `employees` service on path `/employees`
const { Employees } = require('./employees.class');
const createModel = require('../../models/employees.model');
const hooks = require('./employees.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const employees = new Employees(options, app);
  employees.docs = {
    description: 'Service untuk entitas pegawai',
    definitions: {
      employees_list: {
        $ref: '#/definitions/employees'
      },
      employees: {
        type: 'object',
        required: ['nip', 'nidn', 'name', 'id_number', 'birth_date', 'birth_city', 'birth_country', 'gender', 'religion', 'blood_type', 'home_address', 'city', 'country', 'postal_code', 'type', 'status'],
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
  app.use('/employees', employees);

  // Get our initialized service so that we can register hooks
  const service = app.service('employees');

  service.hooks(hooks);
};
