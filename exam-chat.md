## Basic chat with sign-up/login

Потрібно написати базовий функціонал чату на веб-сокетах з можливістю логіну\реєстрації. Дизайн чату довільний. Фокус будемо зберігати на функціональності і javascript. Тому стилізацію можна зробити за допомогою одного з CSS фреймворків [Bootstrap](https://getbootstrap.com/), [Foundation](https://get.foundation/), [UIkit](https://getuikit.com/), [MaterializeCSS](https://materializecss.com/) і т.д.

Приклад сайту можна знайти [тут](https://simple-chat-fe.herokuapp.com/)

**1. Login/Sign-up**

Ендпойнти для реєстрації та логіну наступні

**Login**
```javascript
'https://simple-chat-demo.herokuapp.com/auth/login'

Request body

{
	"nickname": "123",
	"password": "123"
}

Response body

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IjEyMyIsInN1YiI6IjVmYWQ4OWRjMWRhOGFjYTAxMGExYTg2MyIsImlhdCI6MTYwNTI1OTI1OCwiZXhwIjoxNjA1MjU5MzE4fQ.J6ZUfDmka6I6I-LjQ5-0_MePDxYtTIqC_DJ41K5o-M0"
}
```

**Sign-up**
```javascript
'https://simple-chat-demo.herokuapp.com/auth/sign-up'

Request body

{
	"nickname": "123",
	"password": "123"
}

Response body

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


