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
  sendMail,
  sendPageMail,
  sendStatsRegisterKTS,
  sendStatsDataSaveKTS,
  sendYaM,
  statPageYaM,
} from './send';
import { statPage } from './statsPages';
import { sendPixel } from './sendPixel';
import { sendVKStats } from './sendVKEvents';
import { sendVKRetargetingEvent } from './sendVKRetargetingEvent';
import { statEvent, statFunc, statSetStatus } from './stats';

export {
  init,
  sendEventGA,
  sendEventPageGA,
  sendMail,
  sendPageMail,
  sendPixel,
  sendStatsRegisterKTS,
  sendStatsDataSaveKTS,
  sendVKRetargetingEvent,
  sendYaM,
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
