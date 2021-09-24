// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const lecturers = sequelizeClient.define('lecturers', {
    nidn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    certified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    status: {
      type: DataTypes.ENUM(['Aktif mengajar', 'Cuti', 'Keluar/Pensiun/Alm', 'ALMARHUM', 'Studi Lanjut', 'Tugas di Instansi lain']),
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    underscored: true
  });

  // eslint-disable-next-line no-unused-vars
  lecturers.associate = function (models) {
    lecturers.belongsTo(models.employees, { onDelete: 'cascade' });
    lecturers.belongsTo(models.study_programs, { onDelete: 'cascade' });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return lecturers;
};
