/**
 * Created by army8735 on 2017/9/29.
 */

'use strict';

module.exports = app => {
  app.get('/string', 'view.string');
  app.get('/cp', 'view.cp');
  app.get('/vd', 'view.vd');
  app.get('/fn', 'view.fn');
  app.get('/rs', 'view.rs');
  app.get('/attr', 'view.attr');
  app.get('/bind', 'view.bind');
};
