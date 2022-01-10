/**
 * Тип параметров
 * @param {string} GA_ID - id счетчика google analytics
 * @param {number} YM_ID - id счетчика яндекс метрика
 * @param {string} MAIL_ID - id счетчика Top.Mail
 * @param {string} KTS_STATS_URL - ссылка на ktsspecials - внутренний сервис kts
 * @param {string} KTS_PROJECT_NAME - название проекта в ktsspecials
 * @param {string} SEARCH - подпись параметров запуска в vk/ok
 * @param {string} KTS_TOKEN - токен ktsspecials
 * @param {string} userId - id пользователя vk/ok
 */
export type InitType = {
  GA_ID?: string;
  YM_ID?: number | null;
  MAIL_ID?: string;
  KTS_STATS_URL?: string;
  KTS_PROJECT_NAME?: string;
  SEARCH?: string;
  KTS_TOKEN?: string;
  userId?: number;
};
