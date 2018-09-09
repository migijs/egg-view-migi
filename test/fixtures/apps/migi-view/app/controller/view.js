/**
 * Created by army8735 on 2017/9/29.
 */

'use strict';

exports.string = async function(ctx) {
  await ctx.render('string');
};

exports.cp = async function(ctx) {
  await ctx.render('cp', { a: 123 });
};

exports.vd = async function(ctx) {
  await ctx.render('vd');
};

exports.fn = async function(ctx) {
  await ctx.render('fn', { a: 123 });
};

exports.rs = async function(ctx) {
  let a = await ctx.renderString('<small>{ a }</small>', { a: 123 });
  this.body = a;
};

exports.attr = async function(ctx) {
  await ctx.render('attr', { readonly: true, class: 'c', title: 'title', value: 123 });
};

exports.bind = async function(ctx) {
  await ctx.render('bind', { value: 1 });
};

exports.constructor = async function(ctx) {
  await ctx.render('constructor', { a: 123 });
};
