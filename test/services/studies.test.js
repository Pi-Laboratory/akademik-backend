const app = require('../../src/app');

describe('\'studies\' service', () => {
  it('registered the service', () => {
    const service = app.service('studies');
    expect(service).toBeTruthy();
  });
});
