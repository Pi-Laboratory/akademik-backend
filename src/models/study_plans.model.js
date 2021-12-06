// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const studyPlans = sequelizeClient.define('study_plans', {
    semester: {
      type: DataTypes.INTEGER,
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
  studyPlans.associate = function (models) {
    studyPlans.belongsTo(models.subject_lecturers, { onDelete: 'cascade' });
    studyPlans.belongsTo(models.students, { onDelete: 'cascade' });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return studyPlans;
};
