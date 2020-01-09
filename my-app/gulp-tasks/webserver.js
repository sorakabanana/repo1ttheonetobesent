'use strict';
const gulp = require('gulp');
const path = require('path');
const webserver = require('gulp-connect');
const fs = require('fs');

gulp.task('webserver', () => {

  const buildPath = path.resolve(__dirname, '..', 'build');
  console.log({buildPath});
  return webserver.server({
    root: buildPath,
    host: '0.0.0.0',
    port: 4200
  });
});
