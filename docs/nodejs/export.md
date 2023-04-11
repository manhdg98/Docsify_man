hello-venus.js
```js
function hello(subject) {
 console.log('Venus says Hello ' + subject);
}
module.exports = {
 hello: hello
};
```

hello-jupiter.js
```js
module.exports = {
 hello: function(subject) {
 console.log('Jupiter says hello ' + subject);
 },
 bye: function(subject) {
 console.log('Jupiter says goodbye ' + subject);
 }
};
```

hello-mars.js
```js
exports.hello = function(subject) {
 console.log('Mars says Hello ' + subject);
};
```