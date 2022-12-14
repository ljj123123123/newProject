let {src,dest,watch} = require('gulp');
let htmlmin = require('gulp-htmlmin');
let sass = require('gulp-sass')(require('sass'));
let cssnano = require('gulp-cssnano');
let rename = require('gulp-rename');
let concat = require('gulp-concat');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
let imagemin = require('gulp-imagemin');
//index
let fnIndex = () =>{
    return src('./src/index.html')
    .pipe(dest('./dist'));
}
//html
let fnHTML = () =>{
    return src('./src/html/**/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/html'));
}
//css
let fnCSS = () =>{
    return src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/css'));
}
//js
let fnJS = () =>{
    return src('./src/js/**/*.js')
    .pipe(babel({
        presets :['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./dist/js'));
}
//img
let fnImg = () =>{
    return src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('./dist/images'));
}
//lib
let fnLib = () =>{
    return src('./src/lib/**/*')
    .pipe(dest('./dist/lib'));
}
//watch
let fnWatch = () =>{
    watch('./src/index.html',fnIndex);
    watch('./src/html/**/*.html',fnHTML);
    watch('./src/sass/**/*.scss',fnCSS);
    watch('./src/js/**/*.js',fnJS);
    watch('./src/images/**/*',fnImg);
    watch('./src/lib/**/*',fnLib);
}
exports.index = fnIndex;
exports.html = fnHTML;
exports.css = fnCSS;
exports.js = fnJS;
exports.lib = fnLib;
exports.images = fnImg;
exports.default = fnWatch; 