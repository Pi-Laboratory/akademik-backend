const app = require('../../src/app');

describe('\'districts\' service', () => {
  it('registered the service', () => {
    const service = app.service('districts');
    expect(service).toBeTruthy();
  });
});
