const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

var allScripts = ['./*.js', './lib/*.js', './test/**/*test.js'];

gulp.task('lint', () => {
  return gulp.src(allScripts)
  .pipe(eslint({}))
  .pipe(eslint.format());
});

gulp.task('lint:watch', () => {
  return gulp.watch(allScripts, ['lint']);
});

var testScripts = ['./test/**/*test.js'];

gulp.task('mocha', () => {
  return gulp.src(testScripts)
  .pipe(mocha({ 'reporter': 'nyan' }));
});

gulp.task('default', ['lint', 'mocha']);
