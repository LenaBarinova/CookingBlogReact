var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var babel = require('babel-core/register');
 
const libs = [
  './node_modules/jquery/dist/jquery.min.js',
  './src/js/theme/skel.min.js',
  './src/js/theme/skel-layers.min.js',
  './src/js/theme/jquery.dropotron.min.js',
  './src/js/theme/init.js',
  './node_modules/react/dist/react.min.js'
  ];
const json =['./data/recipes/*'];
/* ------------ HELPER ------------ */

gulp.task('help', plug.taskListing);
gulp.task('default', ['help']);

gulp.task('clean', function () {
    return gulp.src('./output', {read: false})
        .pipe(plug.clean());
});

/* ------------ CODE & TESTS ------------ */

gulp.task('prep-js', function () {
  return browserify({
    extensions: ['.js', '.jsx'],
    entries: './src/app.jsx',
  })
    .transform(babelify.configure({
      ignore: /(node_modules)/
    }))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(plug.uglify())
    .pipe(gulp.dest('./output'));
});

gulp.task('test', function () {
  return gulp.src(['./test/**/*.js', './test/**/*.jsx'], { read: false })
    .pipe(plug.mocha({
      compilers: {
        js: babel
      }
    }));
});

/* ------------ IMAGES & STYLES ------------ */

gulp.task('copy-index', function() {
  return gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./output'));
});

gulp.task('prep-img', function () {
  return gulp
    .src('./src/images/recipes/*')
    .pipe(plug.imageResize({ 
      width : 400,
      height : 400,
      crop : false,
      upscale : false
    }))
    .pipe(plug.imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./output/images/recipes/'));
});

gulp.task('copy-img', function() {
  return gulp.src(['./src/images/*'])
    .pipe(gulp.dest('./output/images/'));
});

gulp.task('copy-fonts', function() {
  return gulp.src(['./src/fonts/**'])
    .pipe(gulp.dest('./output/fonts/'));
});

gulp.task('copy-styles', function() {
  return gulp.src(['./src/css/**/*'])
    .pipe(gulp.dest('./output/css/'));
});

gulp.task('prep-json', function () {
    return gulp.src(json)
        .pipe(plug.jsonminify())
        .pipe(gulp.dest('./output/data/recipes'));
});

gulp.task('prep-lib-js', function () {
  return gulp.src(libs)
    .pipe(plug.concat('lib.js'))
    .pipe(gulp.dest('./output'));
});

gulp.task('copy-files', ['prep-json','copy-index','prep-img', 'copy-img', 'copy-fonts', 'copy-styles', 'prep-lib-js'], function() {});

/* ------------ DEV ENV ------------ */

gulp.task('connect', function() {
	plug.connect.server({
		root: ['output'],
		port: 8008,
		base: 'http://localhost',
		livereload: true
	});
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['prep-js', 'test']);
});

/* ------------ TASKS ------------ */

gulp.task('clean-build', function(cb){
  plug.runSequence('clean', ['copy-files', 'test'], 'build', cb);
});

gulp.task('build', function (cb) {
  plug.runSequence('prep-js', 'watch', 'connect', cb);
});

/* ------------ PRODUCTION ------------ */

gulp.task('publish', ['clean-build'], function() {
  return gulp.src(['./output/**/*'])
    .pipe(plug.ghPages());
});
