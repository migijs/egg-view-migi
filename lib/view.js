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

const tplCacheMap = new Map();

class MigiView {
  constructor(ctx) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.config = ctx.app.config.migi;
  }
  async render(filename, locals) {
    const config = this.config;
    if (!config.cache) {
      delete require.cache[filename];
    }
    let mod = require(filename);
    mod = mod.default || mod;
    migi.resetUid();
    let elem;
    let s;
    if (migi.Component.isPrototypeOf(mod)) {
      elem = migi.createCp(mod, locals, []);
    } else if (mod instanceof migi.VirtualDom) {
      elem = mod;
    } else if (isFunction(mod)) {
      const res = mod(locals);
      if (migi.Component.isPrototypeOf(res)) {
        s = migi.preRender(migi.createCp(res));
      } else if (res instanceof migi.VirtualDom) {
        s = migi.preRender(res);
      } else if (res === null || res === undefined) {
        s = '';
      } else {
        s = res.toString();
      }
      migi.resetUid();
      return s;
    } else if (mod === null || mod === undefined) {
      return '';
    } else {
      s = mod.toString();
      migi.resetUid();
      return s;
    }
    s = migi.preRender(elem);
    migi.resetUid();
    return s;
  }
  async renderString(jsx, locals) {
    const config = this.config;
    migi.resetUid();
    let tpl;
    if (config.cache) {
      if (tplCacheMap.has(jsx)) {
        tpl = tplCacheMap.get(jsx);
      } else {
        tpl = lefty.parse(jsx);
        tplCacheMap.set(jsx, tpl);
      }
    } else {
      tpl = lefty.parse(jsx);
    }
    locals.migi = migi;
    const context = new vm.createContext(locals);
    const script = new vm.createScript('var __migiTpl = migi.preRender(' + tpl + ')');
    script.runInContext(context);
    migi.resetUid();
    return context.__migiTpl || '';
  }
}

module.exports = MigiView;
