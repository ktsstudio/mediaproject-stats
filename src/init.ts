import { InitType, ParamsInitType } from './types/init';

export let __params__: ParamsInitType = {
  GA_ID: '',
  YM_ID: null,
  MAIL_ID: '',
  userId: 0,
  KTS_STATS_URL: '',
  KTS_PROJECT_NAME: '',
  KTS_TOKEN: '',
  SEARCH: '',
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
 * @property {string=} userId - id пользователя vk/ok
 */
export const init = ({
  GA_ID = '',
  YM_ID = null,
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
  };
};
