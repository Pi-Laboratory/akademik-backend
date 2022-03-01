const app = require('../../src/app');

describe('\'attendances\' service', () => {
  it('registered the service', () => {
    const service = app.service('attendances');
    expect(service).toBeTruthy();
  });
});
