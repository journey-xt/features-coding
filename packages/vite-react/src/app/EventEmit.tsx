import React, { useRef } from "react";

type Callback = (args?: any[]) => void;

class EventEmitter {
  events: Map<string, Callback>;

  constructor() {
    this.events = new Map([]);
  }

  /**
   * 注册方法
   * @eventName 注册事件名称
   */
  registry(eventName: string, callback: Callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, callback);
    }
  }

  /**
   * 删除事件
   * @eventName 删除注册事件
   */
  destroy(eventName: string) {
    if (this.events.has(eventName)) {
      this.events.delete(eventName);
    }
  }

  /**
   * 触发事件
   */
  emit(eventName: string, args: any[]) {
    const callback = this.events.get(eventName);

    if (callback) {
      callback(args);
    }
  }
}

const EventEmit = () => {
  return <div>订阅模式</div>;
};

export default EventEmit;
