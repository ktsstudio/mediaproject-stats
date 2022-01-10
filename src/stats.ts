import {
  sendStatsRegisterKTS,
  sendStatsDataSaveKTS,
  sendEventGA,
  sendYaM,
  sendMail,
} from './send';
import { __params__ } from './init';
import {
  StatEventFuncType,
  StatEventType,
  StatusEventType,
} from './types/send';

/**
 * Отправка события во все доступные счетчики
 * @param {string} event - id события
 * @param {string} title - название действия по событию
 * @param {string} category - категория события
 */
export const statFunc = async ({
  event,
  title,
  category,
}: StatEventFuncType): Promise<void> => {
  const {
    KTS_PROJECT_NAME,
    SEARCH,
    KTS_STATS_URL,
    GA_ID,
    MAIL_ID,
    YM_ID,
    KTS_TOKEN,
    userId,
  } = __params__;

  if (KTS_PROJECT_NAME && SEARCH && KTS_STATS_URL && event) {
    await sendStatsRegisterKTS({ event });
  }

  if (KTS_PROJECT_NAME && KTS_TOKEN && KTS_STATS_URL && userId && event) {
    await sendStatsDataSaveKTS({ event });
  }

  if (GA_ID && category && title) {
    sendEventGA({
      eventCategory: category,
      eventAction: title,
    });
  }

  if (YM_ID && event && category) {
    sendYaM({
      event: event,
      params: {
        category: category,
      },
    });
  }
  if (MAIL_ID && event) {
    sendMail({ event });
  }
};

/**
 * Отправка события во все доступные счетчики
 * @param {Object} action - event, title события
 * @param {string} category - категория события
 */
export const statEvent = async ({
  action,
  category,
}: StatEventType): Promise<void> => {
  const { event, title } = action;
  await statFunc({
    event,
    title,
    category,
  });
};

/**
 * Отправка события установки статуса ВК
 * @param {Object} action - event, title события
 * @param {string} category - категория события
 * @param {string} statusName - название статуса
 * @param {string} statusNumber - id/номер статуса
 */
export const statSetStatus = async ({
  action,
  category,
  statusName,
  statusNumber,
}: StatusEventType): Promise<void> => {
  const { event, title } = action;

  await statFunc({
    event: `${event}_${statusNumber}`,
    title: `${title} "${statusName}"`,
    category,
  });
};
