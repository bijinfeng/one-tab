import EventEmitter from "eventemitter3";

interface EventOptions {
  openSetting: (activeKey?: string) => void;
  login: () => void;
}

export const events = new EventEmitter<EventOptions>();
