const { authenticate } = require('@feathersjs/authentication').hooks;

const generateStudyResult = require('../../hooks/generate-study-result');

const syncStudies = require('../../hooks/sync-studies');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [syncStudies()],
    update: [],
    patch: [],
    remove: [syncStudies()]
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
