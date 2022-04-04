"use strict"

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require('gulp-concat');

gulp.task("default", watch);
gulp.task("sass", compileSass);
gulp.task("js", compileJS);

function compileSass(){
    return gulp
    .src("src/scss/**/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/"));
};

function compileJS(){
    return gulp
    .src([
        "src/js/api.js",
        "src/js/search.js"
    ])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("src/"));
}

function watch(){
    gulp.watch("src/scss/**/*.scss", compileSass);
}
