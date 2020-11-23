## Basic chat with sign-up/login

Потрібно написати базовий функціонал чату на веб-сокетах з можливістю логіну\реєстрації. Дизайн чату довільний. Фокус будемо зберігати на функціональності і javascript. Тому стилізацію можна зробити за допомогою одного з CSS фреймворків [Bootstrap](https://getbootstrap.com/), [Foundation](https://get.foundation/), [UIkit](https://getuikit.com/), [MaterializeCSS](https://materializecss.com/) і т.д.

Приклад сайту можна знайти [тут](https://simple-chat-fe.herokuapp.com/)

**1. Login/Sign-up**

Ендпойнти для реєстрації та логіну наступні

**Login**
```javascript
POST: 'https://simple-chat-demo.herokuapp.com/auth/login'

Request body example

{
	"nickname": "123",
	"password": "123"
}

Response body example

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IjEyMyIsInN1YiI6IjVmYWQ4OWRjMWRhOGFjYTAxMGExYTg2MyIsImlhdCI6MTYwNTI1OTI1OCwiZXhwIjoxNjA1MjU5MzE4fQ.J6ZUfDmka6I6I-LjQ5-0_MePDxYtTIqC_DJ41K5o-M0"
}
```

**Sign-up**
```javascript
POST: 'https://simple-chat-demo.herokuapp.com/auth/sign-up'

Request body example

{
	"nickname": "123",
	"password": "123"
}

Response body example

{
    "_id": "5fae50708bbb27001742d7f3",
    "nickname": "123",
    "password": "123",
    "__v": 0
}
```

**Приклад запиту**
```javascript
fetch('https://simple-chat-demo.herokuapp.com/auth/sign-up', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            nickname: "super-name", 
            password: "123"
        }
    )
})
.then(res => {
    if(res.ok) {
        /* 
        Якщо запит пройшов успішно то можна виконати якусь додаткову дію, наприклад перенаправити користувача на сторінку логіна
        window.location.href = 'index.html'
        */
    }

    return res.json();
})
.then((data) => {
    console.log(data);
})
```

**2. User profile/Create Chat**

Ендпойнти для отримання профайлу юзера та створення нового чату наступні

*NOTE: Всі запити нижче повинні відправлятися з хедером 'Authorization'*

**User profile**
```javascript
GET: 'https://simple-chat-demo.herokuapp.com/profile'

Response body exmple

{
  nickname: "nick-1",
  userId: "5fb405b208ed9c0017c3ca61"
}
```

**Create chat**
```javascript
POST: 'https://simple-chat-demo.herokuapp.com/chat'

Response body example

{
    "connectId": "7144"
    "__v": 0
    "_id": "5fb4f3151a81ef3940b1def3"
}
```

**Приклад запиту**
```javascript
fetch('https://simple-chat-demo.herokuapp.com/profile', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6Im5pY2stMSIsInN1YiI6IjVmYjQwNWIyMDhlZDljMDAxN2MzY2E2MSIsImlhdCI6MTYwNTY5MzMyMiwiZXhwIjoxNjA2Mjk4MTIyfQ.JYJW02vzvY8ein1L6NKXvohKZLm_9OUVHJz2_Ut0W7w'
    }
})
.then(res => res.json())
.then((data) => {
    console.log(data);
})
```

**3. Work with messages**
Робота чату базується на web sockets. 

Лінк для підключення до чату - `ws://simple-chat-demo.herokuapp.com`

Спілкування з сервером виконується на основі івентів

Існує 4 основних івента для відправки та отримання повідомлень.

`enter` - використовується для входу в чат

**Приклад івенту**
```javascript
    socket.send(JSON.stringify({
        event: 'enter',
        data: {
            token: // токен користувача (без Bearer приставки),
            connectId: // connectId чату в який потрібно зайти (4 цифри)
        }
    }))
```

`enter` - використовується для входу в чат

**Приклад івенту**
```javascript
    socket.send(JSON.stringify({
        event: 'enter',
        data: {
            token: // токен користувача (без Bearer приставки),
            connectId: // connectId чату в який потрібно зайти (4 цифри)
        }
    }))
```

`message` - відправка та отримання повідомлень

**Приклад івенту**
```javascript
    // Відправка повідомлення в чат
    socket.send(JSON.stringify({
        event: 'message',
        data: {
            message: // повідомлення,
            token: // токен користувача (без Bearer приставки),
            connectId: // connectId чату в який потрібно відправти повідомелння (4 цифри)
        }
    }))
```

**Приклад отримання повідомлель**
```javascript
    socket.onmessage = (res) => {
        const data = JSON.parse(res.data);

        data.event // - назва івенту
        data.data // - дані повідомлення

        switch (data.event) {
            case 'message': // нові повідомлення в чат
                break;

            case 'system': // системні повідомлення (не обовязково опрацьовувати)
                break;

            case 'exception': // помилки
                break;
        
            default:
                break;
        }
    };
```


**Chat history**
Щоб отримати історію чату потрбіно зробити наступний запит
```javascript
GET: 'https://simple-chat-demo.herokuapp.com/chat/0000'

де `0000` - це connectId чату історію якого ми хочемо отримати

```

**Приклад запиту**
```javascript
fetch('https://simple-chat-demo.herokuapp.com/chat/2200', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6Im5pY2stMSIsInN1YiI6IjVmYjQwNWIyMDhlZDljMDAxN2MzY2E2MSIsImlhdCI6MTYwNjEyNDMyOSwiZXhwIjoxNjA2NzI5MTI5fQ.Ant5XLExJMzZmQsM0KNC-yK-cV-dzkfSHSXZto6Uifw'
    }
})
.then(res => res.json())
.then((data) => {
    console.log(data);
})
```


