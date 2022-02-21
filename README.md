![kts](./logo.png)

# @ktsstudio/mediaproject-stats
Библиотека для подключения счетчиков статистики:

* Google Analytics
* Яндекс Метрика
* Top.Mail
* VK Retargeting
* Пиксели
* KTS статистика
* Внутренняя статистика VK
* Внутренняя статистика VK c использованием библиотеки [snitch](https://github.com/nonstandardmail/snitch/tree/master/packages/snitch-mini-apps)

```sh
  yarn add @ktsstudio/mediaproject-stats
  
  npm i @ktsstudio/mediaproject-stats
```

## Переменные
* [\_\_params\_\_](./src/init.ts) - переменная с id счетчиков, id пользователя и 
  дополнительной информацией

## Методы
* [init](./src/init.ts) - метод заполнения переменной `__params__`
* [setUserId](./src/init.ts) - метод установки id пользователя

### Методы для отправки событий
* [statFunc](./src/statsEvent.ts) - метод внутри вызывает методы отправки
    событий в Google Analytics, Яндекс метрику, Top.Mail, VK Retargeting, KTS статистику
* [statEvent](./src/statsEvent.ts) - отправка события во все доступные 
  счетчики, оборачивает метод statFunc
* [statSetStatus](./src/statsEvent.ts) - отправка события установки статуса VK, формирует id события, добавляя к нему id статуса, и название события, добавляя к нему название статуса, оборачивает метод statFunc
* [sendStatsDataSaveKTS](./src/sendKTS.ts) - отправка событий в ktsspecials - 
  внутренний сервис статистики KTS, метод /api/data/save
* [sendStatsRegisterKTS](./src/sendKTS.ts) - отправка событий в ktsspecials -
  внутренний сервис статистики KTS, метод /api/event/register
* [sendEventGA](./src/send.ts) - отправка события в Google Analytics
* [sendEventYaM](./src/send.ts) - отправка события в Яндекс Метрику
* [sendEventMail](./src/send.ts) - отправка события в Top Mail
* [sendVKStats](./src/sendVKEvents.ts) - отправка события во внутреннюю статистику VK
* [sendPixel](./src/sendPixel.ts) - Установка пикселя на страницу
* [sendVKRetargeting](./src/sendVKRetargetingEvent.ts) - отправка события во внутреннюю статистику VK
* [sendSnitchEvent](./src/sendVKSnitch.ts) - отправка события во внутреннюю 
  статистику VK через обертку [snitch](https://github.com/nonstandardmail/snitch/tree/master/packages/snitch-mini-apps)


### Методы для отправки захода на страницу
* [statPage](./src/statsPages.ts) - метод-обертка, внутри вызывает методы 
  отправки перехода на страницу в Google Analytics, Яндекс метрику, Top.Mail, 
  и события перехода на страницу в VK Retargeting, KTS статистику
* [sendEventPageGA](./src/send.ts) - отправка события перехода на страницу в 
  Google Analytics
* [statPageYaM](./src/send.ts) - отправка события перехода на страницу в Яндекс Метрику
* [sendPageMail](./src/send.ts) - отправка события перехода на страницу в Top Mail
* [sendSnitchPage](./src/sendVKSnitch.ts) - отправка перехода на 
  страницу/экран во внутреннюю статистику VK через обертку [snitch](https://github.com/nonstandardmail/snitch/tree/master/packages/snitch-mini-apps)

### React Hook для отправки захода на страницу
[useChangePage](./src/useChangePage.ts)

## Как использовать
1. Добавить в `index.html` коды используемых счетчиков (Google Analytics, 
   Яндекс Метрика, Top Mail, VK Retargeting, Snitch). 
2. Получить id пользователя, если есть.
3. Сохранить строку авторизации, если есть (VK, OK).
4. Вызвать метод init.
5. Вызвать метод statPage для отправки события перехода на страницу. 
   (на старте приложения обязательно вызывать этот метод для использования Яндекс  Метрики в iframe, иначе события не отправятся в счетчик).
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
  hasSnitch: false,
  VK_STAT_PARAM: {
    appId: 0,
    platform: 'web',
    access_token: 'abcdefg',
    version: '5.124',
  },
  userId: window.user_id,
});
```

### метод setUserId
```sh
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

### метод sendStatsDataSaveKTS
```sh
sendStatsDataSaveKTS({ event: 'START'});
```

### метод sendStatsRegisterKTS
```sh
sendStatsRegisterKTS({ event: 'START'});
```

### метод sendEventGA
```sh
sendEventPageGA({ 
  eventAction: 'Нажатие на кнопку "Продолжить"', 
  eventCategory: 'Страница онбординга' 
});
```

### метод sendEventPageGA
```sh
sendEventPageGA({ path: '/start', title: 'Стартовая страница' });
```

### метод sendEventYaM
```sh
sendEventYaM({ event: 'START' });
```

### метод statPageYaM
```sh
statPageYaM({ path: '/start', title: 'Стартовая страница' });
```

### метод sendEventMail
```sh
sendEventMail({ event: 'START' });
```

### метод sendPageMail
```sh
sendPageMail({ path: '/start' });
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

### метод sendVKStats
```sh
sendVKStats({
  event: 'start',
  screen: 'loading',
  appId: 0,
  platform: 'web',
  access_token: 'abcdef',
  json: '',
  version: '5.124'
});
```

### метод sendSnitchEvent
```sh
sendSnitchEvent('vkProfileStatusSet', { name: 'Снежинка'});
```

### метод sendSnitchPage
```sh
sendSnitchPage('main', 'main-statuses');
```

### react hook useChangePage
```sh
// в комопненте Root
useChangePage({ path: pathname, title: panelName });
```

## Закрытая документация
[Статистика](https://kts.myjetbrains.com/youtrack/articles/SPECIAL-A-152/%D0%A1%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0)

## Обратная связь

Любой фидбэк вы можете передать нам на почту [hello@ktsstudio.ru](mailto:hello@ktsstudio.ru) в 
письме с темой "mediaproject-stats feedback"


