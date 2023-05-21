1. What is a fork in node JS?

Trong Node.js, fork() là một phương thức được sử dụng để tạo một quá trình con (child process) độc lập từ quá trình cha (parent process). Quá trình con sẽ được tạo ra bằng cách sao chép quá trình cha và có thể thực hiện các tác vụ mà không ảnh hưởng đến quá trình cha.

Dưới đây là một ví dụ về việc sử dụng fork() trong Node.js:

```js
const { fork } = require('child_process');

// Tạo một quá trình con bằng cách sao chép quá trình cha
const childProcess = fork('child.js');

// Gửi dữ liệu từ quá trình cha sang quá trình con
childProcess.send('Hello from parent process!');

// Nhận dữ liệu từ quá trình con
childProcess.on('message', message => {
  console.log('Message from child:', message);
});

// Xử lý sự kiện khi quá trình con kết thúc
childProcess.on('exit', code => {
  console.log('Child process exited with code', code);
});

```

```js
// child.js
process.on('message', message => {
  console.log('Message from parent:', message);

  // Gửi tin nhắn trả lời về quá trình cha
  process.send('Hello from child process!');
});
```

2. What is the difference between JavaScript and Node.js?

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

Node.js is a runtime environment for executing JavaScript code outside of a web browser, while JavaScript is a programming language that can be executed in both web browsers and Node.js environments.

Node.js không phải là một ngôn ngữ lập trình, mà nó là một môi trường thực thi (runtime environment) được xây dựng dựa trên JavaScript engine (V8 engine). Môi trường Node.js cung cấp một loạt các tính năng và API cho phép thực thi mã JavaScript ngoài môi trường trình duyệt.

JavaScript, là ngôn ngữ lập trình, được sử dụng để viết mã logic và xử lý các tác vụ trong môi trường Node.js. Node.js cung cấp một bộ thư viện và API mạnh mẽ để làm việc với file system, mạng, cơ sở dữ liệu, và nhiều hơn nữa. Nó cũng hỗ trợ các tính năng bất đồng bộ (asynchronous) thông qua sự sử dụng của event loop và các callback.

Vì vậy, Node.js là một môi trường thực thi JavaScript ngoài trình duyệt, cho phép chúng ta xây dựng các ứng dụng máy chủ, dòng lệnh và các ứng dụng phía máy chủ khác bằng JavaScript.

3. What is the difference between asynchronous and synchronous functions?

Synchronous functions block the execution of other code until they are complete, while asynchronous functions allow other code to continue executing while they are running, making them essential for writing scalable Node.js applications.

Nói đơn giản như thế này

Bất đồng bộ như việc nấu ăn và gọi ship

Khi nấu ăn, bạn phải bắt tay thực hiện nấu nướng không thể làm được việc gì khác

Còn với việc gọi ship, bạn vừa có thời gian làm việc khác, khi nào ship đến thì ăn thôi, Nhưng mất tiền

Cái gì cũng có lợi và hại.


4. What are the asynchronous tasks that should occur in an event loop?

Asynchronous tasks that should occur in an event loop in Node.js include I/O operations, timers, and callback functions. By performing these tasks asynchronously, Node.js can handle a large number of concurrent requests without blocking the event loop

5. What is the primary reason for using the event-based model in Node.js?

The main reason to use the event-based model in Node.js is performance. The event-based model allows for non-blocking I/O operations, which means that Node.js can handle a large number of connections without using a lot of resources.

6. Can you access DOM in Node?

No, you cannot access the DOM in Node.js. The DOM is a browser-specific API that allows for the manipulation of HTML and XML documents. Since Node.js does not run in a browser, it does not have access to the DOM.

7. What is "non-blocking" in node.js?

Trong Node.js, non-blocking đề cập đến khả năng thực thi đồng thời nhiều tác vụ của môi trường thời gian chạy mà không cần chờ hoàn thành một tác vụ trước khi bắt đầu tác vụ tiếp theo. Điều này đạt được thông qua việc sử dụng các thao tác I/O không đồng bộ, cho phép Node.js xử lý đồng thời nhiều yêu cầu.

