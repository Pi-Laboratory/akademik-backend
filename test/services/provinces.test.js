const app = require('../../src/app');

describe('\'provinces\' service', () => {
  it('registered the service', () => {
    const service = app.service('provinces');
    expect(service).toBeTruthy();
  });
});
