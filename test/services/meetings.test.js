const app = require('../../src/app');

describe('\'meetings\' service', () => {
  it('registered the service', () => {
    const service = app.service('meetings');
    expect(service).toBeTruthy();
  });
});
