// внутренняя статистика ktsspesials
export type StatsKTSType = {
  event: string; // название события
};

// заход на страницу
export type StatsPageType = {
  title?: string | null; // заголовок страницы
  path?: string | null; // путь страницы
};

// заход на страницу во все доступные счетчики
export type StatsSendPageType = {
  event: string; // название событие
} & StatsPageType;

// google событие
export type StatsEventGAType = {
  event?: string; // название функции передачи события
  eventAction?: string | null; // действие по событию
  eventCategory?: string | null; // категория события
  eventLabel?: string | null; // ярлык события
  eventValue?: string | null;
  hash?: string | null;
};

// Яндекс Метрика, Top Mail событие
export type StatsEventType = {
  event?: string; // id цели в Яндекс Метрике, Top Mail
  params?: Record<string, any> | null; // дополнительные параметры
};

export type ActionType = {
  event: string;
  title?: string;
};

// отправка события во все доступные счетчики
// метод обертка statEvent
export type StatEventType = {
  action: ActionType;
  category?: string;
};

// отправка события во все доступные счетчики
// метод ля отправки событий в счетчики statFunc
export type StatEventFuncType = {
  category?: string;
} & ActionType;

// отправка события установки статуса ВК
export type StatusEventType = {
  action: ActionType;
  category?: string;
  statusName: string; // название статуса в ВК
  statusNumber: string | number; // id статуса в ВК
};
