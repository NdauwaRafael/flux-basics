"use strict";
let gulp = require('gulp');
let connect = require('gulp-connect'); //Runs local dev server
let open = require('gulp-open'); //Opens a Url in web browser
let browserify = require('browserify'); //Bundle JavaScript
let reactify = require('reactify'); //Transforms React JSX to JS
let source = require('vinyl-source-stream'); //Use conventional text stream with Gulp
let concat = require('gulp-concat'); //Concatenate files
let lint = require('gulp-eslint'); //Lint JavaScript files, including JSX



//config
let config = {
    port: 9005,
    devBaseUrl: 'http:localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
                'node_modules/bootstrap/dist/css/bootstrap.css'
        ],
        dist: './dist',
        mainJs: './src/main.js'
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

gulp.task('html', ()=>{
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', ()=>{
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/js'))
        .pipe(connect.reload())

});

gulp.task('css', ()=>{
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', ()=>{
    return gulp.src(config.paths.js)
        .pipe(lint('eslint.config.json'))
        .pipe(lint.format())
});

gulp.task('watch', ()=>{
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.js, ['lint']);
    gulp.watch(config.paths.css, ['css']);
});
gulp.task('default', ['html', 'js', 'lint', 'css', 'open', 'watch']);

