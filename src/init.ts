import { InitType } from './types/init';

window.__params__ = {
  GA_ID: '',
  YM_ID: null,
  MAIL_ID: '',
  KTS_STATS_URL: '',
  KTS_PROJECT_NAME: '',
  SEARCH: '',
};

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
 * @param {string} GA_ID - id счетчика google analytics
 * @param {number} YM_ID - id счетчика яндекс метрика
 * @param {string} MAIL_ID - id счетчика Top.Mail
 * @param {string} KTS_STATS_URL - ссылка на ktsspecials - внутренний сервис kts
 * @param {string} KTS_PROJECT_NAME - название проекта в ktsspecials
 * @param {string} SEARCH - подпись параметров запуска в vk/ok
 * @param {string} KTS_TOKEN - токен ktsspecials
 * @param {string} userId - id пользователя vk/ok
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
