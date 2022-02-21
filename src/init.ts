import { InitType, ParamsInitType } from './types/init';

export let __params__: ParamsInitType = {
  GA_ID: '',
  YM_ID: 0,
  MAIL_ID: '',
  userId: 0,
  KTS_STATS_URL: '',
  KTS_PROJECT_NAME: '',
  KTS_TOKEN: '',
  SEARCH: '',
  hasSnitch: false,
  VK_STAT_PARAM: null,
};

/**
 * Устанавливаем id счетчиков
 * @typedef {Object} InitType
 * @property {string=} GA_ID - id счетчика google analytics
 * @property {number=} YM_ID - id счетчика яндекс метрика
 * @property {string=} MAIL_ID - id счетчика Top.Mail
 * @property {string=} KTS_STATS_URL - ссылка на ktsspecials - внутренний сервис kts
 * @property {string=} KTS_PROJECT_NAME - название проекта в ktsspecials
 * @property {string=} SEARCH - подпись параметров запуска в vk/ok
 * @property {string=} KTS_TOKEN - токен ktsspecials
 * @property {number=} userId - id пользователя vk/ok
 * @property {boolean=} hasSnitch - флаг использования библиотеки snitch
 * @property {boolean=} hasVKStat - флаг использования внутренней статистики ВК
 */
export const init = ({
  GA_ID = '',
  YM_ID = 0,
  MAIL_ID = '',
  KTS_DATA_SAVE = {
    KTS_STATS_URL: '',
    KTS_PROJECT_NAME: '',
    KTS_TOKEN: '',
  },
  KTS_EVENT_REGISTER = {
    KTS_STATS_URL: '',
    KTS_PROJECT_NAME: '',
    SEARCH: '',
  },
  userId = 0,
  hasSnitch = false,
  VK_STAT_PARAM = null,
}: InitType): void => {
  __params__ = {
    GA_ID,
    YM_ID,
    MAIL_ID,
    KTS_STATS_URL:
      KTS_DATA_SAVE?.KTS_STATS_URL || KTS_EVENT_REGISTER?.KTS_STATS_URL || '',
    KTS_PROJECT_NAME:
      KTS_DATA_SAVE?.KTS_PROJECT_NAME ||
      KTS_EVENT_REGISTER?.KTS_PROJECT_NAME ||
      '',
    SEARCH: KTS_DATA_SAVE?.KTS_TOKEN || '',
    KTS_TOKEN: KTS_EVENT_REGISTER?.SEARCH || '',
    userId,
    hasSnitch,
    VK_STAT_PARAM,
  };
};

/**
 * Установить id пользователя
 * @param {number} id - id пользователя
 */
export const setUserId = (id: number): void => {
  __params__.userId = id;
};
