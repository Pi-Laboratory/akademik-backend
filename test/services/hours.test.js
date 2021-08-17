const app = require('../../src/app');

describe('\'hours\' service', () => {
  it('registered the service', () => {
    const service = app.service('hours');
    expect(service).toBeTruthy();
  });
});
