Mẫu thiết kế Proxy là một mẫu thiết kế cấu trúc (structural design pattern) trong đó một đối tượng tương tác với một đối tượng thật thông qua một đối tượng đại diện (proxy) để kiểm soát quyền truy cập vào đối tượng thật và thực hiện các hành động bổ sung trước hoặc sau khi truy cập đối tượng thật. Proxy cho phép chúng ta thay đổi hoặc mở rộng hành vi của một đối tượng mà không cần thay đổi đối tượng gốc.

Dưới đây là một ví dụ về cách triển khai mẫu thiết kế Proxy bằng JavaScript:

```javascript
// Đối tượng thật (Real Subject)
class Image {
  constructor(filename) {
    this.filename = filename;
  }

  display() {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Đối tượng đại diện (Proxy)
class ImageProxy {
  constructor(filename) {
    this.filename = filename;
    this.image = null;
  }

  display() {
    if (!this.image) {
      this.image = new Image(this.filename);
    }
    this.image.display();
  }
}

// Sử dụng Proxy
const imageProxy = new ImageProxy('image.jpg');
imageProxy.display();
```

Trong ví dụ này, chúng ta có hai lớp: `Image` (Hình ảnh) đại diện cho đối tượng thật và `ImageProxy` đại diện cho đối tượng đại diện (proxy). Lớp `Image` có phương thức `display` để hiển thị hình ảnh. Lớp `ImageProxy` cũng có phương thức `display`, nhưng trước khi hiển thị hình ảnh, nó kiểm tra xem đối tượng `Image` đã được tạo hay chưa. Nếu chưa, nó tạo một đối tượng `Image` mới và sau đó gọi phương thức `display` của đối tượng `Image`.

Khi chạy mã trên, kết quả sẽ là:

```
Displaying image: image.jpg
```

Trong ví dụ này, `ImageProxy` là một lớp đại diện cho đối tượng `Image`. Thay vì tạo trực tiếp một đối tượng `Image`, chúng ta tạo một đối tượng `ImageProxy` và gọi phương thức `display` trên nó. Đối tượng `ImageProxy` kiểm tra xem đã tạo một đối tượng `Image` hay chưa. Nếu chưa, nó tạo một đối tượng `Image` mới và sau đó gọi phương thức `display` trên đối tượng `Image`. Proxy cho phép chúng ta kiểm soát quyền truy cập vào đối tượng `Image` và thực hiện các hành động bổ sung trước hoặc sau khi truy cập đối tượng thật