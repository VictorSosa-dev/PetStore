'use strict'

const { task } = require('gulp');


var gulp = reqire('gulp'),
    sasss =  require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-ruv'),
    cleanCss = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    flamap = require('gulp-flatmap');

gulp-task('sass',function(){
    gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));

});

gulp.task('sass:watch', function(){
    gulp.wath('./css/*.scss',['sass']);
});

gulp.task('browser-sync', function(){
    var files = ['./*html','./css/*.css','/img/*.{png,jpg,jpeg,jfif','./js/*.js']
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['browser-sync'], function() {
    gulp.start('sass:watch');
});

gulp.task('clean',function(){
    return del(['dist']);
});

gulp.task('copyfonts', function(){
    gulp.src('./node_modules/open-iconic/font/fonts/*.{ttf,woff,eof,svg,eot, otf}*')
    .pipe(gulp.dest('./dist/´fonts'));
});

gulp-task('imagemin', function(){
    return gulp.src('./images/*.{png,jpg,jpeg,jfif}')
        .pipe(imagemin({optimationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulpe.dest('dist/images'));
});

gulp.task('usemin', function(){
    return gulp.src('./*html')
        .pipe(flatmap(function(stream, file){
            return stream
            .pipe(usemin({
                css: [rev()],
                html: [function(){
                    return htmlmin({collapseWhitespace: true})}],
                js: [unglify(), rev()],
                inlinejs: [unglify()],
                inlinecss: [cleanCss(), 'concat']    
            }))
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('buid', ['clean'],function(){
    gulp.start('copyfonts','imagemin','usemin');
});