8. Hoạt động I/O trong Nodejs là gì

Trong Node.js, hoạt động I/O (Input/Output) là quá trình gửi và nhận dữ liệu giữa ứng dụng và các thiết bị hoặc tài nguyên khác, như tệp tin, cơ sở dữ liệu, mạng, hoặc thiết bị ngoại vi.

Node.js được thiết kế để xử lý hoạt động I/O một cách hiệu quả và không chặn. Điều này có nghĩa là khi một yêu cầu I/O được gửi đi, Node.js không đợi đến khi hoạt động I/O hoàn thành trước khi chuyển sang xử lý các yêu cầu khác. Thay vào đó, nó sẽ tiếp tục thực hiện các công việc khác trong khi hoạt động I/O đang diễn ra và sẽ xử lý kết quả khi nó sẵn sàng.

Node.js sử dụng mô hình xử lý sự kiện (event-driven) và các callback (hàm gọi lại) để xử lý hoạt động I/O. Khi một hoạt động I/O hoàn thành, Node.js sẽ thông báo cho ứng dụng thông qua một callback, cho phép ứng dụng tiếp tục xử lý kết quả hoặc thực hiện các tác vụ khác.

Ví dụ, khi đọc dữ liệu từ một tệp tin trong Node.js, bạn sẽ gửi một yêu cầu đọc và chỉ định một hàm gọi lại (callback) để xử lý kết quả khi hoạt động đọc hoàn thành. Trong khi hoạt động đọc đang diễn ra, Node.js sẽ tiếp tục thực hiện các tác vụ khác và khi hoạt động đọc hoàn thành, nó sẽ gọi lại hàm gọi lại (callback) để xử lý dữ liệu đọc được.

Tổng quan, hoạt động I/O trong Node.js cho phép ứng dụng thực hiện các yêu cầu I/O một cách không chặn và hiệu quả, sử dụng mô hình xử lý sự kiện và các callback để xử lý kết quả khi hoạt động I/O hoàn thành.

9. What is Libuv?

Libuv is a critical component of Node.js, and it's what makes it possible to handle I/O operations in a non-blocking and efficient manner

10. How does Node.js handle the child threads?

Node.js handles child threads by creating separate instances of the Node.js runtime environment that can be used to execute code in parallel with the main process.

11. What is an Event Emitter in Node.js?

An Event Emitter is a Node.js module that facilitates communication between objects in a Node.js application. It is an instance of the EventEmitter class, which provides a set of methods to listen for and emit events. In Node.js, events are a core part of the platform, and they are used to handle asynchronous operations

12. Nodejs là đơn luồng, luồng đó chạy trong 1 cpu đúng không, ví dụ máy có 12 cpu

Đúng, Node.js mặc định là đơn luồng và chạy trên một CPU. Khi bạn chạy Node.js trên một máy có 12 CPU, Node.js chỉ sử dụng một trong số đó để chạy ứng dụng.

Tuy nhiên, Node.js cũng hỗ trợ mô-đun cluster để tận dụng tối đa tài nguyên của máy tính đa nhân. Mô-đun cluster cho phép tạo ra nhiều luồng con (worker threads) để xử lý các yêu cầu song song trên các CPU khác nhau.

Với mô-đun cluster, bạn có thể tạo ra một cụm (cluster) gồm nhiều luồng con chạy trên các CPU khác nhau trong máy. Mỗi luồng con có thể xử lý yêu cầu I/O và công việc tính toán riêng của nó. Các luồng con có thể giao tiếp với nhau thông qua cơ chế gửi tin nhắn (message passing) và chia sẻ dữ liệu qua bộ nhớ chia sẻ.

Việc sử dụng mô-đun cluster giúp tận dụng khả năng đa nhân của máy tính và nâng cao khả năng mở rộng và hiệu suất của ứng dụng Node.js trên máy có nhiều CPU.

