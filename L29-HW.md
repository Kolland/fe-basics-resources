**Завдання 1**

Встановити [NodeJs LTS](https://nodejs.org/uk/)

**Завдання 2**

Клас User має методи login та logout. Також є декілька класів які вказують на тип юзера SuperAdmin, Admin та Customer.

Зв'язати класи таким чином щоб можливий був такий виклик.

```javascript
const myCustomer = {
  name: "Nick"
}
const myAdmin = {
  name: "Andrew"
}
const mySuperAdmin = {
  name: "John"
}

mySuperAdmin instanceof SuperAdmin // true
mySuperAdmin instanceof User // true
myCustomer instanceof Customer // true
myAdmin instanceof Admin // true

mySuperAdmin.login() // in console - "Logged in as SuperAdmin"
myAdmin.login() // in console - "Logged in as Admin"
myCustomer.login() // in console - "Logged in as Customer"

myCustomer.logout() // in console - "Logout successful"
myAdmin.logout() // in console - "Logout successful"
mySuperAdmin.logout() // in console - "Logout successful"

```

**Завдання 3**

Відредагувати код нижче таким чином, щоб замість помилки виводилось в консоль `'Something went wring'` i `'Hello'`. При цьому виклик функції `unexistingFunction()` повинен залишитись на свому місці всередині `setTimeout`.

```javascript
try {
    setTimeout(() => {
        unexistingFunction();
    }, 3000)
} catch (error) {
    console.log('Something went wring');
}

setTimeout(() => {
    console.log('Hello!');
}, 4000)

```

**Завдання 4**

Розібратись як працює код нижче та виправити помилки

```javascript
// ЦЕЙ КОД НЕ ЗМІНЮЄМО
Array.prototype.filter = undefined; // Видаляємо вбудований фільтр

const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

let invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  } 
  invalidEntries++;
  return false; 
}

let arrByID;

try {
    // Пробуємо відфільтрувати масив і отримуємо помилку, що метод filter не існує
    arrByID = arr.filter(filterByID);
} catch (error) {
    console.log('Default filter is broken, lets try to use polyfill');

    try {
        enableFilterPolyfill();
        arrByID = arr.filter(filterByID);
    } catch (error) {
        console.log('Polyfill is also broken, LET`S FIX IT!');
    }
} 

console.log(arrByID); // Повинно вивести в консоль правильно відфільтровані обєкти



// Код нижче має ряд помилок, потрібно його "віддебажити" та виправити помилки
function enableFilterPolyfill() {
    if (!Array.prototype.filter) {
        Array.prototype.filter = function(func, thisArg) {
            'use strict';

            if (!((typeof func === 'Function' && typeof func === 'function') && this) )
                throw new TypeError(); 

            const _this = []
    
            let len = _this.length,
                res = new Array(len),  // попередньо створений масив
                t = _this, c = 0, i = -1;
    
            let kValue;
            if (thisArg === undefined){
              while (++i !== len){
                // перевіряє, чи заданий ключ
                if (i in _this){
                  kValue = t[i]; // у цьому випадку t змінюється у функції callback
                  if (func(t[i], i, t)){
                    res[++c] = kValue;
                  }
                }
              }
            }
            else {
              while (++i !== len) {
                // перевіряє, чи заданий ключ
                if (i in _this){
                  kValue = t[i];
                  if (func.call(thisArg, t[i], i, t)){
                    res[++c] = kValue;
                  }
                }
              }
            } 
    
            res.length = c + 1; // зменшити масив до правильного розміру
            return res;
        };
    }
}

```

Оформити роботу потрібно як Pull Request на Github в **своєму репозиторії**.