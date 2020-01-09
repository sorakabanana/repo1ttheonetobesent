'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');

gulp.task('build-prod', (cb) => {
  runSequence('clean', ['templates'], 'clean-build', () => {
    del(['./build', 'build-temp']);
    cb();
  });
});

gulp.task('build-dev', (cb) => {
  runSequence('clean', ['templates'], 'clean-build', 'zip:dev', cb);
});

gulp.task('build-watch', (cb) => {
  runSequence('clean', ['templates'], 'clean-build', cb);
});
