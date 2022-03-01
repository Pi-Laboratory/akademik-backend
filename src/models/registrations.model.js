// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const registrations = sequelizeClient.define('registrations', {
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
    status: {
      type: DataTypes.ENUM('registered', 'passed', 'failed'),
      allowNull: false,
      defaultValue: 'registered'
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
  registrations.associate = function (models) {
    registrations.belongsTo(models.study_programs, { onDelete: 'cascade', onUpdate: 'cascade', as: 'study_program_1' });
    registrations.belongsTo(models.study_programs, { onDelete: 'cascade', onUpdate: 'cascade', as: 'study_program_2' });
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return registrations;
};
