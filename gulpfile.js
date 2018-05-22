const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', ()=> 
    gulp.src('./scss/*.sass')
    .pipe(sass({
        outputStyle: 'compressed', 
        sourceComments: false // Comments in the css where the property is in sass
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
     .pipe(gulp.dest('./css'))
);
gulp.task('default', () => {
    gulp.watch('./scss/*.sass', ['sass'])
});