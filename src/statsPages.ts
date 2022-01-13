import {
  sendStatsDataSaveKTS,
  sendStatsRegisterKTS,
  sendEventPageGA,
  statPageYaM,
  sendPageMail,
} from './send';
import { __params__ } from './init';
import { StatsSendPageType } from './types/send';
import { sendVKRetargetingEvent } from './sendVKRetargetingEvent';

/**
 * Отправка события захода на страницу во все доступные счетчики
 * @param {Object} page - event, path, title события
 */
export const statPage = async ({
  event,
  title,
  path,
}: StatsSendPageType): Promise<void> => {
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

  if (KTS_PROJECT_NAME && KTS_STATS_URL && KTS_TOKEN && userId && event) {
    await sendStatsDataSaveKTS({ event });
  }

  if (GA_ID && path && title) {
    sendEventPageGA({ path, title });
  }

  if (YM_ID && path && title) {
    statPageYaM({ path, title });
  }

  if (MAIL_ID && path) {
    sendPageMail({ path });
  }

  if (window.VK && event) {
    sendVKRetargetingEvent(event);
  }
};
