import bridge from '@vkontakte/vk-bridge';

import { __params__ } from './init';
import { VKStatsType } from './types/send';

let access_token_for_vkstats = '';

/**
 * Отправка события во внутреннюю статистику VK
 * @typedef {Object} VKStatsType
 * @property {string} event - id события
 * @property {number} appId - id приложения
 * @property {string} platform - платформа, на которой запущено приложение
 * @property {string=} access_token - токен доступа прав в ВК с любым (и пустым) scope=
 */
export const sendVKStats = async ({
  event,
  appId,
  platform,
  access_token = '',
}: VKStatsType): Promise<void> => {
  const { userId } = __params__;

  // получать access_token_for_vkstats, только если не получен в методе,
  //  так как если вызывать VKWebAppGetAuthToken со scope = '' можно потерять
  //  токены, которые были получены в приложении
  if (access_token) {
    access_token_for_vkstats = access_token;
  }

  if (!access_token_for_vkstats) {
    // получить токен, если нет с пустым scope,
    // чтобы пользователь не увидел модалки с запросом прав
    const scope = '';
    try {
      const response = await bridge.send('VKWebAppGetAuthToken', {
        app_id: appId,
        scope,
      });
      access_token_for_vkstats = response.access_token;
    } catch (e: any) {
      console.error('VKWebAppGetAuthToken', e.error_type);
    }
  }

  try {
    // отправка статистики закрытым ВК-методом statEvents.addMiniApps
    await bridge.send('VKWebAppCallAPIMethod', {
      method: 'statEvents.addMiniApps',
      params: {
        events: [
          // @ts-ignore
          {
            user_id: userId,
            mini_app_id: appId,
            type: 'type_click',
            type_click: {
              type: 'type_mini_app_custom_event_item',
            },
            url: location.href,
            vk_platform: platform,
            event,
            screen: 'main',
            json: '',
          },
        ],
        v: '5.124',
        access_token: access_token_for_vkstats,
      },
    });
  } catch (e: any) {
    console.error('error send statEvents.addMiniApps', e.error_type);
  }
};
