### Event loop JS

![Async && Sync](./img/ev-loop.gif) 

### URL
```js
const urlObj = new URL("https://mansteven.vercel.app/#/?id=docsify")

logs:
{
  hash:"#/?id=docsify"
  host:"mansteven.vercel.app"
  hostname:"mansteven.vercel.app"
  href:"https://mansteven.vercel.app/#/?id=docsify"
  origin:"https://mansteven.vercel.app"
  password:""
  pathname:"/"
  port:""
  protocol:"https:"
  search:""
}
```

### `setTimeout()` và `clearTimeout()`:
   - `setTimeout()` is used to schedule the execution of a function or a code snippet after a specified delay.
   - `clearTimeout()` is used to cancel a scheduled timeout set by `setTimeout()`.

Example:
```javascript
// Using setTimeout() to schedule the execution of a function after 2 seconds
const timeoutId = setTimeout(() => {
  console.log('2 seconds have passed');
}, 2000);

// Clearing the scheduled timeout using clearTimeout() before it expires
clearTimeout(timeoutId);
```
### `setInterval()` and `clearInterval()`:
   - `setInterval()` is used to schedule the repeated execution of a function or a code snippet at a specified interval.
   - `clearInterval()` is used to cancel a scheduled interval set by `setInterval()`.

Example:
```javascript
// Using setInterval() to schedule the execution of a function every 1 second
const intervalId = setInterval(() => {
  console.log('Performing...');
}, 1000);

// Clearing the scheduled interval after 5 seconds using clearInterval()
setTimeout(() => {
  clearInterval(intervalId);
  console.log('Interval has been cleared');
}, 5000);
```

### `setImmediate()` and `clearImmediate()`:
   - `setImmediate()` is used to schedule the execution of a function or a code snippet in the event loop immediately after the main thread completes.
   - `clearImmediate()` is used to cancel a scheduled immediate set by `setImmediate()`.

Example:
```javascript
// Using setImmediate() to schedule the execution of a function in the event loop
const immediateId = setImmediate(() => {
  console.log('setImmediate() has been executed');
});

// Clearing the scheduled immediate using clearImmediate()
clearImmediate(immediateId);
```