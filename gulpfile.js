"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
var concatCss = require('gulp-concat-css');




function css() {
  return gulp
      .src("./assets/src/scss/app.scss")
      .pipe(plumber())
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(gulp.dest("./assets/dist/css/"))
      .pipe(rename({ suffix: ".min" }))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(gulp.dest("./assets/dist/css/"))
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./assets/src/js/**/*", "./gulpfile.js"])
    .pipe(plumber())
    // .pipe(eslint())
    // .pipe(eslint.format())
    // .pipe(eslint.failAfterError());
    
}

// Transpile, concatenate and minify scripts
function scripts() {
  return (
    gulp
      .src([
        "./node_modules/jquery/dist/jquery.js",
        // "./node_modules/@popperjs/core/dist/cjs/popper.js",
        "./node_modules/bootstrap/dist/js/bootstrap.bundle.js",
        "./node_modules/@splidejs/splide/dist/js/splide.js",
        "./node_modules/aos/dist/aos.js",
        './assets/src/js/scripts.js',
        ])
      .pipe(concat('./app.js'))
      .pipe(plumber())
      // .pipe(uglify())
      .pipe(gulp.dest("./assets/dist/js/"))
      
  );
}

function icons() {
  return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('./assets/dist/webfonts/'));
}


// Watch files
function watchFiles() {
  gulp.watch("./assets/src/scss/**/*", css);
  gulp.watch("./assets/src/js/**/*", scripts);
 
}

// define complex tasks
const js = gulp.series(scriptsLint, scripts);
const build = gulp.series(gulp.parallel(css, js, icons));
const watch = gulp.parallel(watchFiles);

// export tasks
exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = build;