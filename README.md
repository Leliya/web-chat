[![Tests](https://github.com/Leliya/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg)](https://github.com/Leliya/middle.messenger.praktikum.yandex/actions/workflows/tests.yml)

# Веб-мессенджер
_Учебный проект на курсе Мидл фронтенд-разработчик_

## Описание

Приложение представляет собой браузерный мессенджер с возможностью: 
- регистрации и авторизации; 
- создания и удаления чатов; 
- добавления и удаления пользователей в чат.

## Технологии

Приложение написано на **TypeScript** при использовании шаблонизатора Handlebars.

Реализован роутинг посредством **History API**.  

Добавлен глобальный стор.  

С помощъю **XMLHttpRequest** реализована возможность обмена данными с chats API Яндекс Практикума.  

Работа чатов обеспечена постоянным соединением через протокол **WebSocket**.  

Тестирование приложения выполнено с помощью **Jest.js**.

Приложение собрано в docker-контейнер и задеплоено на **render.com**.

## Установка

Для запуска потребуется установленное приложение Docker

[Инструкция по установке](https://docs.docker.com/desktop/)

1. Склонируйте репозиторий:
```
git clone https://github.com/Leliya/middle.messenger.praktikum.yandex.git
```
2. Запустите Docker-контейнер:
```
docker run -p 3000:3000 -d chat
```
Проект запустится локально на 3000 порту.

## Демо

[Макет](https://disk.yandex.ru/d/ApEgul2p-6u6Tg)  
[Демо на render.com ](https://messenger-wj13.onrender.com/)
