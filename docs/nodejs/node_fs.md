Check Permissions of a File or Directory
```js
var fs = require('fs');
var path = '/path/to/check';
// checks execute permission
fs.access(path, fs.constants.X_OK, (err) => {
 if (err) {
 console.log("%s doesn't exist", path);
 } else {
 console.log('can execute %s', path);
 }
});
// Check if we have read/write permissions
// When specifying multiple permission modes
// each mode is separated by a pipe : `|`
fs.access(path, fs.constants.R_OK | fs.constants.W_OK, (err) => {
 if (err) {
 console.log("%s doesn't exist", path);
 } else {
 console.log('can read/write %s', path);
 }
});
```

 Checking if a file or a directory exists
 ```js
var fs = require('fs');
fs.stat('path/to/file', function(err) {
 if (!err) {
 console.log('file or directory exists');
 }
 else if (err.code === 'ENOENT') {
 console.log('file or directory does not exist');
 }
});
```