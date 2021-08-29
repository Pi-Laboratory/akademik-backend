// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const studyPrograms = sequelizeClient.define('study_programs', {
    name: {
      type: DataTypes.STRING,
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
  studyPrograms.associate = function (models) {
    studyPrograms.belongsTo(models.majors, { onDelete: 'cascade' });

    studyPrograms.hasMany(models.classes, { onDelete: 'cascade' });
    studyPrograms.hasMany(models.curriculums, { onDelete: 'cascade' });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return studyPrograms;
};
