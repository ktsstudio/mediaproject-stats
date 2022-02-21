export type SnitchEventPayload = {
  [key: string]: string | number;
};

type Snitch = (eventName: string, eventPayload?: SnitchEventPayload) => void;

export interface WindowType {
  gtag: any;
  ym: any;
  _tmr: any;
  VK: any;
  snitch: Snitch;
}
