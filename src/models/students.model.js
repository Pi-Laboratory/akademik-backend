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
      allowNull: true
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
      allowNull: true
    },
    student_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_birth_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_recent_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    father_occupation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_birth_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_recent_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mother_occupation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_birth_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_death_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_recent_education: {
      type: DataTypes.STRING,
      allowNull: true
    },
    trustee_occupation: {
      type: DataTypes.STRING,
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
  students.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return students;
};
