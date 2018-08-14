/**
 * Created by army8735 on 2017/9/28.
 */

'use strict';

const path = require('path');
const request = require('supertest');
const mm = require('egg-mock');
const fs = require('fs');

const fixtures = path.join(__dirname, 'fixtures');

describe('test/egg-view-migi.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/migi-view',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should render string', () => {
    return app.httpRequest()
      .get('/string')
      .expect('hello migi!')
      .expect(200);
  });

  it('should render cp', () => {
    return app.httpRequest()
      .get('/cp')
      .expect('<div migi-uid="1">123</div>')
      .expect(200);
  });

  it('should render vd', () => {
    return app.httpRequest()
      .get('/vd')
      .expect('<span migi-uid="0">123</span>')
      .expect(200);
  });

  it('should render fn', () => {
    return app.httpRequest()
      .get('/fn')
      .expect('<p migi-uid="0">123</p>')
      .expect(200);
  });

  it('should renderString', () => {
    return app.httpRequest()
      .get('/rs')
      .expect('<small migi-uid="0">123</small>')
      .expect(200);
  });

  it('should renderAttr', () => {
    return app.httpRequest()
      .get('/attr')
      .expect('<div class="c" title="title" migi-uid="2"><input readonly="true" value="123" migi-uid="1"/></div>')
      .expect(200);
  });

  it('should renderBind', () => {
    return app.httpRequest()
      .get('/bind')
      .expect('<div migi-uid="1">1</div>')
      .expect(200);
  });
});
