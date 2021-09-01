// Initializes the `students` service on path `/students`
const { Students } = require('./students.class');
const createModel = require('../../models/students.model');
const hooks = require('./students.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const students = new Students(options, app);
  students.docs = {
    description: 'Service untuk entitas mahasiswa',
    definitions: {
      students_list: {
        $ref: '#/definitions/students'
      },
      students: {
        type: 'object',
        required: ['nim', 'name', 'gender', 'birth_city', 'birth_place', 'birth_date', 'religion', 'origin_address', 'recent_address', 'city', 'postal_code', 'phone_number', 'cellular_number', 'email', 'generation', 'registration_number', 'registration_date', 'student_status'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID mahasiswa'
          },
          nim: {
            type: 'string',
            description: 'Nomor Induk Mahasiswa'
          },
          name: {
            type: 'string',
            description: 'Nama'
          },
          gender: {
            type: 'string',
            description: 'Jenis kelamin'
          },
          birth_city: {
            type: 'string',
            description: 'Kota kelahiran'
          },
          birth_date: {
            type: 'string',
            description: 'Tanggal lahir'
          },
          religion: {
            type: 'string',
            description: 'Agama'
          },
          origin_address: {
            type: 'string',
            description: 'Alamat asal'
          },
          recent_address: {
            type: 'string',
            description: 'Alamat terakhir'
          },
          city: {
            type: 'string',
            description: 'Kota'
          },
          postal_code: {
            type: 'string',
            description: 'Kode pos'
          },
          phone_number: {
            type: 'string',
            description: 'Nomor telefon'
          },
          cellular_number: {
            type: 'string',
            description: 'Nomor HP'
          },
          email: {
            type: 'string',
            description: 'Email'
          },
          photo: {
            type: 'object',
            description: 'Foto'
          },
          generation: {
            type: 'string',
            description: 'Angkatan'
          },
          registration_number: {
            type: 'string',
            description: 'Nomor registrasi'
          },
          registration_date: {
            type: 'string',
            description: 'Tanggal registrasi'
          },
          university_status: {
            type: 'string',
            description: 'Status masuk PT'
          },
          student_status: {
            type: 'string',
            description: 'Status mahasiswa'
          },
          father_name: {
            type: 'string',
            description: 'Nama ayah'
          },
          father_birth_date: {
            type: 'string',
            description: 'Tanggal lahir ayah'
          },
          father_status: {
            type: 'string',
            description: 'Status ayah'
          },
          father_death_date: {
            type: 'string',
            description: 'Tanggal meninggal ayah'
          },
          father_education: {
            type: 'string',
            description: 'Pendidikan ayah'
          },
          father_recent_education: {
            type: 'string',
            description: 'Pendidikan terakhir ayah'
          },
          father_occupation: {
            type: 'string',
            description: 'Pekerjaan ayah'
          },
          mother_name: {
            type: 'string',
            description: 'Nama ibu'
          },
          mother_birth_date: {
            type: 'string',
            description: 'Tanggal lahir ibu'
          },
          mother_status: {
            type: 'string',
            description: 'Status ibu'
          },
          mother_death_date: {
            type: 'string',
            description: 'Tanggal meninggal ibu'
          },
          mother_education: {
            type: 'string',
            description: 'Pendidikan ibu'
          },
          mother_recent_education: {
            type: 'string',
            description: 'Pendidikan terakhir ibu'
          },
          mother_occupation: {
            type: 'string',
            description: 'Pekerjaan ibu'
          },
          trustee_name: {
            type: 'string',
            description: 'Nama wali'
          },
          trustee_birth_date: {
            type: 'string',
            description: 'Tanggal lahir wali'
          },
          trustee_status: {
            type: 'string',
            description: 'Status wali'
          },
          trustee_death_date: {
            type: 'string',
            description: 'Tanggal meninggal wali'
          },
          trustee_education: {
            type: 'string',
            description: 'Pendidikan wali'
          },
          trustee_recent_education: {
            type: 'string',
            description: 'Pendidikan terakhir wali'
          },
          trustee_occupation: {
            type: 'string',
            description: 'Pekerjaan wali'
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
  app.use('/students', students);

  // Get our initialized service so that we can register hooks
  const service = app.service('students');

  service.hooks(hooks);
};
