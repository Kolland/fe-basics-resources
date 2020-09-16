**Завдання 1**
Напишіть код, який відсортує масив об'єктів people по полю age.

Наприклад:

```javascript
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

... ваш код ...

// тепер people: [vovochka, masha, vasya]
console.log(people[0].age) // 6
```

**Завдання 2**
Паліндром - це стрічка, яка читається з обох сторін одинаково. Наприклад: Я несу гусеня; Де помити мопед.

Потрібно написати функцію isPal(string), яка повертає true або false в залежності від того чи являється стрічка паліндромом чи ні.

```javascript
console.log(isPal('Anna')); // true
console.log(isPal('Я несу гусеня')­); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
```

**Завдання 3**
Напишіть функцію unique(arr), яка повертає масив, котрий містить тільки унікальні елементи arr (arr - масив стрічок)

```javascript
var strings = ['open', 'open', 'menu', 'menu', 'menu', 'menu', 'open', 'open', '8-()' ];

console.log( unique(strings) ); // open, menu, 8-()
```

**Завдання 4** `*`
Анаграми - слова, які складаються з одинакової кількості одинакових букв, але в різному порядку.

Наприклад:

село - осел, банка - кабан, лісок - сокіл.

Напишіть функцію anClean(arr), яка повертає масив слів, очищених від анаграм.

```javascript
var arr = ['осел', 'банка', 'лісок', 'село', 'кабан', 'сокіл'];

console.log( anClean(arr) ); // 'осел,банка,лісок' або 'село,кабан,сокіл'
```

**Задачки на CodeWars**
- [Use reduce() to calculate the sum of the values in an array](https://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array)

*`*` - Завдання підвищеної складнсті*

Оформити роботу потрібно як Pull Request на Github в **своєму репозиторії**.