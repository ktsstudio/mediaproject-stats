import { InitType } from './types/init';

export let __params__: InitType = {
  GA_ID: '',
  YM_ID: null,
  MAIL_ID: '',
  KTS_STATS_URL: '',
  KTS_PROJECT_NAME: '',
  SEARCH: '',
  KTS_TOKEN: '',
  userId: 0,
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
  KTS_STATS_URL = '',
  KTS_PROJECT_NAME = '',
  SEARCH = '',
  KTS_TOKEN = '',
  userId = 0,
}: InitType): void => {
  __params__ = {
    GA_ID,
    YM_ID,
    MAIL_ID,
    KTS_STATS_URL,
    KTS_PROJECT_NAME,
    SEARCH,
    KTS_TOKEN,
    userId,
  };
};
