let gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'); // Подключаем Sass пакет
const gulp = require('gulp');
const babel = require('gulp-babel');


gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
    
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(gulp.dest('styles')) // Выгружаем результата в папку css
  });

gulp.task('watch', function() {
  gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']);
  gulp.watch(['styles/**/*.css'], ['css']); // Наблюдение за sass файлами в папке sass
});

gulp.task('css', function() {
  return gulp.src(['styles/*.css'])
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['watch']);
