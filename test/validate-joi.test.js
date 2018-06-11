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

  it('GET / should success', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, validateJoi')
      .expect(200);
  });

  it('GET /123456 should error', () => {
    return app.httpRequest()
      .get('/123456')
      .expect({
        'params.id': '"id" must be a valid GUID',
      })
      .expect(200);
  });

  it('GET /82255380-27f7-422c-87d6-85eb124a3744 should success', () => {
    return app.httpRequest()
      .get('/82255380-27f7-422c-87d6-85eb124a3744')
      .expect({
        params: { id: '82255380-27f7-422c-87d6-85eb124a3744' },
        query: {},
        body: {},
      })
      .expect(200);
  });

  it('POST / should error', () => {
    return app.httpRequest()
      .post('/')
      .send({
        id: '123456',
        name: 'mosaic101',
        email: 'mosaic101',
      })
      .expect({
        'body.id': '"id" must be a valid GUID',
        'body.email': '"email" must be a valid email',
      })
      .expect(200);
  });

  it('POST / should success', () => {
    return app.httpRequest()
      .post('/')
      .send({
        id: '82255380-27f7-422c-87d6-85eb124a3744',
        name: 'mosaic101',
        email: 'mosaic101@foxmail.com',
      })
      .expect({
        params: {},
        query: {},
        body: {
          id: '82255380-27f7-422c-87d6-85eb124a3744',
          name: 'mosaic101',
          email: 'mosaic101@foxmail.com',
        },
      })
      .expect(200);
  });

  it('POST /82255380-27f7-422c-87d6-85eb124a3744/topics should error', () => {
    return app.httpRequest()
      .post('/82255380-27f7-422c-87d6-85eb124a3744/topics?name=mosaic101')
      .send({
        topicId: '1',
        name: 123456,
      })
      .expect({
        'body.topicId': '"topicId" must be a valid GUID',
        'body.name': '"name" must be a string',
      })
      .expect(200);
  });

  it('POST /82255380-27f7-422c-87d6-85eb124a3744/topics should success', () => {
    return app.httpRequest()
      .post('/82255380-27f7-422c-87d6-85eb124a3744/topics?name=mosaic101')
      .send({
        topicId: '5d0a6935-3814-4438-9381-8811e5fe7a05',
        name: 'how to use egg-validate-joi',
      })
      .expect({
        params: { id: '82255380-27f7-422c-87d6-85eb124a3744' },
        query: { name: 'mosaic101' },
        body: {
          topicId: '5d0a6935-3814-4438-9381-8811e5fe7a05',
          name: 'how to use egg-validate-joi',
        },
      })
      .expect(200);
  });
});
