import 'whatwg-fetch';

import { __params__ } from './init';
import { StatsKTSType } from './types/send';

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
