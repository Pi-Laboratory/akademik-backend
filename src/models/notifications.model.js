// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const notifications = sequelizeClient.define('notifications', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    intent: {
      type: DataTypes.ENUM(['success', 'primary', 'warning', 'danger', 'none']),
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
  notifications.associate = function (models) {
    notifications.belongsTo(models.users, { onDelete: 'cascade', as: 'from' });
    notifications.belongsTo(models.users, { onDelete: 'cascade', as: 'to' });
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return notifications;
};
