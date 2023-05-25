![High level coding](./img/singleton.PNG)
Singleton Pattern là một creational design pattern (tạo đối tượng) trong đó một class chỉ có một instance duy nhất và cung cấp một điểm truy cập toàn cục đến nó. Mục đích của Singleton là đảm bảo rằng chỉ có một instance duy nhất của một lớp được tạo ra và mọi yêu cầu tạo mới đều trả về instance đó.

```js
class Singleton {
  constructor() {
    // Khởi tạo các thuộc tính của Singleton
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Các phương thức khác của Singleton
}

// Sử dụng Singleton
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true, chỉ có một instance duy nhất của Singleton được tạo ra

```