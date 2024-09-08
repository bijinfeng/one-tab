import EventEmitter from "eventemitter3";

interface EventOptions {
  openSetting: (activeKey?: string) => void;
  login: () => void;
  addApp: () => void;
  addWidget: () => void;
}

export const events = new EventEmitter<EventOptions>();
