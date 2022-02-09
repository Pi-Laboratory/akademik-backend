const app = require('../../src/app');

describe('\'registrations\' service', () => {
  it('registered the service', () => {
    const service = app.service('registrations');
    expect(service).toBeTruthy();
  });
});
