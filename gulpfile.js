var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');
var uglify = require('gulp-uglify');

gulp.task('serve', function() {
  browserSync.init({
    server: "./"
  });

});

gulp.task('compress', function() {
  return gulp.src('./src/app.js')
  .pipe(minify())
  .pipe(uglify())
  .pipe(gulp.dest('./dist'));
});

gulp.task('css-watch', function() {
  gulp.watch("style/style.css", ['prefix']);
  gulp.watch("dist/*").on('change', browserSync.reload);
});

gulp.task('html-watch', function() {
  gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('js-watch', function() {
  gulp.watch("src/app.js").on('change', browserSync.reload);
});

gulp.task('prefix', function() {
  return gulp.src('style/style.css')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('dist/'));
  browserSync.reload();
});

gulp.task('default', ['prefix', 'serve', 'js-watch', 'html-watch', 'css-watch']);
