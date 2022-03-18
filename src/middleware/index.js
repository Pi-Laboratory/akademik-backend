const files = require('./files');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/files/:service/:id/:col', files(app));
};
