// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const attendances = sequelizeClient.define('attendances', {
    meeting: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('undecided', 'present', 'absent'),
      allowNull: false,
      defaultValue: 'undecided'
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
  attendances.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
    attendances.belongsTo(models.study_results, { onDelete: 'cascade' });
  };

  return attendances;
};
