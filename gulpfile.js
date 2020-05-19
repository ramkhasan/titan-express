function defaultTask(cb) {
    // place code for your default task here
    cb();
}
  
exports.default = defaultTask
 
let gulp =  require('gulp');
let cleanCSS =  require('gulp-clean-css');
let uglify =  require('gulp-uglify');
let htmlmin =  require('gulp-htmlmin');
 
gulp.task('min-css', function(done) {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8'} ))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('min-js', function(done) {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('min-html', function(done) {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});
