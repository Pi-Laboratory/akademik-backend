const app = require('../../src/app');

describe('\'study_plans\' service', () => {
  it('registered the service', () => {
    const service = app.service('study-plans');
    expect(service).toBeTruthy();
  });
});
