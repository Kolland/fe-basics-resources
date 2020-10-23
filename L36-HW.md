**Завдання 1**

Продовжуємо верстати макет [Avenue](https://zpl.io/VYOeBLk) використовуючи препроцесор Sass(SCSS). PSD для макета знаходиться в папці Additional CSS HW

**Завдання 2**

1. Отримати дані з ендпойнта `https://my-json-server.typicode.com/Kolland/fe-basics-resources/products` за допомогою метода fetch. Результатом буде масив продуктів.
2. Вставити лінки на картинки у сітку картинок макету [Avenue](https://zpl.io/VYOeBLk). Лінк можна вставити як в атрибут `src` тега `img` так і в атрибут `style="background-image: url()".

**Завдання 3**
Попробувати без запуску визначити порядок виклику callback функцій.

```javascript
// який порядок виводу в console ?

const intervalId = setInterval(() => {
  console.log('setInterval');
}, 10);

setTimeout(() => {
  console.log('setTimeout 1');

  const promise = new Promise((resolve, reject) => {
    resolve('then 4');
  });

  promise
    .then((value) => {
      console.log(value);

      setTimeout(() => {
        console.log('setTimeout 2');
        clearInterval(intervalId);
      }, 10);
    });
}, 10);

const promise = new Promise((resolve, reject) => {
  resolve('then 1');
});

promise
  .then((value) => {
    console.log(value);
    return 'then 2';
  })
  .then((value) => {
    console.log(value);

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 10, 'then 3');
    });
  })
  .then((value) => {
    console.log(value);
  });
```
