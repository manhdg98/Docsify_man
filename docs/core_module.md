There's currently 34 core modules included in Node:

1. assert: Module này cung cấp các chức năng để kiểm tra tính đúng đắn của các biểu thức. Ví dụ:
```js
const assert = require('assert');
assert.strictEqual(1 + 1, 2);
```

2.buffer: Module này cung cấp các chức năng để xử lý dữ liệu dưới dạng buffer, chẳng hạn như mã hóa và giải mã. Ví dụ:
```js
const buf1 = Buffer.from('hello');
const buf2 = Buffer.from('world');
const buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3.toString()); // "helloworld"
```
3.c/c++_addons: Module này cung cấp các chức năng để tạo các phần mở rộng Node.js bằng C hoặc C++.

4.child_process: Module này cung cấp các chức năng để tạo ra các tiến trình con và trao đổi dữ liệu với chúng. Ví dụ:
```js
const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

5.cluster: Module này cung cấp các chức năng để tạo ra các tiến trình con và phân chia công việc giữa chúng. Ví dụ:
```js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}
```

6.console: Module này cung cấp các chức năng để ghi các thông tin ra console. Ví dụ:
```js
console.log('hello world');
```

7.crypto: Module này cung cấp các chức năng để thực hiện các thao tác mật mã học, chẳng hạn như mã hóa và giải mã. Ví dụ:
```js
const crypto = require('crypto');
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret).update('hello world').digest('hex');
console.log(hash); // "14c6567b2f29b8a8c9b90d5b496dd5a018d3a97768f57ab3e4d4f4b4fb4e2224"
```

8.punycode: Module punycode cung cấp các hàm để encode và decode các chuỗi theo chuẩn punycode, một chuẩn sử dụng để mã hóa các ký tự Unicode cho tên miền Internet. Module này hữu ích trong việc xử lý các tên miền có các ký tự đặc biệt.
Ví dụ:
```js
const punycode = require('punycode');
const domain = 'mañana.com';

const encoded = punycode.encode(domain);
console.log(encoded); // 'maana-pta.com'

const decoded = punycode.decode(encoded);
console.log(decoded); // 'mañana.com'
```

9.querystring: Module querystring cung cấp các hàm để parse và stringify các chuỗi query string (một chuỗi được sử dụng để truyền các tham số trên URL).
Ví dụ:
```js
const querystring = require('querystring');
const url = 'https://example.com/search?query=nodejs&limit=10';

const params = querystring.parse(url.split('?')[1]);
console.log(params); // { query: 'nodejs', limit: '10' }

const newParams = { query: 'javascript', limit: '20' };
const newUrl = `https://example.com/search?${querystring.stringify(newParams)}`;
console.log(newUrl); // 'https://example.com/search?query=javascript&limit=20'
```

10.readline: Module readline cung cấp các công cụ để đọc dữ liệu từ terminal dưới dạng stream và cung cấp giao diện dòng lệnh để tương tác với người dùng.
Ví dụ:
```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});
```

11.repl: Module repl cung cấp một REPL (Read-Eval-Print Loop) để chạy các lệnh Node.js trong môi trường command line.
Ví dụ:
```shell
$ node
> const sum = (a, b) => a + b
undefined
> sum(2, 3)
5
> const obj = { name: 'John', age: 25 }
undefined
> obj.name
'John'
> .exit
$
```

12.tty: Module này cho phép Node.js tương tác với terminal của máy tính. Module này bao gồm các lớp đối tượng như TTY, ReadStream, và WriteStream.
```js
const tty = require('tty');
const fs = require('fs');

const stdin = process.stdin;
const stdout = process.stdout;

if (tty.isatty(fs.stdin)) {
  stdout.write('TTY terminal detected\n');
} else {
  stdout.write('TTY terminal not detected\n');
}
```

13.dgram: Module này cung cấp một giao thức socket để giao tiếp qua mạng dựa trên Datagram. Module này bao gồm các lớp đối tượng như dgram.Socket và Buffer.
```js
const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Message: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`Server listening on ${address.address}:${address.port}`);
});

server.bind(8080);
```

14.url: Module này cung cấp các phương thức để xử lý và phân tích các URL. Module này bao gồm lớp đối tượng URL.
```js
const url = require('url');

const myURL = new URL('https://example.com/path?query=value#fragment');

console.log(myURL.href);
console.log(myURL.host);
console.log(myURL.pathname);
console.log(myURL.searchParams.get('query'));
```

15.util: Module này chứa một số tiện ích để xử lý các đối tượng và hàm. Module này bao gồm các hàm như util.inherits, util.format, và util.inspect.
```js
const util = require('util');

const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
};

console.log(util.inspect(obj, { depth: null }));
```

16.v8: Module này cung cấp các hàm để truy cập thông tin về trình biên dịch V8.
```js
const v8 = require('v8');

console.log(v8.getHeapStatistics());
```

17.vm: Module này cung cấp một giao diện để thực thi mã JavaScript trong một ngữ cảnh sandbox. Module này bao gồm lớp đối tượng vm.Script.
```js
const vm = require('vm');

const sandbox = {
  animal: 'cat',
  count: 2
};

const script = new vm.Script(`
  count += 1;
  name = "kitty";
`);

const context = new vm.createContext(sandbox);

script.runInContext(context);

console.log(sandbox);
```

18.deprecated_apis: Đây là một module cung cấp các hàm đã bị xóa hoặc không được hỗ trợ trong phiên bản hiện tại của Node.js. Nó được sử dụng để cung cấp thông báo cảnh báo cho các nhà phát triển sử dụng các hàm không được hỗ trợ và khuyến khích họ sử dụng các phương pháp thay thế.

```js
const deprecated = require('deprecated_apis');

deprecated.print('This method is deprecated');
```

19.dns: Module DNS cung cấp các phương pháp để thực hiện các thao tác liên quan đến hệ thống tên miền (DNS), chẳng hạn như chuyển đổi tên miền sang địa chỉ IP và đảo ngược


```js
const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
  console.log(`Địa chỉ IP: ${address}`);
});
```

20.domain: Module Domain cung cấp khả năng quản lý lỗi cho các tác vụ xử lý không đồng bộ. Nó cho phép các lỗi xảy ra trong các nhiệm vụ không đồng bộ được theo dõi và xử lý bằng cách sử dụng các đối tượng Domain.

```js
const domain = require('domain');

const d = domain.create();

d.on('error', (err) => {
  console.log(`Lỗi: ${err.message}`);
});

d.run(() => {
  setTimeout(() => {
    throw new Error('Lỗi xảy ra!');
  }, 1000);
});
```

21.Events: Module Events cung cấp một kiểu lập trình lắng nghe sự kiện và phát tán sự kiện cho các đối tượng JavaScript.
```js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('Sự kiện đã được kích hoạt!');
});
myEmitter.emit('event');
```

22.fs: Module fs cung cấp các phương thức để thực hiện các thao tác liên quan đến hệ thống tệp tin (file system), chẳng hạn như đọc và ghi file.
```js
const fs = require('fs');

fs.readFile('/path/to/file', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

23. http: Module http cung cấp một cách để tạo máy chủ HTTP hoặc thực hiện các yêu cầu HTTP bên ngoài.
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
```

24. zlib
The zlib module provides compression functionality implemented using Gzip and Deflate/Inflate.






