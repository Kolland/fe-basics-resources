**Завдання 1**

Напишіть функцію, яка повертає анонімну функцію, котра трансформує аргумент додаючи суфікс.

Наприклад:

```javascript
const addLy = add_suffix("ly")

addLy("hopeless") ➞ "hopelessly"
addLy("total") ➞"totally"

const addLess = add_suffix("less")

addLess("fear") ➞ "fearless"
addLess("ruth") ➞ "ruthless"
```

**Завдання 2**

Напишіть функцію, яка приймає пустий об'єкт і повертає анонімну функцію, котра добавляє нову властивість в об`єкт.

Наприклад:

```javascript
const obj = {};

const addProp = addPropf(obj);

addProp('name', 'Nick');
addProp();
addProp('age', 25);

console.log(obj); // {'name': 'Nick', 'age': 25}
```

**Завдання 3**

В нас є масив об`єктів, який потрібно відсортувати

```javascript
let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
```

Звичайни спосіб був би таким:

```javascript
// по імені (Ann, John, Pete)
users.sort((a, b) => a.name > b.name ? 1 : -1);

// по віку (Pete, Ann, John)
users.sort((a, b) => a.age > b.age ? 1 : -1);
```

Чи можем ми зробити його коротшим, наприклд, таким?
```javascript
users.sort(byField('name'));
users.sort(byField('age'));
```

Тобто, щоб замість функції, ми просто писали `byField(fieldName)`.

Напишіть функція `byField`, яка може використовуватися для цього.

**Завдання 4** `*`

Написати функцію add, яка буде повертати фунцію inner. Функція inner може викликатися до тих пір поки їй на вхід передається цифра як аргумент. Якщо на вхід inner передати null, стрічку або не передати аргумент то фукція поверне сумму всіх аргументів попередніх викликів.

Наприклад:

```javascript
const addf = add();

console.log(addf(1)(2)()); // 3
console.log(addf(1)(2)(3)(4)(5)()); // 15
console.log(addf(1)(2)('some text')); // 3
```

**Задачки на CodeWars**
- [Closures and Scopes](https://www.codewars.com/kata/closures-and-scopes)
- [Can you keep a secret?](https://www.codewars.com/kata/can-you-keep-a-secret)
- [Lazily executing a function](https://www.codewars.com/kata/lazily-executing-a-function)

*`*` - Завдання підвищеної складнсті*

Оформити роботу потрібно як Pull Request на Github в **своєму репозиторії**.