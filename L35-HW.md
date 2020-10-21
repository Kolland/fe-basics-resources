**Завдання 1**

Продовжуємо верстати макет [Avenue](https://zpl.io/VYOeBLk) використовуючи препроцесор Sass(SCSS). PSD для макета знаходиться в папці Additional CSS HW 

**Завдання 2**
Попробувати без запуску визначити порядок виклику callback функцій.

```javascript
// який порядок виводу в console ?

const intervalId = setInterval(() => {
    console.log('setInterval'); // 1
}, 10);

setTimeout(() => {
    console.log('setTimeout 1'); // 2

    setTimeout(() => {
        console.log('setTimeout 2'); // 3
    }, 0);
}, 10);

setTimeout(() => {
    console.log('setTimeout 3'); // 4

    setTimeout(() => {
        console.log('setTimeout 4'); // 5

        setTimeout(() => {
            console.log('setTimeout 5'); // 6
        }, 10);
    }, 0);
}, 0);
```

**Завдання 3**
Добавити browsersync в gulpfile

1. В папці з `package.json` встановити browserSync використовуючи команду ` npm install browser-sync --save-dev`. 

2. Добавити browserSync в gulpfile.js. В результаті наш gulpfile буде виглядати так: 

```javascript
const gulp = require('gulp');
const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const srcPath = 'src/**/*.scss'; // Шлях до наших scss файлів
const distPath = 'dist'; // Шлях до папки куди будуть компілюватися наші css файли
const indexPath = './'; // Шлях до папки де знаходиться index.html

gulp.task('sass', function(){
    return gulp.src(srcPath)
    .pipe(sass())
    .pipe(gulp.dest(distPath))
    .pipe(browserSync.stream())
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: indexPath
        },
    })
})

gulp.task('watch', function(){
    gulp.watch(srcPath, gulp.series(['sass']));
})

gulp.task('dev', gulp.parallel('browserSync', 'sass', 'watch', function (done) {
    done();
}));
```

2. Тепер для того щоб заустити локальний сервер потрібно ввести команду `gulp browserSync`.
