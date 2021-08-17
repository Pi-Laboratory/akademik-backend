const app = require('../../src/app');

describe('\'lecturers\' service', () => {
  it('registered the service', () => {
    const service = app.service('lecturers');
    expect(service).toBeTruthy();
  });
});
