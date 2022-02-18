// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const preceptors = sequelizeClient.define('preceptors', {
    achievements: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  preceptors.associate = function (models) {
    preceptors.belongsTo(models.lecturers, { onDelete: 'cascade' });
    preceptors.belongsTo(models.students, { onDelete: 'cascade' });
  };

  return preceptors;
};
