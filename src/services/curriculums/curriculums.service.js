// Initializes the `curriculums` service on path `/curriculums`
const { Curriculums } = require('./curriculums.class');
const createModel = require('../../models/curriculums.model');
const hooks = require('./curriculums.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  const curriculums = new Curriculums(options, app);
  curriculums.docs = {
    description: 'Service untuk entitas kurikulum',
    definitions: {
      curriculums_list: {
        $ref: '#/definitions/curriculums'
      },
      curriculums: {
        type: 'object',
        required: ['name', 'year', 'publish_date', 'approving_date', 'ideal_study_period', 'maximum_study_period', 'minimal_score', 'maximum_d_score'],
        properties: {
          id: {
            type: 'integer',
            description: 'ID kurikulum'
          },
          name: {
            type: 'string',
            description: 'Nama'
          },
          year: {
            type: 'string',
            description: 'Tahun'
          },
          publish_date: {
            type: 'string',
            format: 'date',
            description: 'Tanggal keputusan'
          },
          approving_party: {
            type: 'string',
            description: 'Pihak yang menyutujui'
          },
          approving_date: {
            type: 'string',
            format: 'date',
            description: 'Tanggal disetujui'
          },
          ideal_study_period: {
            type: 'integer',
            description: 'Masa studi ideal'
          },
          maximum_study_period: {
            type: 'integer',
            description: 'Masa studi maksimum'
          },
          description: {
            type: 'string',
            description: 'Keterangan'
          },
          minimal_score: {
            type: 'integer',
            description: 'IPS minimal'
          },
          maximum_d_score: {
            type: 'integer',
            description: 'Jumlah maksimum nilai D'
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
          },
        }
      }
    }
  }
  app.use('/curriculums', curriculums);

  // Get our initialized service so that we can register hooks
  const service = app.service('curriculums');

  service.hooks(hooks);
};
