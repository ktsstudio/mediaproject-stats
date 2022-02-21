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
  title?: string;
  /**
   * путь страницы
   */
  path?: string;
};

/**
 * Тип для отправки события захода на страницу во все доступные счетчики
 */
export type StatsSendPageType = StatsPageType &
  Partial<StatsKTSType> &
  Partial<SnitchPageType>;

/**
 * Тип для отправки события в Google Analytics
 */
export type StatsEventGAType = {
  /**
   * команда отправки события в GA
   */
  event?: string;
  /**
   * действие по событию
   */
  eventAction: string;
  /**
   * категория события
   */
  eventCategory: string;
  /**
   * ярлык события
   */
  eventLabel?: string;
  /**
   * целое положительное значение
   */
  eventValue?: number;
  /**
   * extra параметры, подробнее в
   * https://developers.google.com/tag-platform/gtagjs/reference/parameters?hl=ru
   */
  [K: string]: any;
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
  params?: Record<string, any>;
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
export type VKStatsInitType = {
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
  /**
   * версия VK API
   */
  version?: string;
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
   * название страницы, например main
   */
  screen: string;
  /**
   * дополнительная информация в формате JSON
   */
  json?: string;
} & VKStatsInitType;

/**
 * Тип отправки страницы во внутреннюю статистику ВК через Snitch
 * https://github.com/nonstandardmail/snitch/tree/master/packages/snitch-mini-apps
 */
export type SnitchPageType = {
  /**
   * название экрана
   */
  screenType: string;
  /**
   * дополнительная информация о странице
   */
  screenId?: string;
};
