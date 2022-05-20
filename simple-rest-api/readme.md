### Refresh Knowledge
[Tutorial](https://www.youtube.com/watch?v=tKM44vPHU0U)

Topics

* Express.js
* HTTP Basics
* RESTfull API
* CRUD operations
* Work with DB
* Postman
* Mongo/Mongoose

Tutorial timecodes:

* 00:00 - Введение, теория, HTTP, REST API, CRUD, BACKEND
* 06:20 - Начало разработки, инициализация проекта
* 12:50 - Подключение к базе данных
* 16:50 - Схема данных, модель
* 21:10 - Маршрутизация, роутинг, ендпоинты
* 24:00 - Controller, CRUD
* 31:15 - Слои абстракций
* 33:00 - Service, разделение логики
* 38:50 - Работа с файлами, FileService

shell commands history

Create project
```shell
npm init -y
```

Install Express
```shell
npm install express
```

Install Nodemon for dev dependency. Nodemon for auto-reloading server.
```shell
npmp i -D nodemon
```

Слои абстракции
* разделять логические куски приложения в отдельные модули
* получается слабая связанность кода
* затем мы можем переписать один из кусков не затронув остальные

DAL data access layer
* слой доступа к данным
* в нашем случае это mongoose
* но если бы мы сами делали sql запросы то нужно было бы сделать отдельный слой модуль

Controller
* работа с клиент-серверной составляющей (params, body, headers ...)

Service
* Бизнес логика
* Никак не связана с req/res
* работа с бд и входными параметрами

Get Static files
* http://localhost:5000/d7477ab1-21cc-45cb-8da0-6d2346715994.jpg
* to work with static files on express use express static middleware