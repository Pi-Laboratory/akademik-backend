const app = require('../../src/app');

describe('\'semesters\' service', () => {
  it('registered the service', () => {
    const service = app.service('semesters');
    expect(service).toBeTruthy();
  });
});
