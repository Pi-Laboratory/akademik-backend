// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const studyResults = sequelizeClient.define('study_results', {
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  studyResults.associate = function (models) {
    studyResults.belongsTo(models.subjects, { onDelete: 'cascade' });
    studyResults.belongsTo(models.lecturers, { onDelete: 'cascade' });
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return studyResults;
};
