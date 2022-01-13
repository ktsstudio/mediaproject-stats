import 'whatwg-fetch';

import { __params__ } from './init';
import {
  StatsEventGAType,
  StatsEventType,
  StatsKTSType,
  StatsPageType,
} from './types/send';

/**
 * Отправка событий в ktsspecials - внутренний сервис статистики KTS
 * метод /api/data/save
 * @typedef {Object} StatsKTSType
 * @property {string} event - id события латиницей
 */
export const sendStatsDataSaveKTS = async ({
  event,
}: StatsKTSType): Promise<void> => {
  const { KTS_PROJECT_NAME, KTS_STATS_URL, userId, KTS_TOKEN } = __params__;

  if (KTS_PROJECT_NAME && KTS_STATS_URL && KTS_TOKEN) {
    try {
      const body = JSON.stringify({
        project: KTS_PROJECT_NAME,
        payload: {
          user_id: userId,
          event,
        },
      });

      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Special-Token': KTS_TOKEN,
      };

      await fetch(`${KTS_STATS_URL}/api/data/save`, {
        method: 'POST',
        body,
        headers,
      });
    } catch (e) {
      console.error('stat kts error', e);
    }
  }
};

/**
 * Отправка событий в ktsspecials - внутренний сервис статистики KTS
 * метод /api/event/register
 * @typedef {Object} StatsKTSType
 * @property {string} event - id события латиницей
 */
export const sendStatsRegisterKTS = async ({
  event,
}: StatsKTSType): Promise<void> => {
  const { KTS_PROJECT_NAME, SEARCH, KTS_STATS_URL } = __params__;

  if (KTS_PROJECT_NAME && SEARCH && KTS_STATS_URL) {
    try {
      const body = JSON.stringify({
        project: KTS_PROJECT_NAME,
        event: event,
        token: SEARCH,
      });

      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };

      await fetch(`${KTS_STATS_URL}/api/event/register`, {
        method: 'POST',
        body,
        headers,
      });
    } catch (e) {
      console.error('stat kts error', e);
    }
  }
};

/**
 * Отправка события перехода на страницу в Google Analytics
 * @typedef {Object} StatsPageType
 * @property {string=} title - название страницы
 * @property {string=} path - путь страницы
 */
export const sendEventPageGA = ({
  title = null,
  path = null,
}: StatsPageType): void => {
  try {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: `${location.origin}${path}`,
      page_path: path,
      send_to: __params__.GA_ID,
    });
  } catch (e) {
    console.error('gtag event error', e);
  }
};

/**
 * Отправка события в Google Analytics
 * @typedef {Object} StatsEventGAType
 * @property {string} event - событие в GA
 * @property {string} eventAction - действие по событию
 * @property {string} eventCategory - категория события
 * @property {string=} eventLabel - ярлык события (опционально)
 * @property {string=} eventValue
 * @property {string=} hash
 * @property {string=} vars
 */
export const sendEventGA = ({
  event = 'event',
  eventAction = null,
  eventCategory = null,
  eventLabel = null,
  eventValue = null,
  hash = null,
  ...vars
}: StatsEventGAType): void => {
  try {
    window.gtag(event, eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
      from: hash,
      send_to: __params__.GA_ID,
      ...vars,
    });
  } catch (e) {
    console.error('gtag page error', e);
  }
};

/**
 * Отправка события в Яндекс Метрике
 * @typedef {Object} StatsEventType
 * @property {string} event - id цели из Яндекс Метрики
 * @property {Object=} params - дополнительные параметры, например, category
 */
export const sendEventYaM = ({ event, params = {} }: StatsEventType): void => {
  try {
    window.ym(__params__.YM_ID, 'reachGoal', event, params);
  } catch (e) {
    console.error('yandex metrika event error', e);
  }
};

/**
 * Отправка события перехода на страницу в Яндекс Метрику
 * @typedef {Object} StatsPageType
 * @property {string} title - название страницы
 * @property {string} path - путь страницы
 */
export const statPageYaM = ({ path, title }: StatsPageType): void => {
  try {
    window.ym(__params__.YM_ID, 'hit', `${location.origin}${path}`, {
      title,
    });
  } catch (e) {
    console.error('yandex metrika page error', e);
  }
};

/**
 * Отправка события в Top Mail
 * @typedef {Object} StatsEventType
 * @property {string} event - id цели из Top.Mail
 */
export const sendEventMail = ({ event }: StatsEventType): void => {
  try {
    window._tmr.push({
      id: __params__.MAIL_ID,
      type: 'reachGoal',
      goal: event,
    });
  } catch (e) {
    console.error('top mail event error', e);
  }
};

/**
 * Отправка события перехода на страницу в Top Mail
 * @typedef {Object} StatsPageType
 * @property {string} path - путь страницы
 */
export const sendPageMail = ({ path }: StatsPageType): void => {
  try {
    window._tmr.push({
      id: __params__.MAIL_ID,
      type: 'pageView',
      url: `${location.origin}${path}`,
    });
  } catch (e) {
    console.error('top mail page error', e);
  }
};
