**Завдання 1**
Напишіть код який виведе співробітника який виконав більше всіх задач.

Наприклад
```javascript
const tasksCompleted = {
  'Serg': 29,
  'Maryna': 35,
  'Elena': 1,
  'Anton': 99
};
```

**Завдання 2**
Напишіть функцію multiplyNumeric, яка приймає на вхід об'єкт і повертає новий об'єкт в якому всі числові значення у властивостей помножені на 2.

*Підказка: для визначення типу потрібно використати `typeof`*

```javascript
// Before
const image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

multiplyNumeric(image);

// after
bigImage = {
    width: 200,
    height: 800,
    title: 'Cool image'
};
```

**Завдання 3 - Калькулятор**
Напишіть код, який:

- Запитує по черзі значення за допомогою prompt і зберігає їх в масив.
- Закінчуєтє ввід, як тільки користувач введе пусту строку, не число або нажме "Відміна"
- При цьому нуль 0 не повинен закінчувати ввід, це дозволене число.
- Виводити суму всіх значень масива коли ввід завершений.

**Завдання 4 - Видалення CSS класів**
У об'єкта є властивість className, яке зберігає список css класів - слів, розділених пробілами:

```javascript
const obj = {
  className: 'open menu'
};
```

Напишіть функцію removeCLass(obj, cls), яка видаляє cls, якщо він є:

```javascript
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без змін
```
*Підказка: перед виконання прочитати про метод [split](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/String/split) у стічок*

P.S. Додаткове ускладнення. Функція повинна коректно обробляти дублуювання класів в стрічці

```javascript
const obj = {
  className: 'my menu menu'
};

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'
```
Лишніх пробілів після функції створюватися не повинно.


**Задачки на CodeWars**
- [Return the Missing Element](https://www.codewars.com/kata/return-the-missing-element)
- [Add property to every object in array](https://www.codewars.com/kata/add-property-to-every-object-in-array)
- [Find Your Villain Name](https://www.codewars.com/kata/find-your-villain-name) *Для виконання цього завдання потрібно почитати про об'єкт [Date](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Date)*
- [Take a Ten Minute Walk](https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript) `*`

*`*` - Завдання підвищеної складнсті*

Оформити роботу потрібно як Pull Request на Github в **своєму репозиторії**.