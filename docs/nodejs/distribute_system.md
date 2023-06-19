```js
const fs = require('fs');
fs.readFile('/etc/passwd',
 (err, data) => {
 if (err) throw err;
 console.log(data);
});
setImmediate(
 () => {
 console.log('This runs while file is being read');
});
```

TIP: 

```quote
The libuv thread pool size defaults to four, has a max of 1,024, and can be overridden by
setting the UV_THREADPOOL_SIZE=<threads> environment variable. In practice it’s not
that common to modify it and should only be done after benchmarking the effects in a
perfect replication of production. An app running locally on a macOS laptop will behave
very differently than one in a container on a Linux server
```