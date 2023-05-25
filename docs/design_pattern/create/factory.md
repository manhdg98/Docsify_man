Pattern Factory là một mẫu thiết kế phần mềm thuộc nhóm tạo đối tượng (creational design pattern) và được sử dụng để tạo ra các đối tượng một cách trừu tượng, cho phép chúng ta tạo ra các đối tượng mà không cần chỉ định cụ thể lớp cụ thể.

Trong JavaScript, mẫu Factory thường được sử dụng để tạo ra các đối tượng dựa trên một loại hoặc một tập hợp các loại. Dưới đây là một ví dụ mô tả mẫu Factory bằng JavaScript:

```javascript
// Abstract product
class Product {
  constructor(name) {
    this.name = name;
  }

  operation() {
    console.log(`Operation on ${this.name}`);
  }
}

// Concrete product 1
class ConcreteProduct1 extends Product {
  constructor() {
    super('Product 1');
  }
}

// Concrete product 2
class ConcreteProduct2 extends Product {
  constructor() {
    super('Product 2');
  }
}

// Factory
class Factory {
  createProduct(type) {
    if (type === 'product1') {
      return new ConcreteProduct1();
    } else if (type === 'product2') {
      return new ConcreteProduct2();
    } else {
      throw new Error('Invalid product type.');
    }
  }
}

// Client
const factory = new Factory();

const product1 = factory.createProduct('product1');
product1.operation(); // Operation on Product 1

const product2 = factory.createProduct('product2');
product2.operation(); // Operation on Product 2
```

Trong ví dụ trên, chúng ta có một Abstract Product (Product) đại diện cho một loại sản phẩm trừu tượng. Các Concrete Product (ConcreteProduct1 và ConcreteProduct2) triển khai Product để cung cấp các triển khai cụ thể của sản phẩm. Factory là lớp tạo ra đối tượng và chịu trách nhiệm quyết định loại sản phẩm nào được tạo ra dựa trên thông tin đầu vào. Client sử dụng Factory để tạo ra các đối tượng mà không cần biết cụ thể về lớp cụ thể.

Mẫu Factory cho phép chúng ta tạo ra các đối tượng một cách trừu tượng và linh hoạt, giúp tách biệt quyết định tạo đối tượng khỏi Client, đồng thời cho phép mở rộng và thêm mới các lớp sản phẩm một cách dễ dàng.