var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

//############################################
//GULP BUILD
//############################################
gulp.task('build', ['babel', 'sass']);

gulp.task('babel', function () {
  return gulp.src(['public/js-src/*.js','public/js-src/**/*.js'])
  .pipe(sourcemaps.init())
  .pipe(babel())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('sass', function(){
    return gulp.src('./public/scss/main.scss')
    .pipe(sass({
        errLogToConsole: true
    }))
    .pipe(gulp.dest('./public/css'));
});

//############################################
//Livereload
//############################################
gulp.task('livereload', function(){
  livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./public/style.css').pipe(livereload());
});

//############################################
//Webpack
//############################################
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

gulp.task('webpack', function(){

});

//############################################
//GULP BUILD
//############################################

var protractor = require("gulp-protractor").protractor;


gulp.task('test', function(){
	//protractor
  gulp.src(["./src/tests/*.js"])
    .pipe(protractor({
        configFile: "conf.js",
        args: ['--baseUrl', 'http://127.0.0.1:3000']
    }))
    .on('error', function(e) { throw e })
});


//Default
gulp.task('default', function () {
    console.log('running default');

    gulp.watch('./app.js', function(){
        console.log('server code changed');
        return gulp.src(['app.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('server'));
});

    // livereload.listen();
    // gulp.start('build');

    // gulp.watch('browser/js/**', function () {
    //     runSeq('buildJS', 'reload');
    // });

    // gulp.watch('browser/scss/**', function () {
    //     runSeq('buildCSS', 'reloadCSS');
    // });

    // gulp.watch('server/**/*.js', ['lintJS']);

    // // Reload when a template (.html) file changes.
    // gulp.watch(['browser/**/*.html', 'server/app/views/*.html'], ['reload']);

    // // Run server tests when a server file or server test file changes.
    // gulp.watch(['tests/server/**/*.js'], ['testServerJS']);

    // // Run browser testing when a browser test file changes.
    // gulp.watch('tests/browser/**/*', ['testBrowserJS']);

});