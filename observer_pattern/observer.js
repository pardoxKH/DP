//the subject

const createObservable = () => {
  return {
    subscribers: [],
    //enables observers to register to observable
    subscribe(fn) {
      this.subscribers.push(fn);
    },
    //enables observers to unregister from observable
    unsubscribe(fn) {
      this.subscribers = this.subscribers.filter(
        (subscriber) => subscriber !== fn
      );
    },
    //enables triggering the observers
    broadcast(data) {
      for (let i = 0; i < this.subscribers.length; i++) {
        this.subscribers[i](data);
      }
    },
  };
};

const observable = createObservable();

const fn1 = (data) => {
  console.log("subscriber 1 executed with data", data);
};
const fn2 = (data) => {
  console.log("subscriber 2 executed with data", data);
};
observable.subscribe(fn1);
observable.subscribe(fn2);

observable.unsubscribe(fn1);
observable.broadcast("Subscribers triggered!");
//will print subscriber 2 executed with data Subscribers triggered! because fn2 is the only subscriber to the observable
