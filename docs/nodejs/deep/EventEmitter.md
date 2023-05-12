ref: https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/

```js
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
    console.log("An event occurred");
});

myE.on("foo", () => {
    console.log("An event occurred");
}); 

myE.on("foo", (x) => {
    console.log("An event occurred params");
    console.log(x);
});

// once time
myE.once("bar", () => {
    console.log("An event occurred bar");
});

myE.emit("foo");
myE.emit("foo", "some text");

myE.emit("bar")
myE.emit("bar")
myE.emit("bar")
myE.emit("bar")
```

```js
class EventEmitter {
    listeners = {}
    
    addListener(eventName, fn) {
      this.listeners[eventName] = this.listeners[eventName] || [];
      this.listeners[eventName].push(fn);
      return this;
    }
  
    on(eventName, fn) {
      return this.addListener(eventName, fn);
    }
  
    once(eventName, fn) {
      this.listeners[eventName] = this.listeners[eventName] || [];
      const onceWrapper = () => {
        fn();
        this.off(eventName, onceWrapper);
      }
      this.listeners[eventName].push(onceWrapper);
      return this;
    }
  
    off(eventName, fn) {
      return this.removeListener(eventName, fn);
    }
  
    removeListener (eventName, fn) {
      let lis = this.listeners[eventName];
      if (!lis) return this;
      for(let i = lis.length; i > 0; i--) {
        if (lis[i] === fn) {
          lis.splice(i,1);
          break;
        }
      }
      return this;
    }
  
    emit(eventName, ...args) {
      let fns = this.listeners[eventName];
      if (!fns) return false;
      fns.forEach((f) => {
        f(...args);
      });
      return true;
    }
  
    listenerCount(eventName) {
      let fns = this.listeners[eventName] || [];
      return fns.length;
    }
  
    rawListeners(eventName) {
      return this.listeners[eventName];
    }
  } 
```