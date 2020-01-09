'use strict';
const gulp = require('gulp');
const runSequence = require('run-sequence');


const watchTask = (runTask) => {
  const watchName = `watch:${runTask}`;
  gulp.task(watchName, (cb) => {
    runSequence([runTask, 'clean-build'], cb);
  });
  return [watchName];
};

gulp.task('watch', ['build-watch'], function () {
  gulp.watch(['my-app/src/**/*.html'], watchTask('templates:common'));
});
