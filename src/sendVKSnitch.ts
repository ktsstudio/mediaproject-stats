import { SnitchEventPayload } from './types/window';
import { SnitchPageType } from './types/send';

/**
 * Отправка события во внутреннюю статистику ВК через Snitch
 * https://github.com/nonstandardmail/snitch/tree/master/packages/snitch-mini-apps
 * @param {string} eventName - название события
 * @param {SnitchEventPayload=} eventPayload - объект с дополнительными
 * параметрами
 */
export const sendSnitchEvent = (
  eventName: string,
  eventPayload: SnitchEventPayload = {}
): void => {
  try {
    window.snitch(eventName, eventPayload);
  } catch (error: unknown) {
    console.error('Snitch send event error', error);
  }
};

/**
 * Отправка захода на страницу во внутреннюю статистику ВК через Snitch
 * https://github.com/nonstandardmail/snitch/tree/master/packages/snitch-mini-apps
 * @param {string} screenType - название экрана
 * @param {string=} screenId - дополнительная информация о странице
 */
export const sendSnitchPage = (
  screenType: string,
  screenId = ''
): void => {
  try {
    const data: SnitchPageType = {
      screenType,
    };

    if (screenId) {
      data.screenId = screenId;
    }

    window.snitch('screenChange', data);
  } catch (error: unknown) {
    console.error('Snitch send page error', error);
  }
};
