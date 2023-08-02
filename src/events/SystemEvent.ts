import mitt, { Emitter, EventType, Handler } from "mitt";

class SystemEvent {
  static instance: SystemEvent;
  emitter: Emitter<Record<EventType, unknown>> | undefined;
  constructor() {
    if (!SystemEvent.instance) {
      this.emitter = mitt();
      SystemEvent.instance = this;
    }
  }

  on(event: EventType, handler: Handler<unknown>) {
    if (!this.emitter) return;
    this.emitter.on(event, handler);
  }

  off(event: EventType, handler: Handler<unknown>) {
    if (!this.emitter) return;
    this.emitter.off(event, handler);
  }

  emit(event: EventType, data: unknown) {
    if (!this.emitter) return;
    this.emitter.emit(event, data);
  }
}


SystemEvent.instance = new SystemEvent();


export default SystemEvent;