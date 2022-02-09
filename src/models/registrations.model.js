// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const registrations = sequelizeClient.define('registrations', {
    full_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birth_place: {
      type: DataTypes.STRING,
      allowNull: true
    },
    birth_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nisn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    school_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    school_address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photo: {
      type: DataTypes.TEXT('long'),
      allowNull: true
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
  registrations.associate = function (models) {
    registrations.belongsTo(models.study_plans, { onDelete: 'cascade', onUpdate: 'cascade', as: 'study_plan_1' });
    registrations.belongsTo(models.study_plans, { onDelete: 'cascade', onUpdate: 'cascade', as: 'study_plan_2' });
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return registrations;
};
