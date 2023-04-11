## Global Function
![Global FN](./img/globalObj.PNG)

### Concept basic

```note
__dirname  - path to current directory
__filename - filename
require    - function to use modules (CommonJS)
module     - info about current module (file)
process    - info about env where the program is being executed
```
CommonJS, every file is module (by default)
Modules - Encapsulated Code (only share minimum)

```javascript
// 01-intro.js

const amount = 9

if (amount < 10) {
  console.log('small number')
} else {
  console.log('large number')
}

console.log(`hey it's my first node app!!!`)
```

```javascript
// 02-globals.js

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
```

```javascript
// 03-modules.js

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
```

```javascript
// 04-names.js

// local
const secret = 'SUPER SECRET'
// share
const john = 'john'
const peter = 'peter'

module.exports = { john, peter }
```

```javascript
// 05-utils.js

const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}
// export default
module.exports = sayHi
```

```javascript
// 06-alternative-flavor.js

module.exports.items = ['item1', 'item2']
const person = {
  name: 'bob',
}

module.exports.singlePerson = person
```

```javascript
// 07-mind-grenade.js

const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues()
```

```javascript
// 08-os-module.js

const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
```

```javascript
// 09-path-module.js

const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
```

```javascript
// 10-fs-sync.js

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
```

```javascript
// 11-fs-async.js

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
```

```javascript
// 12-http.js

const http = require('http')

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
```

```javascript
// 13-event-emitter.js

// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)
```

```javascript
// 14-request-event.js

const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)
```

```javascript
// 15-create-big-file.js

const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}
```

```javascript
// 16-streams.js

const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
```

```javascript
// 17-http-stream.js

var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)
```

```javascript
// app.js

console.log('Welcome to Node Tutorial')
```

```javascript
// markdown.js

const fs = require('fs-extra');

const folderPath = './'; // Thay đổi đường dẫn này để trỏ đến thư mục của bạn
const outputPath = './export.md'; // Thay đổi đường dẫn này để chỉ định tệp Markdown được tạo ra

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsFiles = files.filter((file) => {
    return file.endsWith('.js');
  });

  let output = '';

  jsFiles.forEach((file) => {
    const content = fs.readFileSync(`${folderPath}${file}`, 'utf8');
    output += '```javascript\n';
    output += `// ${file}\n\n`;
    output += `${content}\n`;
    output += '```\n\n';
  });

  fs.writeFile(outputPath, output, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Exported to ${outputPath}`);
  });
});
```
