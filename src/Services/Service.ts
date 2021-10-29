type Event<Args extends Array<unknown> = unknown[]> = (...args: Args) => void;
type EventCollection = Map<string, Event[]>;

export default abstract class Service {
  private _events: EventCollection = new Map<string, Event[]>();

  on<Callback extends Event>(event: string, callback: Callback) {
    const existing = this._events.get(event) ?? [];
    existing.push(callback);
    this._events.set(event, existing);

    return true;
  }

  removeListener<Callback extends Event>(event: string, callback?: Callback) {
    if (!callback) {
      this._events.delete(event);
      return;
    }

    const existing = this._events.get(event) ?? [];
    existing.filter((existingCallback) => existingCallback === callback);

    this._events.set(event, existing);
  }

  emit(event: string, ...args: unknown[]) {
    const events = this._events.get(event) ?? [];
    events.forEach((eventCall) => eventCall(...args));
  }
}
