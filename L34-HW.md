**Завдання 1**

Продовжуємо верстати макет [Avenue](https://zpl.io/VYOeBLk) використовуючи препроцесор Sass(SCSS). PSD для макета знаходиться в папці Additional CSS HW 

**Завдання 2**

Встановити gulp в проект та налаштувати gulp-sass

Інструкція
1. Встановити [NodeJs LTS](https://nodejs.org/uk/)
2. Перевірити коректність встановлення командою `node -v` в консолі. Повинно вивести версію встановленої ноди.
3. Перевірити коректність роботи npm командою `npm -v` в консолі.Повинно вивести версію встановленого npm.
4. Встановлюємо gulp CLI командою `npm i gulp -g`.
5. Заходимо в існуючу папку репозиторію (папка з домашніми роботами) або створюємо нову папку проекту і ініціалізуємо в ній npm за допомогою команди `npm init`. Заповнюємо лише перший пункт name, решту пропукаємо ентером. В результаті в папці де запускали команду появиться файл `package.json`. Це говорить про те що npm ініціалізований правильно.
6. Після того як ми ініціалізували npm для проекту, нам потрібно встановити локальну версію `gulp` та `gulp-sass`. Для цього ми по черзі викликаємо спочатку команду `npm i gulp` та `npm i gulp-sass`. Викликати команди потрібно в тій самій папці де у вас знаходиться `package.json`.
7. Після того як ми встановили gulp та gulp-sass поряд з package.json створюємо файл `gulpfile.js` і вставляємо в нього наступний код

```javascript
    const gulp = require('gulp');
    const sass = require('gulp-sass');
    const srcPath = 'src/**/*.scss'; // Шлях до наших scss файлів
    const distPath = 'dist'; // Шлях до папки куди будуть компілюватися наші css файли


    gulp.task('sass', function(){
        return gulp.src(srcPath)
        .pipe(sass())
        .pipe(gulp.dest(distPath))
    });

    gulp.task('watch', function(){
        gulp.watch(srcPath, gulp.series(['sass']));
    })
```

7. Далі з цієїж папки запускаємо команду `gulp watch`. Повинен запуститися watch таск і тепер коли відбудуться зміни у ваших scss файлах в папці src то вони будуть автоматично перекомпільовані в css в папку dist. Щоб зупинити виконання команди watch - потрібно нажати Ctrl+C.