/**
 * Created by army8735 on 2017/9/28.
 */

'use strict';

module.exports = app => {
  app.view.use('migi', require('./lib/view'));
};
