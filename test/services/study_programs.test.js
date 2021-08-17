const app = require('../../src/app');

describe('\'study_programs\' service', () => {
  it('registered the service', () => {
    const service = app.service('study-programs');
    expect(service).toBeTruthy();
  });
});
