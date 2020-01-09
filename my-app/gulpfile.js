'use strict';
// npm install -g gulp-cli

const gulp = require('gulp');
const path = require('path');
const requireDir = require('require-dir');

requireDir('./gulp-tasks', {recurse: true});
