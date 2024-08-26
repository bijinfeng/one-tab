import EventEmitter from "eventemitter3"

interface EventOptions {
  openSetting: (activeKey?: string) => void
}

export const events = new EventEmitter<EventOptions>()
