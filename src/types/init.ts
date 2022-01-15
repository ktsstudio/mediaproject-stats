/**
 * Тип общих параметров KTS event
 * @param {string} KTS_STATS_URL - ссылка на ktsspecials - внутренний сервис kts
 * @param {string} KTS_PROJECT_NAME - название проекта в ktsspecials
 */
export type CommonKTSType = {
  KTS_STATS_URL: string;
  KTS_PROJECT_NAME: string;
};

/**
 * Тип параметров для метода KTS /data/save
 * @param {string} KTS_TOKEN - токен ktsspecials
 */
export type DataSaveKTSType = {
  KTS_TOKEN: string;
} & CommonKTSType;

/**
 * Тип параметров для метода KTS /event/register
 * @param {string} SEARCH - подпись параметров запуска в vk/ok
 */
export type EventRegisterKTSType = {
  SEARCH: string;
} & CommonKTSType;

export type ParamsKTSType = {
  KTS_TOKEN: string;
} & EventRegisterKTSType;

/**
 * Общий тип параметров инициализации
 * @param {string} GA_ID - id счетчика google analytics
 * @param {number} YM_ID - id счетчика яндекс метрика
 * @param {string} MAIL_ID - id счетчика Top.Mail
 * @param {string} userId - id пользователя vk/ok
 */
export type CommonInitType = {
  GA_ID?: string;
  YM_ID?: number | null;
  MAIL_ID?: string;
  userId?: number;
};

/**
 * Тип входных параметров метода инициализации
 * @param {DataSaveKTSType | {}} KTS_DATA_SAVE - список параметров для
 * метода KTS /data/save
 * @param {EventRegisterKTSType | {}} KTS_EVENT_REGISTER - список параметров
 * для метода KTS /event/register
 */
export type InitType = {
  KTS_DATA_SAVE?: DataSaveKTSType;
  KTS_EVENT_REGISTER?: EventRegisterKTSType;
} & CommonInitType;

/**
 * Тип переменной __params__
 * @param {string} GA_ID - id счетчика google analytics
 * @param {number} YM_ID - id счетчика яндекс метрика
 * @param {string} MAIL_ID - id счетчика Top.Mail
 * @param {string} KTS_STATS_URL - ссылка на ktsspecials - внутренний сервис kts
 * @param {string} KTS_PROJECT_NAME - название проекта в ktsspecials
 * @param {string} SEARCH - подпись параметров запуска в vk/ok
 * @param {string} KTS_TOKEN - токен ktsspecials
 * @param {string} userId - id пользователя vk/ok
 */
export type ParamsInitType = ParamsKTSType & CommonInitType;
