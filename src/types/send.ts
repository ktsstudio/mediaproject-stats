/**
 * Тип для отправки событий в ktsspecials - внутренний сервис статистики KTS
 * метод /api/data/save
 */
export type StatsKTSType = {
  /**
   * id события
   */
  event: string;
};

/**
 * Тип для отправки события перехода на страницу в Google Analytics,
 * Яндекс метрику, Top.Mail
 */
export type StatsPageType = {
  /**
   * название страницы
   */
  title?: string | null;
  /**
   * путь страницы
   */
  path?: string | null;
};

/**
 * Тип для отправки события захода на страницу во все доступные счетчики
 */
export type StatsSendPageType = {
  /**
   * id события
   */
  event?: string;
} & StatsPageType;

/**
 * Тип для отправки события в Google Analytics
 * @param {string} event - функция отправки события в GA
 * @param {string} eventAction - действие по событию
 * @param {string} eventCategory - категория события
 * @param {string} eventLabel - ярлык события (опционально)
 * @param {string} eventValue - (опционально)
 * @param {string} hash - (опционально)
 * @param {string} vars - (опционально)
 */
export type StatsEventGAType = {
  /**
   * функция отправки события в GA
   */
  event?: string;
  /**
   * действие по событию
   */
  eventAction?: string | null;
  /**
   * категория события
   */
  eventCategory?: string | null;
  /**
   * ярлык события
   */
  eventLabel?: string | null;
  eventValue?: string | null;
  hash?: string | null;
};

/**
 * Тип отправки события в Яндекс Метрику и Top Mail
 */
export type StatsEventType = {
  /**
   * id цели из Яндекс Метрики и Top.Mail
   */
  event?: string;
  /**
   * дополнительные параметры
   */
  params?: Record<string, any> | null;
};

/**
 * Тип события
 */
export type ActionType = {
  /**
   * id события
   */
  event?: string;
  /**
   * название события
   */
  title?: string;
};

/**
 * Тип отправки события во все доступные счетчики
 * метод обертка statEvent
 */
export type StatEventType = {
  action: ActionType;
  /**
   * категория события
   */
  category?: string;
  /**
   * дополнительные параметры
   */
  [K: string]: any;
};

/**
 * Тип отправки события во все доступные счетчики
 * метод для отправки событий в счетчики statFunc
 */
export type StatEventFuncType = {
  /**
   * категория события
   */
  category?: string;
  /**
   * дополнительные параметры
   */
  [K: string]: any;
} & ActionType;

/**
 * Тип отправки события установки статуса ВК
 */
export type StatusEventType = {
  action: ActionType;
  /**
   * категория события
   */
  category?: string;
  /**
   * название статуса в ВК
   */
  statusName: string;
  /**
   * id/номер статуса в ВК
   */
  statusNumber: string | number;
};

/**
 * Тип отправки события во внутреннюю статистику ВК
 */
export type VKStatsType = {
  /**
   * id события
   */
  event: string;
  /**
   * id приложения
   */
  appId: number;
  /**
   * платформа, на которой запущено приложение
   */
  platform: string;
  /**
   * токен доступа прав в ВК с любым (и пустым) scope=
   */
  access_token?: string;
};
