'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('templates', (cb) => {
  runSequence(['templates:common'], cb);
});
