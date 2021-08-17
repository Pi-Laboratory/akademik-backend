const app = require('../../src/app');

describe('\'curriculums\' service', () => {
  it('registered the service', () => {
    const service = app.service('curriculums');
    expect(service).toBeTruthy();
  });
});
