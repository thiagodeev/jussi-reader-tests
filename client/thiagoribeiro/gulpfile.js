"use strict"

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("default", watch);
gulp.task("sass", compileSass);

function compileSass(){
    return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
};

function watch(){
    gulp.watch("src/scss/**/*.scss", compileSass);
}
