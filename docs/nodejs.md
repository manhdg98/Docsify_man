Node.js was first released in 2009 by Ryan Dah

[Hầu hết các máy chủ Web sẽ chặn cho Anyi/O Task⁴, chẳng hạn như đọc từ hệ thống tệp hoặc tính toán mạng và điều này sẽ giảm đáng kể thông lượng của chúng. Ví dụ: nếu một máy chủ nhận được tải lên tệp, nó sẽ không thể xử lý bất kỳ yêu cầu nào khác cho đến khi tải lên được hoàn thành

Vào thời điểm đó, Dahl chủ yếu làm việc với Ruby và mô hình chủ đạo cho các ứng dụng web là có một nhóm các quy trình ruby mà máy chủ web (ví dụ: Ngninx) sẽ ủy quyền. Nếu một quy trình Ruby bị chặn khi tải lên, Nginx sẽ gửi yêu cầu tới quy trình khác

Node.js đã thay đổi mô hình này bằng cách làm cho tất cả các tác vụ I/O không bị chặn và không đồng bộ. Điều này cho phép các máy chủ web được viết bằng Node.js phục vụ hàng nghìn yêu cầu đồng thời– các yêu cầu tiếp theo không phải đợi các yêu cầu trước đó hoàn thành.

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