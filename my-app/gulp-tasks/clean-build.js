'use strict';
const gulp = require('gulp');
const deleteEmpty = require('delete-empty');
const del = require('del');

gulp.task('clean-build', function () {
  return del(['build/modules/**/*.html', 'build/apps/common/**/*.html']).then(() => {
    deleteEmpty.sync('build');
  });
});
