/**
 * Created by army8735 on 2017/9/30.
 */

'use strict';

const migi = require('migi-server');
const MIGI = Symbol('Application#migi');

module.exports = {
  get migi() {
    if (!this[MIGI]) {
      this[MIGI] = migi;
    }
    return this[MIGI];
  },
};
