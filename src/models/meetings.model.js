// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const meetings = sequelizeClient.define('meetings', {
    meeting: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('inactive', 'open', 'close'),
      allowNull: false,
      defaultValue: 'inactive'
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
  meetings.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
    meetings.belongsTo(models.subject_lecturers, { onDelete: 'cascade' });
  };

  return meetings;
};
