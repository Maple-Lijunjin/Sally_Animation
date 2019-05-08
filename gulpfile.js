var gulp = require('gulp')
var htmlmin = require('gulp-htmlmin')
var connect = require('gulp-connect')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')

var DEST = 'build'

gulp.task('default', function() {
  //TODO
  console.log('Gulp 启动成功！')
})

gulp.task('testhtml', function() {
  gulp.src('src/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true 
  }))
  .pipe(gulp.dest('dist'))
})

//这是gulp-connect插件的使用方法
/*
*port端口号
*livereload的值如果是false的话就是关闭实时更新
*/
gulp.task('connect', function() {
  connect.server({
    port: '3333',
    libereload: true
  })
})

gulp.task('uglify', function() {
  gulp.src('src/index.js')
  .pipe(gulp.dest(DEST))
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(gulp.dest(DEST))
})



gulp.task('default', ['testhtml', 'connect', 'uglify'])
