// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const students = sequelizeClient.define('students', {
    nim: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_place: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    origin_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recent_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cellular_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    generation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    registration_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registration_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    university_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    student_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    father_birth_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    father_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    father_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_education: {
      type: DataTypes.STRING,
      allowNull: false
    },
    father_recent_education: {
      type: DataTypes.STRING,
      allowNull: false
    },
    father_occupation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mother_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mother_birth_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mother_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mother_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_education: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mother_recent_education: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mother_occupation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trustee_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trustee_birth_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trustee_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trustee_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_education: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trustee_recent_education: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trustee_occupation: {
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
  students.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return students;
};
