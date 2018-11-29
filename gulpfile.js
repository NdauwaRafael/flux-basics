"use strict";
let gulp = require('gulp');
let connect = require('gulp-connect'); //Runs local dev server
let open = require('gulp-open'); //Opens a Url in web browser

//config
let config = {
    port: 9005,
    devBaseUrl: 'http:localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
};
//start local development server
gulp.task('connect', ()=>{
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    })
});

gulp.task('open', ['connect'], ()=>{
    gulp.src('dist/index.html')
        .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/'}))
});

