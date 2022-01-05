// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const studyResults = sequelizeClient.define('study_results', {
    mid_test_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    final_test_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    task_score: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    presence_score: {
      type: DataTypes.INTEGER,
      allowNull: true
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
  studyResults.associate = function (models) {
    studyResults.belongsTo(models.studies, { onDelete: 'cascade' });
    studyResults.belongsTo(models.subject_lecturers, { onDelete: 'cascade' });

    studyResults.hasMany(models.tasks, { onDelete: 'cascade' });
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return studyResults;
};
