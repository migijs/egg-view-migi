/**
 * Created by army8735 on 2017/9/29.
 */

'use strict';

const lefty = require('lefty');
const babelCore = require('babel-core');
const glob = require('glob');
const path = require('path');
const fs = require('fs');

glob('**/*.jsx', function(er, files) {
  console.log(files);
  files.forEach(function(file) {
    const name = path.join(__dirname, file);
    const content = fs.readFileSync(name, { encoding: 'utf-8' });
    const res = babelCore.transform(lefty.parse(content), {
      presets: [ 'babel-preset-es2015' ],
    }).code;
    fs.writeFileSync(name.replace(/\.jsx$/, '.js'), res);
  });
});
