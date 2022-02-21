import { VKStatsInitType } from './send';

/**
 * Тип общих параметров KTS event
 */
export type CommonKTSType = {
  /**
   * ссылка на ktsspecials - внутренний сервис kts
   */
  KTS_STATS_URL: string;
  /**
   * название проекта в ktsspecials
   */
  KTS_PROJECT_NAME: string;
};

/**
 * Тип параметров для метода KTS /data/save
 */
export type DataSaveKTSType = {
  /**
   * токен ktsspecials
   */
  KTS_TOKEN: string;
} & CommonKTSType;

/**
 * Тип параметров для метода KTS /event/register
 */
export type EventRegisterKTSType = {
  /**
   * подпись параметров запуска в vk/ok
   */
  SEARCH: string;
} & CommonKTSType;

export type ParamsKTSType = {
  KTS_TOKEN: string;
} & EventRegisterKTSType;

/**
 * Общий тип параметров инициализации
 */
export type CommonInitType = {
  /**
   * id счетчика google analytics
   */
  GA_ID?: string;
  /**
   * id счетчика яндекс метрика
   */
  YM_ID?: number;
  /**
   * id счетчика Top.Mail
   */
  MAIL_ID?: string;
  /**
   * id пользователя vk/ok
   */
  userId?: number;
  /**
   * флаг использования библиотеки snitch
   */
  hasSnitch?: boolean;
  /**
   * список параметров для отправки статистики во внутреннюю стататистику ВК
   */
  VK_STAT_PARAM?: VKStatsInitType | null;
};

/**
 * Тип входных параметров метода инициализации
 */
export type InitType = {
  /**
   * список параметров для метода KTS /data/save
   */
  KTS_DATA_SAVE?: DataSaveKTSType;
  /**
   * список параметров для метода KTS /event/register
   */
  KTS_EVENT_REGISTER?: EventRegisterKTSType;
} & CommonInitType;

/**
 * Тип переменной __params__
 */
export type ParamsInitType = ParamsKTSType & CommonInitType;
