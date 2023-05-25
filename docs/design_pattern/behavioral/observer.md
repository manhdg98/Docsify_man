Mẫu thiết kế Observer là một mẫu thiết kế hành vi (behavioral design pattern) trong đó có sự phụ thuộc một-nhiều giữa các đối tượng, khi một đối tượng thay đổi trạng thái, các đối tượng quan sát (observers) được thông báo và tự động cập nhật theo trạng thái mới. Mẫu thiết kế này giúp xây dựng các hệ thống có sự liên kết lỏng lẻo giữa các đối tượng và tạo điều kiện để các đối tượng tương tác theo cách độc lập.

Dưới đây là một ví dụ về cách triển khai mẫu thiết kế Observer bằng JavaScript:

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received a message: ${message}`);
  }
}

// Sử dụng Observer
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
const observer3 = new Observer('Observer 3');

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notify('Hello observers!');
```

Trong ví dụ này, chúng ta có hai lớp: `Subject` (Chủ đề) và `Observer` (Quan sát viên). Lớp `Subject` có vai trò là nguồn thông báo và duy trì một danh sách các `observers`. Lớp `Observer` đại diện cho các đối tượng quan sát và có phương thức `update` để xử lý thông báo từ `Subject`.

Chúng ta tạo một thể hiện của `Subject` là `subject`. Sau đó, chúng ta tạo ba `Observer` là `observer1`, `observer2`, và `observer3`. Chúng ta thêm các `Observer` vào `Subject` bằng cách gọi phương thức `addObserver`. Cuối cùng, chúng ta gửi thông báo "Hello observers!" đến `Subject` bằng cách gọi phương thức `notify`. Khi đó, `Subject` sẽ thông báo cho tất cả các `Observer` và mỗi `Observer` sẽ nhận được thông báo và in ra màn hình.

Khi chạy mã trên, kết quả sẽ là:

```
Observer 1 received a message: Hello observers!
Observer 2 received a message: Hello observers!
Observer 3 received a message: Hello observers!
```

Điều quan trọng trong mẫu thiết kế Observer là `Subject` và