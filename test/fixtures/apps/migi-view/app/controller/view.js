/**
 * Created by army8735 on 2017/9/29.
 */

'use strict';

exports.string = function* (ctx) {
  yield ctx.render('string');
};

exports.cp = function* (ctx) {
  yield ctx.render('cp', { a: 123 });
};

exports.vd = function* (ctx) {
  yield ctx.render('vd');
};

exports.fn = function* (ctx) {
  yield ctx.render('fn', { a: 123 });
};

exports.rs = function* (ctx) {
  let a = yield ctx.renderString('<small>{ a }</small>', { a: 123 });
  this.body = a;
};
