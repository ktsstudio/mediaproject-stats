import bridge from '@vkontakte/vk-bridge';

let access_token_for_vkstats = '';
// TODO получать access_token_for_vkstats, только если не получен в методе,
//  так как если вызывать VKWebAppGetAuthToken со scope = '' можно потерять
//  токены, которые были получены в приложении
// статистика отправляется в ВК
export const sendVKStats = async ({ eventName, appId, userId, platform }) => {
  if (!access_token_for_vkstats) {
    // получить токен, если еще нет с пустым scope,
    // чтобы пользователь не увидел модалки с запросом прав
    const scope = '';
    try {
      const response = await bridge.send('VKWebAppGetAuthToken', {
        app_id: appId,
        scope,
      });
      access_token_for_vkstats = response.access_token;
    } catch (e: any) {
      console.log('VKWebAppGetAuthToken', e.error_type);
    }
  }

  // отправка статистики закрытым ВК-методом statEvents.addMiniApps
  await bridge.send('VKWebAppCallAPIMethod', {
    method: 'statEvents.addMiniApps',
    params: {
      events: [
        // @ts-ignore
        {
          user_id: parseInt(userId, 10),
          mini_app_id: parseInt(userId, 10),
          type: 'type_click',
          type_click: {
            type: 'type_mini_app_custom_event_item',
          },
          url: location.href,
          vk_platform: platform,
          event: eventName,
          screen: 'main',
          json: '',
        },
      ],
      v: '5.124',
      access_token: access_token_for_vkstats,
    },
  });
};
