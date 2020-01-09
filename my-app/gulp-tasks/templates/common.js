'use strict';
const gulp = require('gulp');
const path = require('path');
const templateCache = require('gulp-angular-templatecache');

gulp.task('templates:common', function () {
  return gulp.src(['my-app/**/*.html'])
    .pipe(templateCache({standalone: true, module: 'commonTemplates', root: '/my-app/src'}))
    .pipe(gulp.dest('build-temp/apps/common'));
});
