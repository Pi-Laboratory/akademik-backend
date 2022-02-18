const app = require('../../src/app');

describe('\'preceptors\' service', () => {
  it('registered the service', () => {
    const service = app.service('preceptors');
    expect(service).toBeTruthy();
  });
});
