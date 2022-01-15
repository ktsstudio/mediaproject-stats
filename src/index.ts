import { WindowType } from './types/window';
import {
  StatsEventGAType,
  ActionType,
  StatEventFuncType,
  StatEventType,
  StatsEventType,
  StatsKTSType,
  StatsPageType,
  StatsSendPageType,
  StatusEventType,
} from './types/send';
import { InitType } from './types/init';
import { init, __params__ } from './init';
import {
  sendEventGA,
  sendEventPageGA,
  sendEventMail,
  sendPageMail,
  sendEventYaM,
  statPageYaM,
} from './send';
import { sendStatsRegisterKTS, sendStatsDataSaveKTS } from './sendKTS';
import { statPage } from './statsPages';
import { sendPixel } from './sendPixel';
import { sendVKStats } from './sendVKEvents';
import { sendVKRetargetingEvent } from './sendVKRetargetingEvent';
import { statEvent, statFunc, statSetStatus } from './statsEvent';

export {
  init,
  sendEventGA,
  sendEventPageGA,
  sendEventMail,
  sendPageMail,
  sendPixel,
  sendStatsRegisterKTS,
  sendStatsDataSaveKTS,
  sendVKRetargetingEvent,
  sendEventYaM,
  statPageYaM,
  statPage,
  statEvent,
  statFunc,
  statSetStatus,
  sendVKStats,
};

export {
  WindowType,
  InitType,
  StatsEventGAType,
  ActionType,
  StatEventFuncType,
  StatEventType,
  StatsEventType,
  StatsKTSType,
  StatsPageType,
  StatsSendPageType,
  StatusEventType,
};

export { __params__ };
