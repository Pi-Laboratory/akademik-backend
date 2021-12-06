const app = require('../../src/app');

describe('\'study_results\' service', () => {
  it('registered the service', () => {
    const service = app.service('study-results');
    expect(service).toBeTruthy();
  });
});
