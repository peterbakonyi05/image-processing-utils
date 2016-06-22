'use strict';

const gulp = require('gulp');
const tools = require('urbanjs-tools');

tools.initialize(gulp, {
  babel: false,

  checkDependencies: true,

  checkFileNames: true,

  eslint: true,

  jest: false,

  jscs: false,

  jsdoc: true,

  mocha: false,

  nsp: true,

  retire: true
});

gulp.task('default', () => {
  console.log('IMAGE PROCESSING UTILS'); // eslint-disable-line no-console
  console.log('type "npm run" to see the available commands'); // eslint-disable-line no-console
});
