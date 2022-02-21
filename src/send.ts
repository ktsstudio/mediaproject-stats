import 'whatwg-fetch';

import { __params__ } from './init';
import { StatsEventGAType, StatsEventType, StatsPageType } from './types/send';

/**
 * Отправка события перехода на страницу в Google Analytics
 * @typedef {Object} StatsPageType
 * @property {string=} title - название страницы
 * @property {string=} path - путь страницы
 */
export const sendEventPageGA = ({ title, path }: StatsPageType): void => {
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
 * @property {string=} event - команда события в GA, по умолчанию равно 'event'
 * @property {string} eventAction - действие по событию
 * @property {string} eventCategory - категория события
 * @property {string=} eventLabel - ярлык события - дополнительная
 * информация для событий (опционально)
 * @property {number=} eventValue - ценность события, целое неотрицательное
 * число, используется например для указания времени загрузки проигрывателя
 * или для начисления денежной суммы при достижении определенного маркера воспроизведения в проигрывателе.
 * @property {string=} extra - дополнительные параметры: event_callback,
 * event_timeout, groups,
 * подробнее https://developers.google.com/tag-platform/gtagjs/reference/parameters?hl=ru
 */
export const sendEventGA = ({
  event = 'event',
  eventAction,
  eventCategory,
  eventLabel,
  eventValue,
  ...extra
}: StatsEventGAType): void => {
  try {
    window.gtag(event, eventAction, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue,
      send_to: __params__.GA_ID,
      ...extra,
    });
  } catch (e) {
    console.error('gtag page error', e);
  }
};

/**
 * Отправка события в Яндекс Метрику
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
