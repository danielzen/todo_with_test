var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

//############################################
//Webpack
//############################################
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

gulp.task('webpack', function() {

});

//############################################
//GULP BUILD
//############################################

var protractor = require("gulp-protractor").protractor;
var Server = require('karma').Server;

gulp.task('prebuild', function() {
  //build for karma test
  //public/js/main.js not include in production
  return gulp.src(['public/js-src/*.js', 'public/js-src/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js'))
});

gulp.task('test:karma', ['prebuild'],function(done) {
  //karma
  new Server({
    configFile: __dirname + '/karma.config.js',
    singleRun: true
  }, done).start();
});

gulp.task('test:protractor', function() {
  //protractor
  //webdriver-manager start
  gulp.src(["./src/tests/protractor/*.js"])
    .pipe(protractor({
      configFile: "protractor.config.js",
      args: ['--baseUrl', 'http://127.0.0.1:3000']
    }))
    .on('error', function(e) {
      throw e
    })
})

gulp.task('test', ['test:karma', 'test:protractor']);
