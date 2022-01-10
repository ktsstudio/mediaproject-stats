/**
 * Отправка события в Ретаргетинг ВК
 * @param {string} event - событие
 */
export const sendVKRetargetingEvent = (event: string): void => {
  try {
    window.VK.Goal(event);
  } catch (e) {
    console.error('error sent event Ретаргетинг ВК', e);
  }
};
