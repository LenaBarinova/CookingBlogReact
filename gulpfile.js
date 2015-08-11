var gulp = require('gulp');
var plug = require('gulp-load-plugins')();
 
gulp.task('react', function () {
  return gulp.src(['./*/*.jsx', '*.jsx'])
        .pipe(plug.react({harmony: false, es6module: true}))
        .pipe(gulp.dest('output'));
});
 
gulp.task('browserify', ['react'], function(){
  return gulp.src('output/*.js')
        .pipe(plug.browserify({ insertGlobals : true }))
        .pipe(gulp.dest('output'));     
});
 
gulp.task('es2015', ['browserify'], function () {  
  return gulp.src('output/*.js')
        .pipe(plug.babel())
        .pipe(gulp.dest('output'));
});
 
gulp.task('test', function () {
  return gulp.src('test', {read: false})
        .pipe(plug.shell(['mocha test/*test.js   --compilers js:babel/register']));
});

gulp.task('copy-index', function() {
  return gulp.src(['./index.html'])
    .pipe(gulp.dest('./output'));
});

gulp.task('copy-img', function() {
  return gulp.src(['./images/**/*'])
    .pipe(gulp.dest('./output/images/'));
});

gulp.task('copy-fonts', function() {
  return gulp.src(['./fonts/**'])
    .pipe(gulp.dest('./output/fonts/'));
});

gulp.task('copy-styles', function() {
  return gulp.src(['./css/**/*'])
    .pipe(gulp.dest('./output/css/'));
});
gulp.task('copy-jstheme', function() {
  return gulp.src(['./js/theme/*'])
    .pipe(gulp.dest('./output/js/theme'));
});
    
gulp.task('build',['es2015', 'test','copy-jstheme','copy-index','copy-img', 'copy-fonts', 'copy-styles'], function(){
  return gulp.src('./output/index.html')
        .pipe(plug.open(), {app: 'google-chrome'});
});

gulp.task('watch', function() {
    gulp.watch('**/*.*', ['test']);
});

gulp.task('publish', function() {
  return gulp.src(['./output/**/*'])
    .pipe(plug.ghPages());
});