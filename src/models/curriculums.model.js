// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const curriculums = sequelizeClient.define('curriculums', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publish_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    approving_party: {
      type: DataTypes.STRING,
      allowNull: false
    },
    approving_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ideal_study_period: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maximum_study_period: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    minimal_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maximum_d_score: {
      type: DataTypes.INTEGER,
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
  curriculums.associate = function (models) {
    curriculums.belongsTo(models.study_programs, { onDelete: 'cascade' });
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return curriculums;
};
