const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tslint = require('gulp-tslint');
const tscConfig = require('./tsconfig.json');

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
    return gulp
        .src('app/**/*.ts')
        .pipe(sourcemaps.init())          // <--- sourcemaps
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))      // <--- sourcemaps
        .pipe(gulp.dest('dist/app'));
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function () {
    return gulp.src([
        'node_modules/**/*.js'
    ])
        .pipe(gulp.dest('dist/node_modules'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function () {
    return gulp.src(['app/**/*', 'index.html', 'styles.css', '*.js', '*.json'], { base: './' })
        .pipe(gulp.dest('dist'))
});

gulp.task('tslint', ['clean'], function () {
    return gulp.src('app/**/*.ts')
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

gulp.task('build', ['tslint', 'compile', 'copy:libs', 'copy:assets']);
gulp.task('quickbuild', ['compile', 'copy:libs', 'copy:assets']);
gulp.task('default', ['quickbuild']);