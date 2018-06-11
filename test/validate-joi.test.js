'use strict';

const mock = require('egg-mock');

describe('test/validate-joi.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/validate-joi-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, validateJoi')
      .expect(200);
  });
});
