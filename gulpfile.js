const gulp     = require('gulp');
const clean    = require('gulp-clean');
const nunjucks = require('gulp-nunjucks');

gulp.task('cleanTask', function () {
    return gulp.src('dist/*.html')
        .pipe(clean());
});
gulp.task('renderTask', function () {
    return gulp.src('src/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('dist'));
});
gulp.task('finishTask', gulp.parallel(function () {
    return gulp.src('dist/template.html')
        .pipe(clean());
// }, function () {
//     return gulp.src('dist/auth_check.html')
//         .pipe(clean());
}, function () {
    return gulp.src('dist/navbar.html')
        .pipe(clean());
}));

gulp.task('default', gulp.series('cleanTask', 'renderTask', 'finishTask'));
