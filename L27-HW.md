**Завдання 1 - High order function**

Написати функцію myMap, яка приймає масив і колбек. Функція myMap повинна працювати як звичайний метод map масива, тобто повертати новий масив на основі переданого.

Наприклад:

```javascript
function myMap() {}

function double(item) {
  return item * 2
}

function tripple(item) {
  return item * 3
}

const doubleArr = myMap([1, 2, 3, 4, 5], double);
const trippleArr = myMap([1, 2, 3, 4, 5], tripple);

console.log(doubleArr); // [2, 4, 6, 8, 10]
console.log(trippleArr); // [3, 6, 9, 12, 15]
```

**Завдання 2**

Є обєкт ladder

```javascript
var ladder = {
  step: 0,
  up: function() { // вверх по драбині
    this.step++;
  },
  down: function() { // вниз по драбині
    this.step--;
  },
  showStep: function() { // вивести поточне значення
    alert( this.step );
  }
};
```

Зараз, для послідовного виклику декількох методів обєкта, потрібно робити так:

```javascript
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```

Модифікуйте код методів обєкта так, щоб виклики можна було робити ланцюжком:
```javascript
ladder.up().up().down().up().down().showStep(); // 1
```
Такий підхід називається «чейнінг» (chaining)

**Завдання 3**

Створіть функцію конструктор Calculator, яка буде повертати обєкт з трьома методами 

read() запитує prompt два значення та зберігає їх як властивості обєкта
sum() повертає суму цих двох значень
mul() повертає добуток цих двох значень

Наприклад:

```javascript
function Calculator() {}

const myCalc = new Calculator()

myCalc.read() // зявиться 2 промпта
myCalc.sum() // поверне суму
myCalc.mul() // поверне добуток
```

Оформити роботу потрібно як Pull Request на Github в **своєму репозиторії**.