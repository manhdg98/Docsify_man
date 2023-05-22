### Event Loop JS
![Class diagram](./img/node_pre.PNG)

![Class diagram](./img/evloop.PNG)

![Class diagram](./img/evloopjs.PNG)

![Class digaram](./img/micro-macro.PNG)

#### Micro Tasks:

- Promise callbacks: Khi một Promise được giải quyết hoặc bị từ chối, các hàm được đăng ký thông qua .then(), .catch(), hoặc .finally() được xem như là các micro tasks.
- MutationObserver: Được sử dụng để theo dõi sự thay đổi trong DOM. Các callback của MutationObserver được xem như là các micro tasks.
- process.nextTick: Đối với môi trường Node.js, process.nextTick được sử dụng để lên lịch các hàm để chạy sau khi hoàn thành hiện tại của event loop.

#### Macro Tasks:

- setTimeout và setInterval: Được sử dụng để lên lịch thực thi một hàm sau một khoảng thời gian nhất định hoặc định kỳ.
- I/O operations: Ví dụ như đọc và ghi tệp tin, gửi và nhận dữ liệu qua mạng.
- XMLHttpRequest và fetch: Sử dụng để tạo các yêu cầu HTTP và xử lý các phản hồi.

### Event Loop Nodejs

Nodejs Architecture 

![Class digaram](./img/nodejsEngine.PNG)
![Class digaram](./img/node_api_async.PNG)
![Class digaram](./img/node_evloop.PNG)
![Class digaram](./img/node_el_explane.PNG) 
![Class digaram](./img/node_thutu.PNG) 
![Class digaram](./img/best_pratices.PNG) 


