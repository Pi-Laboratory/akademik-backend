const app = require('../../src/app');

describe('\'neighbors\' service', () => {
  it('registered the service', () => {
    const service = app.service('neighbors');
    expect(service).toBeTruthy();
  });
});
