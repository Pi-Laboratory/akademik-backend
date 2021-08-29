// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const lecturers = sequelizeClient.define('lecturers', {
    nip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nidn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    front_degree: {
      type: DataTypes.STRING,
      allowNull: true
    },
    back_degree: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    birth_city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    blood_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    married_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    home_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    home_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    office_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cellular_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
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
  lecturers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return lecturers;
};
