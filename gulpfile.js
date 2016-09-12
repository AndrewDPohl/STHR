var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var cdnizer = require("gulp-cdnizer");
var browserSync = require('browser-sync').create();

gulp.task('styles', function () {
    return gulp.src('./app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('style', function () {
    return gulp.src('./app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function() {
    return gulp.src('./app/js/main.js')
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('audio', function() {
    return gulp.src('./app/audio/**/*.mp3')
        .pipe(gulp.dest('./audio'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('artists', function() {
    return gulp.src('./app/artists/*.html')
        .pipe(gulp.dest('./artists'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('home', function() {
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('videos', function() {
    return gulp.src('./app/videos/eh5v.files/**/*.+(jpg|m4v|webm|js|png)')
        .pipe(gulp.dest('./videos/eh5v.files'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    });

    gulp.watch('./app/main.js', ['js']);
    gulp.watch('./app/scss/*.scss', ['styles', 'style']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'style', 'js', 'audio', 'videos', 'artists', 'home', 'serve']);