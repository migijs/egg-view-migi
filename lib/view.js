/**
 * Created by army8735 on 2017/9/28.
 */

'use strict';

const migi = require('migi');
const lefty = require('lefty');
const vm = require('vm');

const toString = {}.toString;
function isType(type) {
  return function(obj) {
    return toString.call(obj) === '[object ' + type + ']';
  };
}
const isFunction = isType('Function');

class MigiView {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.migi;
  }
  * render(filename, locals) {
    const config = this.config;
    if (!config.cache) {
      delete require.cache[filename];
    }
    let mod = require(filename);
    mod = mod.default || mod;
    let elem;
    if (migi.Component.isPrototypeOf(mod)) {
      elem = migi.createCp(mod, locals, []);
    } else if (mod instanceof migi.VirtualDom) {
      elem = mod;
    } else if (isFunction(mod)) {
      const res = mod(locals);
      if (migi.Component.isPrototypeOf(res)) {
        return migi.preRender(migi.createCp(res));
      } else if (res instanceof migi.VirtualDom) {
        return migi.preRender(res);
      }
      return res.toString();
    } else {
      return mod.toString();
    }
    return migi.preRender(elem);
  }
  * renderString(jsx, locals) {
    locals.migi = migi;
    const context = new vm.createContext(locals);
    const script = new vm.createScript('var __migiTpl = migi.preRender(' + lefty.parse(jsx) + ')');
    script.runInContext(context);
    return context.__migiTpl;
  }
}

module.exports = MigiView;