Ví dụ, bạn có thể tạo ra một cụm (cluster) gồm 12 luồng con trong Node.js để chạy trên máy có 12 CPU, mỗi luồng con chạy trên một CPU riêng. Điều này cho phép ứng dụng Node.js của bạn xử lý đồng thời nhiều yêu cầu và tận dụng toàn bộ tài nguyên của máy tính đa nhân.

<b> Điều đó gây nhược điểm gì </b>

Sử dụng mô-đun cluster để chạy Node.js trên nhiều CPU cũng có nhược điểm tiềm ẩn. Dưới đây là một số nhược điểm mà bạn có thể gặp phải:

Phức tạp hóa: Sử dụng mô-đun cluster đòi hỏi kiến thức và kỹ năng cao hơn để quản lý và điều phối các luồng con. Bạn phải xử lý việc phân chia công việc, gửi tin nhắn giữa các luồng con và chia sẻ dữ liệu an toàn. Điều này có thể làm cho mã nguồn trở nên phức tạp hơn và tăng độ khó trong việc debug và bảo trì.

Synchronization: Khi chạy đa luồng, việc đồng bộ hóa dữ liệu và quản lý trạng thái trở nên phức tạp hơn. Bạn cần đảm bảo rằng các luồng con không xung đột khi truy cập vào dữ liệu chung và đồng bộ hóa các tác vụ song song một cách chính xác. Điều này có thể dẫn đến khó khăn trong việc quản lý và tránh các lỗi liên quan đến đồng bộ hóa.

Memory usage: Mỗi luồng con trong mô-đun cluster sẽ sử dụng một phần bộ nhớ riêng của nó. Khi chạy nhiều luồng con, tổng lượng bộ nhớ sử dụng cũng tăng lên. Điều này có thể tạo áp lực lên tài nguyên hệ thống và giới hạn khả năng mở rộng của ứng dụng.

Scalability: Mặc dù sử dụng mô-đun cluster có thể giúp tận dụng tối đa tài nguyên của máy tính đa nhân, nhưng khả năng mở rộng của ứng dụng có thể bị giới hạn bởi các yếu tố khác như khả năng kết nối database, tải tài nguyên khác, hoặc yêu cầu tính toán phức tạp. Điều này có nghĩa là việc sử dụng đa luồng không phải lúc nào cũng đảm bảo tăng hiệu suất và khả năng mở rộng.

13. What is the difference between readFile and create Read Stream in Node.js?

Create Read Stream is a better option for reading large files, while the read file is a better option for small files. It is important to choose the right method based on the size of the file and the requirements of the application

14. What is the difference between setImmediate() and setTimeout()?

Event loop chạy xong đống stack trong call stack thì setImmediate đứng chờ luôn, setTimeout để sau đi

15. MVC

Model: Model đại diện cho dữ liệu và quy tắc kinh doanh của ứng dụng. Nó là nơi lưu trữ, truy xuất và xử lý dữ liệu. Trong Node.js, Model có thể là các đối tượng JavaScript, các tệp tin, cơ sở dữ liệu hoặc các dịch vụ ngoại vi. Model không phụ thuộc vào bất kỳ thành phần nào khác trong MVC và chỉ tập trung vào quản lý dữ liệu và thao tác liên quan.

View: View là giao diện người dùng, nơi hiển thị dữ liệu từ Model và tương tác với người dùng. Trong Node.js, View thường được tạo bằng các template engine như EJS, Pug (trước đây là Jade), hoặc thậm chí có thể là các trang HTML tĩnh. View không chứa logic kinh doanh và chỉ hiển thị dữ liệu theo yêu cầu từ Controller và Model.

Controller: Controller là điểm trung tâm của MVC, nó là cầu nối giữa Model và View. Controller nhận lệnh từ người dùng thông qua View, xử lý các yêu cầu, truy xuất dữ liệu từ Model và sau đó chuyển dữ liệu đó đến View để hiển thị. Trong Node.js, Controller thường được triển khai bằng các hàm xử lý yêu cầu HTTP hoặc các router trong framework như Express.js.

