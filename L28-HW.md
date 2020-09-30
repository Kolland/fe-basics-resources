**Завдання 1**

Написати функцію blindSniper, яка приймає дві цифри n і m як аргумент. Функція blindSniper будує на основі n i m сітку з символу # і рандомно вставляє "ціль" в сітку - символ $

В результаті в консолі буде щось накшталт:

```javascript
function blindSniper(n, m) {}

blindSniper(4, 4)

// в консолі повинно вивести наступне:

####
##$#
####
####
```

Після цього кожні 500ms ми рандомно робимо "постріл" в одну з ячейок сітки і перемальовуємо сітку. Постріл зображаємо символом "*". Очистити консоль від поперднього пострілу можна за допомогою методу console.clear()

```javascript
function blindSniper(n, m) {}

blindSniper(4, 4)

####
##$#
#*##
####
```

"Постріли" відбуваються до тих пір поки не влучимо у ціль. Ціль в яку влучили позначаємо "Х" та відображаємо кількість спроб.

```javascript
function blindSniper(n, m) {}

blindSniper(4, 4)

####
##X#
####
####
Hit! Number of tries - 10
```

**Завдання 2**

Об'єкт User має методи login та logout. Також є декілька об'єктів які вказують на тип юзера SuperAdmin, Admin та Customer.

Зв'язати об'єкти через прототипне наслідування таким чином щоб можливий був такий виклик.

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

User.prototype.isPrototypeOf(SuperAdmin) // true
SuperAdmin.prototype.isPrototypeOf(mySuperAdmin) // true
Customer.prototype.isPrototypeOf(myCustomer) // true
Admin.prototype.isPrototypeOf(myAdmin) // true

mySuperAdmin.login() // in console - "Logged in as SuperAdmin"
myAdmin.login() // in console - "Logged in as Admin"
myCustomer.login() // in console - "Logged in as Customer"

myCustomer.logout() // in console - "Logout successful"
myAdmin.logout() // in console - "Logout successful"
mySuperAdmin.logout() // in console - "Logout successful"

```

Оформити роботу потрібно як Pull Request на Github в **своєму репозиторії**.