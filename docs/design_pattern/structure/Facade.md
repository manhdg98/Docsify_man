Pattern Facade là một mẫu thiết kế phần mềm thuộc nhóm cấu trúc (structural design pattern) và được sử dụng để cung cấp một giao diện đơn giản và thân thiện để tương tác với một hệ thống phức tạp hoặc một tập hợp các thành phần.

Trong JavaScript, mẫu Facade thường được sử dụng để giảm sự phức tạp của một hệ thống bằng cách cung cấp một giao diện đơn giản cho việc tương tác với các thành phần bên trong. Dưới đây là một ví dụ mô tả mẫu Facade bằng JavaScript:

```js
// Subsystem 1
class Subsystem1 {
  operation1() {
    console.log('Subsystem 1: Operation 1');
  }

  operation2() {
    console.log('Subsystem 1: Operation 2');
  }
}

// Subsystem 2
class Subsystem2 {
  operation1() {
    console.log('Subsystem 2: Operation 1');
  }

  operation2() {
    console.log('Subsystem 2: Operation 2');
  }
}

// Facade
class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  operation() {
    this.subsystem1.operation1();
    this.subsystem1.operation2();
    this.subsystem2.operation1();
    this.subsystem2.operation2();
  }
}

// Client
const facade = new Facade();
facade.operation();

```

Trong ví dụ trên, chúng ta có hai Subsystem (Subsystem 1 và Subsystem 2) đại diện cho các thành phần phức tạp trong hệ thống. Facade cung cấp một giao diện đơn giản (operation) để tương tác với hệ thống, bên trong gọi các phương thức của các Subsystem tương ứng. Khi Client sử dụng Facade, nó không cần biết hoặc quan tâm đến chi tiết bên trong của hệ thống, mà chỉ cần gọi phương thức operation của Facade để thực hiện các chức năng cần thiết.

Với mẫu Facade, chúng ta có thể giảm sự phức tạp và sự phụ thuộc giữa Client và Subsystem, đồng thời cung cấp một giao diện thân thiện và dễ sử dụng cho việc tương tác với hệ thống phức tạp hơn.