![kts](./logo.png)

# @ktsstudio/mediaproject-stats
Библиотека для подключения счетчиков статистики:

* Google Analytics
* Яндекс Метрика
* Top.Mail
* VK Retargeting
* Внутренная статистика VK
* Пиксели
* KTS статистика

```sh
  yarn add @ktsstudio/mediaproject-stats
```

## Переменные
* [\_\_params\_\_](./src/init.ts) - переменная с id счетчиков, id пользователя и 
  допонтительной информацией

## Методы
* [init](./src/init.ts) - метод заполнение переменной `__params__`

### Методы для отправки событий
* [statEvent](./src/statsEvent.ts) - отправка события во все доступные 
  счетчики, оборачивает метод statFunc
* [statFunc](./src/statsEvent.ts) - метод внутри вызывает методы отправки 
  событий в Google Analytics, Яндекс метрику, Top.Mail, VK Retargeting, KTS статистику
* [statSetStatus](./src/statsEvent.ts) - отправка события установки статуса 
  ВК, оборачивает метод statFunc
* [sendStatsDataSaveKTS](./src/send.ts) - отправка событий в ktsspecials - 
  внутренний сервис статистики KTS, метод /api/data/save
* [sendStatsRegisterKTS](./src/send.ts) - отправка событий в ktsspecials -
  внутренний сервис статистики KTS, метод /api/event/register
* [sendEventGA](./src/send.ts) - отправка события в Google Analytics
* [sendEventYaM](./src/send.ts) - отправка события в Яндекс Метрике
* [sendEventMail](./src/send.ts) - отправка события в Top Mail
* [sendVKStats](./src/sendVKEvents.ts) - 
* [sendPixel](./src/sendPixel.ts) - Установка пикселя на страницу
* [sendVKRetargeting](./src/sendVKRetargetingEvent.ts) - отправка события во внутреннюю статистику VK


### Методы для отправки захода на страницу
* [statPage](./src/statsPages.ts) - метод-обертк, внутри вызывает методы 
  отправки перехода на стрницу в Google Analytics, Яндекс метрику, Top.Mail, 
  и события перехода на стрницу в VK Retargeting, KTS статистику
* [sendEventPageGA](./src/send.ts) - отправка события перехода на страницу в 
  Google Analytics
* [statPageYaM](./src/send.ts) - отправка события перехода на страницу в Яндекс Метрику
* [sendPageMail](./src/send.ts) - отправка события перехода на страницу в Top Mail


## Как использовать
1. Добавить в `index.html` коды используемых счетчиков.
2. Получить id пользователя, если есть (VK, OK).
3. Сохранить строку авторизации, если есть (VK, OK).
4. Вызвать метод init.
5. Вызвать метод statPage для отправки события перехода на страницу. 
   (обязательно для использовавания Яндекс Метрики в iframe, иначе события 
   не отправятся в счетчик).
6. Вызвать метод statEvent для отправки события.

## Примеры
### метод init
```sh
init({
  GA_ID: 'UA-0',
  YM_ID: 1,
  MAIL_ID: '1',
  KTS_STATS_URL: 'https://statistic.demo',
  SEARCH: window.search,
  KTS_PROJECT_NAME: 'demo',
  userId: window.user_id,
});
```

### метод statEvent
```sh
const actions = {
  clickButton: {
    event: 'CLICK_BUTTON',
    title: 'Нажатие на кнопку',
  },
  clickLink: {
    event: 'CLICK_LINK',
    title: 'Нажатие на ссылку',
  },
}

// можно использовать как обозначение, на какой станице произошло событие
const categories = {
  start: 'Стартовая страница',
  game: 'Страница игры',
}

statEvent({
  action: actions[clickButton],
  category: categories.start,
});
```

### метод statSetStatus
```sh
statSetStatus({
  action: {
    event: 'SET_STATUS',
    title: 'Установить статус'
  },
  statusName: 'Снежинка',
  statusNumber: 100,
  category: 'Страница установки статусов',
});
```

### метод statPage
```sh
const pages = {
  start: {
    path: '/start',
    title: categories.start,
    event: 'START_PAGE',
  }
}

statPage(pages.start);
```

### метод sendVKRetargetingEvent
```sh
sendVKRetargetingEvent('START');
```

### метод sendPixel
```sh
// cсылка на картинку пикселя
export const pixels = {
  start: '//rs.mail.ru/d000000.gif',
};

sendPixel(pixels.start);
```

## Закрытая документация
[Статистика](https://kts.myjetbrains.com/youtrack/articles/SPECIAL-A-152/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0)

## Обратная связь

Любой фидбэк вы можете передать нам на почту [hello@ktsstudio.ru]
(mailto:hello@ktsstudio.ru) в письме с темой "mediaproject-stats feedback"


