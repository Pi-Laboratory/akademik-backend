// Initializes the `subjects` service on path `/subjects`
const { Subjects } = require('./subjects.class');
const createModel = require('../../models/subjects.model');
const hooks = require('./subjects.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const subjects = new Subjects(options, app);
  subjects.docs = {
    description: 'Service untuk entitas mata kuliah',
    definitions: {
      subjects_list: {
        $ref: '#/definitions/subjects'
      },
      subjects: {
        type: 'object',
        required: ['code', 'name', 'stheory', 'spractice', 'spractice_field', 'stotal', 'total_hours', 'type', 'minimum_pass_score', 'semester', 'subject_trait', 'study_plan', 'study_matter', 'study_note'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID matakuliah',
          },
          code: {
            type: 'string',
            description: 'Kode'
          },
          name: {
            type: 'string',
            description: 'Nama'
          },
          stheory: {
            type: 'string',
            description: 'SKS teori'
          },
          spractice: {
            type: 'integer',
            description: 'SKS praktikum'
          },
          spractice_field: {
            type: 'integer',
            description: 'SKS praktikum lapangan'
          },
          stotal: {
            type: 'integer',
            description: 'SKS total'
          },
          total_hours: {
            type: 'integer',
            description: 'Jumlah jam'
          },
          type: {
            type: 'string',
            description: 'Teori atau praktek'
          },
          minimum_pass_score: {
            type: 'string',
            description: 'Nilai minimal lulus'
          },
          semester: {
            type: 'integer',
            description: 'Paket semester'
          },
          subject_trait: {
            type: 'string',
            description: 'Sifat matakuliah'
          },
          study_plan: {
            type: 'string',
            description: 'Rencana pembelajaran semester'
          },
          study_matter: {
            type: 'string',
            description: 'Bahan ajar'
          },
          study_note: {
            type: 'string',
            description: 'Diklat'
          },
          abstract: {
            type: 'string',
            description: 'Abstraksi'
          },
          syllabus_file: {
            type: 'object',
            description: 'File silabus'
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
  app.use('/subjects', subjects);

  // Get our initialized service so that we can register hooks
  const service = app.service('subjects');

  service.hooks(hooks);
};
