// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    if (!context.params) return context;
    if (!context.params.provider) {
      delete context.params.sequelize;
      return context;
    }
    const sequelize = context.app.get('sequelizeClient');
    const query = context.params.query;
    context.params.sequelize = {
      distinct: query.$distinct,
      include: typeof query.$include === 'object' ? query.$include.map((include) => buildIncludes(include, sequelize.models)) : [],
      raw: false,
      subQuery: query.$subQuery
    };
    delete context.params.query.$include;
    delete context.params.query.$subQuery;
    removeLarge(query.$select, sequelize.models[context.path.replace(/-/g, '_')], context.params.sequelize);
    return context;
  };
};

function buildIncludes(m, models) {
  if (m.model === 'users') {
    if (m.$select)
      if (m.$select.indexOf('password') !== -1)
        delete m.$select[m.$select.indexOf('password')];
  }
  const parsed = {
    required: m.$required,
    where: m.$where,
    model: models[m.model],
    attributes: m.$select,
    include: typeof m.$include === 'object' ? m.$include.map((include) => buildIncludes(include, models)) : [],
    raw: false,
    as: m.as,
    subQuery: m.$subQuery
  };
  removeLarge(m.$select, models[m.model], parsed);
  return parsed;
}

function removeLarge($select, model, sequelize) {
  for (let attr in model.attributes) {
    const f = model.attributes[attr];
    if (f.type instanceof DataTypes.BLOB) {
      if (!Array.isArray($select)) {
        if (sequelize.attributes) {
          sequelize.attributes.exclude.push(attr);
        } else {
          sequelize.attributes = { exclude: [attr] }
        }
      }
    }
  }
}