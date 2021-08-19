// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const subjects = sequelizeClient.define('subjects', {
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    stheory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spractice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    spractice_field: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stotal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_hours: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    minimum_pass_score: {
      type: DataTypes.STRING,
      allowNull: false
    },
    semester: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subject_trait: {
      type: DataTypes.STRING,
      allowNull: false
    },
    study_plan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    study_matter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    study_note: {
      type: DataTypes.STRING,
      allowNull: false
    },
    abstract: {
      type: DataTypes.STRING,
      allowNull: false
    },
    syllabus_file: {
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
  subjects.associate = function (models) {
    subjects.belongsTo(models.majors, { onDelete: 'cascade' });
    subjects.belongsTo(models.study_programs, { onDelete: 'cascade' });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return subjects;
};
