export interface ISubscriber {
  on: Function;
}

export interface IObservable {
  subscribe: Function;
  unsubscribe: Function;
  publish: Function;
}

export class Observable implements IObservable {
  private subscribers: ISubscriber[] = new Array();
  public subscribe(subscriber:ISubscriber) {    
    this.unsubscribe(subscriber)
    this.subscribers.push(subscriber);
  }
  public unsubscribe(target:ISubscriber) {
    this.subscribers = this.subscribers.filter((subscriber) => {
      return subscriber !== target;
    });
  }
  public publish(eventString:string,data:any) {
    this.subscribers.forEach((subscriber) => {
      subscriber.on(eventString,data);
    });
  }
}