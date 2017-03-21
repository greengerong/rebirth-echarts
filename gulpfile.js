var gulp = require('gulp');
var os = require('os');
var path = require('path');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var inlineNg2Template = require('gulp-inline-ng2-template');
var runSequence = require('run-sequence').use(gulp);
var exec = require('child_process').exec;
var del = require('del');
var gulpif = require('gulp-if');
var swPrecache = require('sw-precache');
var clean = require('gulp-clean');
var ejs = require('gulp-ejs');
var insertLines = require('gulp-insert-lines');

var cmpGenConfig = {
  componentSelector: '',
  componentName: '',
};

var config = {
  root: './src',
  src: './src/app/exports',
  dest: './dist',
  lib: './lib',
  aot: './aot',
  newCmpTmpl: './build/new-cmp-template'
};

function platformPath(path) {
  return /^win/.test(os.platform()) ? path + '.cmd' : path;
}

gulp.task('clean:dist', function () {
  return del.sync(config.dest, config.aot, config.lib);
});

gulp.task('copy:exports', ['clean:dist'], function () {
  return gulp.src([config.src + '/**/*.*'])
    .pipe(gulpif(/.+\.scss/g, sass({outputStyle: 'compressed'}).on('error', sass.logError)))
    .pipe(rename(function (path) {
      if (path.extname === '.css') {
        path.extname = '.scss';
      }
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('ng2:inline', ['copy:exports'], function () {
  return gulp.src([config.dest + '/**/*.ts'])
    .pipe(inlineNg2Template({useRelativePaths: true, target: 'es5'}))
    .pipe(gulp.dest(config.dest + '/'));
});

gulp.task('ng2:aot', ['ng2:inline'], function (cb) {
  var executable = path.join(__dirname, platformPath('/node_modules/.bin/ngc'));
  exec(executable + ' -p ./dist/tsconfig-es2015.json', function (e) {
    if (e) {
      console.error(e);
    }
    del([config.aot, config.dest]);
    cb(e);
  }).stdout.on('data', function (data) {
    console.log(data);
  });
});

gulp.task('prenpm', ['ng2:aot'], function () {
  return gulp.src(['README.md', 'package.json', 'src/app/exports/**/*.d.ts'], {read: true})
    .pipe(gulp.dest(config.lib));
});

gulp.task('sw:code-gen', function (cb) {
  swPrecache.write(config.root + '/service-worker.js', {
    staticFileGlobs: [config.root + '/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    stripPrefix: config.root
  }, cb);
});


gulp.task('prepublish', function (cb) {
  runSequence(['clean:dist', 'copy:exports', 'ng2:inline', 'ng2:aot', 'prenpm'], cb);
});
