// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const schedules = sequelizeClient.define('schedules', {
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    },
    underscored: true
  });

  // eslint-disable-next-line no-unused-vars
  schedules.associate = function (models) {
    schedules.belongsTo(models.subjects);
    schedules.belongsTo(models.classes);
    schedules.belongsTo(models.hours);
    schedules.belongsTo(models.lecturers);
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return schedules;
};
