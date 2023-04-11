Node.js was first released in 2009 by Ryan Dah
### Node.js is an environment to run javascript outside of the browser

[Hầu hết các máy chủ Web sẽ chặn cho Anyi/O Task⁴, chẳng hạn như đọc từ hệ thống tệp hoặc tính toán mạng và điều này sẽ giảm đáng kể thông lượng của chúng. Ví dụ: nếu một máy chủ nhận được tải lên tệp, nó sẽ không thể xử lý bất kỳ yêu cầu nào khác cho đến khi tải lên được hoàn thành

Vào thời điểm đó, Dahl chủ yếu làm việc với Ruby và mô hình chủ đạo cho các ứng dụng web là có một nhóm các quy trình ruby mà máy chủ web (ví dụ: Ngninx) sẽ ủy quyền. Nếu một quy trình Ruby bị chặn khi tải lên, Nginx sẽ gửi yêu cầu tới quy trình khác

Node.js đã thay đổi mô hình này bằng cách làm cho tất cả các tác vụ I/O không bị chặn và không đồng bộ. Điều này cho phép các máy chủ web được viết bằng Node.js phục vụ hàng nghìn yêu cầu đồng thời– các yêu cầu tiếp theo không phải đợi các yêu cầu trước đó hoàn thành.

Node.js được thiết kế để có khả năng xử lý đa luồng (multithreading) và non-blocking. Trong khi đó, hầu hết các thao tác I/O (như đọc hoặc ghi file, truy vấn cơ sở dữ liệu, gửi yêu cầu HTTP) đều làm việc bất đồng bộ (non-blocking), có nghĩa là các tác vụ đó không bị chặn và CPU có thể tiếp tục thực hiện các tác vụ khác trong khi chờ kết quả trả về từ I/O.

Tuy nhiên, Node.js cũng cung cấp một số hàm đồng bộ (blocking) như mkdirSync trong fs để cho phép các tác vụ đơn giản, không tác động lớn đến hiệu suất hệ thống, hoặc trong trường hợp chúng ta muốn đợi cho đến khi tác vụ hoàn thành trước khi tiếp tục thực hiện các tác vụ khác. Nếu sử dụng các hàm đồng bộ này trong các tác vụ lớn hoặc phức tạp, có thể dẫn đến hiệu suất giảm và chậm hơn so với sử dụng các hàm không đồng bộ.

Do đó, khi sử dụng Node.js, chúng ta cần phải chú ý tới việc sử dụng các hàm đồng bộ và đảm bảo rằng chúng ta sử dụng chúng đúng cách để tận dụng tối đa khả năng non-blocking của Node.js và tránh hiệu ứng chậm trễ trong quá trình thực thi.

```js
var fs = require('fs');

try {
  fs.writeFileSync('sync.txt', 'anni', { mode: 0o755 });
  console.log("Run first, i'm blocking task")
 } catch(err) {
  // An error occurred
  console.error(err);
 }
 
// Save the string "Hello world!" in a file called "hello.txt" in
// the directory "/tmp" using the default encoding (utf8).
// This operation will be completed in background and the callback
// will be called when it is either done or failed.
fs.writeFile('hello.txt', 'Hello world!', function(err) {
 // If an error occurred, show it and return
 console.log("success1")
 if(err) return console.error(err);
 // Successfully wrote to the file!
});
// Save binary data to a file called "binary.txt" in the current
// directory. Again, the operation will be completed in background.
var buffer = new Buffer.from([ 0x48, 0x65, 0x6c, 0x6c, 0x6f ]);
fs.writeFile('binary.txt', buffer, function(err) {
 // If an error occurred, show it and return
 console.log("success2")
 if(err) return console.error(err);
 // Successfully wrote binary contents to the file!
});

console.log("Run1")
```

```shell
Run first, i'm blocking tassk
Run1
success1
success2
```

<h1>A Rich Module Ecosystem </h1>

Node.js began to shine with the introduction ofnpm, the package manager bundled with Node.js.A core philosophy of Node.js is to have onlya small collection of built-in modulesthat comepreinstalled with the language.

Examples of these modules arefs,http,tcp,dns,events,child_process, andcrypto

Node.js particularly shines when used for:
- HTTP APIs
- distributed systems
- command-line tools
- cross-platform desktop applications

There are many popular web and API frameworks built with Node.js such asexpress⁶,hapi⁷, andrestify⁸.

<h1>Front-end Vs. Back-end JavaScript </h1>

If you’re more familiar with using JavaScript in the browser than you are with using it in Node.js,there a few differences worth paying attention to.The biggest difference between Node.js and running JavaScript in the browser is the lack of globalsand common browser APIs. For example,window¹⁶anddocument¹⁷are unavailable in Node.js.

Both Node.js and browser-based JavaScript can perform many of the same functions such as accessthe network or filesystem.

Forexample, in the browser one will use the globally available `fetch()` API to create an HTTP request.In Node.js, this type of action would be done by first using `const http = require('http')` toload the built-in corehttpmodule, and afterwards using `http.get('http://www.fullstack.io/',function (res) { ... })`

<h1> Async </h1>
The simplest, and most common form of asynchronous execution within Node.js is the callback. Acallback is a way to specify that “after X happens, do Y”. Typically, “X” will be some form of slowI/O (e.g. reading a file), and “Y” will be work that incorporates the result (e.g. processing data fromthat file).

<h1> Callbacks </h1>
Callback functions like the one seen insetTimeout()are the most commonand straightforward, but we also have other techniques. These include promises, async/await, eventemitters, and streams

### Authen
Để cung cấp một ví dụ về Authentication và Authorization bằng JWT trong Node.js, ta có thể sử dụng một ứng dụng web đơn giản để xác thực người dùng và cấp quyền truy cập vào các tài nguyên của ứng dụng.

Bước 1: Cài đặt các package cần thiết
Để bắt đầu, chúng ta cần cài đặt các package sau:

express: để tạo ứng dụng web
jsonwebtoken: để tạo và xác minh JWT
bcryptjs: để mã hóa và so sánh mật khẩu
body-parser: để phân tích dữ liệu gửi từ phía người dùng
Chạy lệnh sau trong thư mục dự án để cài đặt các package:
```shell
npm install express jsonwebtoken bcryptjs body-parser
```
Bước 2: Tạo file server.js
Tạo một file mới có tên là server.js và thêm mã sau vào:
```js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'user1', password: '$2a$10$ZStN8V1JyMvnA41KjE0rGe8r7Wu/E9JlgK7VUGJv0.8dVq3t0wH0S' },
  { id: 2, username: 'user2', password: '$2a$10$ZStN8V1JyMvnA41KjE0rGe8r7Wu/E9JlgK7VUGJv0.8dVq3t0wH0S' }
];

const SECRET_KEY = 'secret_key';

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.usern+ame === username);
  if (!user) return res.status(404).send('User not found');
  if (!bcrypt.compareSync(password, user.password)) return res.status(401).send('Invalid password');
  const token = jwt.sign({ id: user.id }, SECRET_KEY);
  res.send({ token });
});

const authorize = (req, res, next) => {
  const authHeader = req.headerEs.authorization;
  if (!authHeader) return res.status(401).send('Missing Authorization header');
  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');
    req.userId = decoded.id;
    next();
  });
};

app.get('/protected', authorize, (req, res) => {
  res.send(`User ID: ${req.userId}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```
