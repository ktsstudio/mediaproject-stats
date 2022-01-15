import { sendEventGA, sendEventYaM, sendEventMail } from './send';
import { sendStatsRegisterKTS, sendStatsDataSaveKTS } from './sendKTS';
import { __params__ } from './init';
import {
  StatEventFuncType,
  StatEventType,
  StatusEventType,
} from './types/send';
import { sendVKRetargetingEvent } from './sendVKRetargetingEvent';

/**
 * Отправка события во все доступные счетчики
 * @typedef {Object} StatEventFuncType
 * @property {string=} event - id события
 * @property {string=} title - название действия по событию
 * @property {string=} category - категория события
 * @property {Object=} rest - дополнительные параметры (отправляются в GA и
 * Яндекс Метрику)
 */
export const statFunc = async ({
  event,
  title,
  category,
  ...rest
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

  if (KTS_PROJECT_NAME && SEARCH && !KTS_TOKEN && KTS_STATS_URL && event) {
    await sendStatsRegisterKTS({ event });
  }

  if (
    KTS_PROJECT_NAME &&
    KTS_TOKEN &&
    !SEARCH &&
    KTS_STATS_URL &&
    userId &&
    event
  ) {
    await sendStatsDataSaveKTS({ event });
  }

  if (GA_ID && category && title) {
    sendEventGA({
      eventAction: title,
      eventCategory: category,
      ...rest,
    });
  }

  if (YM_ID && event) {
    sendEventYaM({
      event,
      params: {
        category,
        ...rest,
      },
    });
  }

  if (MAIL_ID && event) {
    sendEventMail({ event });
  }

  if (window.VK && event) {
    sendVKRetargetingEvent(event);
  }
};

/**
 * Отправка события во все доступные счетчики
 * @typedef {Object} StatEventType
 * @property {ActionType=} action - event, title события
 * @property {string=} category - категория события
 * @property {Object=} rest - дополнительные параметры
 */
export const statEvent = async ({
  action,
  category,
  ...rest
}: StatEventType): Promise<void> => {
  const { event, title } = action;
  await statFunc({
    event,
    title,
    category,
    ...rest,
  });
};

/**
 * Отправка события установки статуса VK, формирует id события, добавляя к
 * нему id статуса, и название события, добавляя к нему название статуса
 * @typedef {Object} StatusEventType
 * @property {ActionType=} action - event, title события
 * @property {string=} category - категория события
 * @property {string} statusName - название статуса
 * @property {string | number} statusNumber - id/номер статуса
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
