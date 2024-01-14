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

# Event Loop
Event Loop của Node.js và JavaScript trong trình duyệt có cơ bản là giống nhau vì cả hai đều dựa trên JavaScript Engine (V8 trong trường hợp của Google Chrome và Node.js). Tuy nhiên, có một số khác biệt quan trọng do môi trường và ứng dụng cụ thể của chúng:

### 1. Môi Trường Xử Lý:
- **Trình Duyệt JavaScript**:
  - Event Loop trong trình duyệt chủ yếu quản lý các sự kiện UI, xử lý AJAX, và tương tác với Web APIs. 
  - Nó cần phối hợp với rendering engine của trình duyệt để cập nhật giao diện người dùng.
  
- **Node.js**:
  - Event Loop trong Node.js xử lý các tác vụ liên quan đến I/O không

 đồng bộ, như làm việc với file system, database queries, và network operations.
  - Không tương tác với giao diện người dùng hay Web APIs như trong trình duyệt.

### 2. Các Phases của Event Loop:
- **Trình Duyệt JavaScript**:
  - Có một cấu trúc đơn giản hơn với một queue duy nhất cho các sự kiện và callbacks.
  - Xử lý microtasks sau mỗi task, chủ yếu để xử lý promises.

- **Node.js**:
  - Event Loop trong Node.js được chia thành nhiều phases như timers, I/O callbacks, idle, prepare, poll, check, và close callbacks.
  - Mỗi phase có một loại công việc cụ thể và queue riêng. Điều này cho phép Node.js xử lý một loạt các loại hoạt động I/O một cách hiệu quả.

### 3. Tối Ưu Hóa cho Các Loại Tác Vụ:
- **Trình Duyệt JavaScript**:
  - Tối ưu cho tương tác người dùng và các tác vụ liên quan đến giao diện.
  - Cần cân nhắc đến hiệu suất rendering và tránh block main thread.

- **Node.js**:
  - Tối ưu cho I/O không đồng bộ và xử lý nhiều kết nối đồng thời.
  - Tập trung vào throughput và hiệu suất dịch vụ backend.

### 4. APIs và Tính Năng:
- **Trình Duyệt JavaScript**:
  - Hỗ trợ các Web APIs như DOM, XMLHttpRequest, Fetch API, v.v.
  - Chịu trách nhiệm cho việc xử lý sự kiện người dùng như click, scroll, và keyboard input.

- **Node.js**:
  - Cung cấp APIs cho các tác vụ server-side như HTTP requests, file system operations, và working with streams.
  - Không hỗ trợ các Web APIs có trong trình duyệt.

### Kết Luận
Trong khi cơ bản là giống nhau về mặt cấu trúc và hoạt động, Event Loop trong Node.js và JavaScript trong trình duyệt khác nhau về môi trường hoạt động, loại tác vụ mà chúng xử lý, và các

 APIs mà chúng hỗ trợ. Trình duyệt tập trung vào việc xử lý sự kiện liên quan đến UI và tương tác người dùng, trong khi Node.js tập trung vào xử lý I/O không đồng bộ và tối ưu hóa cho các ứng dụng server-side.