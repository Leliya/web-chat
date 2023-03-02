[![Tests](https://github.com/Leliya/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg)](https://github.com/Leliya/middle.messenger.praktikum.yandex/actions/workflows/tests.yml)

# Веб-мессенджер
_Учебный проект на курсе Мидл фронтенд-разработчик_

## Описание

Приложение представляет собой браузерный мессенджер с возможностью: 
- регистрации и авторизации; 
- создания и удаления чатов; 
- добавления и удаления пользователей в чат; 
- отправки медиафайлов.

## Технологии

Приложение написано на TypeScript при использовании шаблонизатора Handlebars.

Реализован роутинг посредством History API.  

Добавлен глобальный стор.  

С помощъю XMLHttpRequest реализована возможность обмена данными с chats API Яндекс Практикума.  

Работа чатов обеспечена постоянным соединением через протокол WebSocket.  

## Установка

1. Склонируйте репозиторий:
```
git clone https://github.com/Leliya/middle.messenger.praktikum.yandex.git
```
2. Установите зависимости:
```
npm install
```
3. Проект запускается локально на 3000 порту командой:
```
npm run start
```

## Демо

[Макет](https://disk.yandex.ru/d/ApEgul2p-6u6Tg)  
[Демо на Netlify ](https://shimmering-dodol-dd7a3d.netlify.app/)
