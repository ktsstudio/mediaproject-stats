import {
  sendStatsDataSaveKTS,
  sendStatsRegisterKTS,
  sendEventPageGA,
  statPageYaM,
  sendPageMail,
} from './send';
import { __params__ } from './init';
import { StatsSendPageType } from './types/send';

/**
 * Отправка события захода на страницу во все доступные счетчики
 * @param {Object} page - event, path, title события
 */
export const statPage = async (page: StatsSendPageType): Promise<void> => {
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

  const { event, title, path } = page;

  if (KTS_PROJECT_NAME && SEARCH && KTS_STATS_URL) {
    await sendStatsRegisterKTS({ event });
  }

  if (KTS_PROJECT_NAME && KTS_STATS_URL && KTS_TOKEN && userId) {
    await sendStatsDataSaveKTS({ event });
  }

  if (GA_ID) {
    sendEventPageGA({ path, title });
  }

  if (YM_ID) {
    statPageYaM({ path, title });
  }

  if (MAIL_ID) {
    sendPageMail({ path });
  }
};
