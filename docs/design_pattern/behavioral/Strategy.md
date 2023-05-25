Pattern Strategy (hay còn được gọi là Policy) là một mẫu thiết kế phần mềm thuộc nhóm hành vi (behavioral design pattern) và được sử dụng để định nghĩa một tập hợp các thuật toán hoặc chiến lược riêng biệt, đóng gói chúng thành các đối tượng riêng biệt và cho phép chúng hoạt động tương thích với nhau. Mẫu này cho phép lựa chọn và thay đổi thuật toán tại thời điểm chạy mà không ảnh hưởng đến code gốc sử dụng thuật toán đó.

Trong JavaScript, mẫu Strategy thường được sử dụng để xử lý các tình huống có nhiều chiến lược, có thể thay đổi và áp dụng các thuật toán khác nhau cho cùng một công việc. Dưới đây là một ví dụ mô tả mẫu Strategy bằng JavaScript:

```javascript
// Strategy interface
class Strategy {
  execute() {}
}

// Concrete strategy 1
class ConcreteStrategy1 extends Strategy {
  execute() {
    console.log('Executing Concrete Strategy 1');
  }
}

// Concrete strategy 2
class ConcreteStrategy2 extends Strategy {
  execute() {
    console.log('Executing Concrete Strategy 2');
  }
}

// Context
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    this.strategy.execute();
  }
}

// Client
const context = new Context(new ConcreteStrategy1());

context.executeStrategy(); // Executing Concrete Strategy 1

context.setStrategy(new ConcreteStrategy2());
context.executeStrategy(); // Executing Concrete Strategy 2
```

Trong ví dụ trên, chúng ta có một Strategy interface đại diện cho một loại chiến lược trừu tượng. Các Concrete Strategy (ConcreteStrategy1 và ConcreteStrategy2) triển khai Strategy để cung cấp các thuật toán hoặc chiến lược cụ thể. Context là đối tượng sử dụng chiến lược và có khả năng thay đổi chiến lược tại thời điểm chạy. Client tương tác với Context và quyết định sử dụng chiến lược nào cho công việc cụ thể.

Mẫu Strategy cho phép tách biệt việc triển khai thuật toán khỏi code sử dụng thuật toán đó, đồng thời cung cấp linh hoạt trong việc thay đổi và áp dụng các chiến lược khác nhau. Nó giúp giảm sự phụ thuộc và tăng tính mở rộng trong việc xử lý các tình huống đa dạng và có thể thay đổi.