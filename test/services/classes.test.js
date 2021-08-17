const app = require('../../src/app');

describe('\'classes\' service', () => {
  it('registered the service', () => {
    const service = app.service('classes');
    expect(service).toBeTruthy();
  });
});
