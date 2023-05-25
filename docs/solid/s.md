Single Responsibility Principle (SRP) là một nguyên tắc thiết kế trong SOLID principles, nó quy định rằng mỗi lớp hoặc đối tượng chỉ nên có một trách nhiệm duy nhất và phải duy trì chỉ một lý do để thay đổi. Điều này giúp tăng tính module hóa, dễ dàng bảo trì, mở rộng và tái sử dụng mã.

Trong ví dụ JavaScript của chúng ta, chúng ta sẽ áp dụng SRP vào lớp `Product` và tách nó thành hai lớp riêng biệt: `Product` và `ProductRenderer`.

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ProductRenderer {
  render(product) {
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.price}`);
  }
}

// Sử dụng lớp Product và ProductRenderer
const product = new Product('Áo', 20);
const renderer = new ProductRenderer();

renderer.render(product);
```

Trong ví dụ ban đầu, lớp `Product` có trách nhiệm lưu trữ thông tin về sản phẩm (tên và giá). Tuy nhiên, nó cũng đảm nhận trách nhiệm để hiển thị thông tin sản phẩm trực tiếp.

Để tuân thủ SRP, chúng ta tách lớp `Product` thành hai lớp riêng biệt: `Product` và `ProductRenderer`. Lớp `Product` chỉ chịu trách nhiệm lưu trữ thông tin về sản phẩm, trong khi lớp `ProductRenderer` chịu trách nhiệm duy nhất là hiển thị thông tin sản phẩm.

Bằng cách tách biệt các trách nhiệm, chúng ta đảm bảo rằng mỗi lớp chỉ chịu trách nhiệm duy nhất và mỗi lớp có thể thay đổi mà không ảnh hưởng đến các lớp khác. Việc tách biệt trách nhiệm cũng giúp cho việc bảo trì, mở rộng và tái sử dụng mã dễ dàng hơn trong tương lai.

Trong ví dụ trên, lớp `Product` chỉ đảm nhiệm trách nhiệm lưu trữ thông tin sản phẩm, trong khi lớp `ProductRenderer` chỉ chịu trách nhiệm hiển thị thông tin sản phẩm.


SRP nên được áp dụng trong các trường hợp sau:

1. Khi một lớp hoặc đối tượng có nhiều trách nhiệm khác nhau: Nếu một lớp hoặc đối tượng đang thực hiện nhiều công việc không liên quan, hoặc có nhiều lý do để thay đổi, thì nó có thể được chia thành các lớp riêng biệt, mỗi lớp chịu trách nhiệm duy nhất.

2. Khi một lớp hoặc đối tượng quá phức tạp: Nếu một lớp hoặc đối tượng quá lớn và phức tạp, việc tách biệt các trách nhiệm sẽ giúp làm giảm sự phức tạp và tăng tính module hóa. Điều này cũng giúp trong việc bảo trì, mở rộng và tái sử dụng mã.

3. Khi có nhu cầu thay đổi hành vi của một phần trong lớp hoặc đối tượng: Nếu một phần cụ thể của một lớp hoặc đối tượng thường xuyên thay đổi, đặc biệt là khi nó không liên quan đến phần còn lại, thì tách biệt phần đó thành một lớp riêng biệt sẽ giúp quản lý và bảo trì dễ dàng hơn.

4. Khi muốn tăng tính phân cấp và tái sử dụng: Sử dụng SRP giúp tạo ra các đối tượng có khả năng tái sử dụng cao hơn. Bằng cách tách biệt các trách nhiệm, chúng ta có thể sử dụng lại các lớp hoặc đối tượng một cách độc lập trong các ngữ cảnh khác nhau.

Tóm lại, SRP nên được áp dụng trong các trường hợp khi lớp hoặc đối tượng quá phức tạp, có nhiều trách nhiệm không liên quan hoặc khi có nhu cầu thay đổi hành vi một phần cụ thể của lớp hoặc đối tượng. Nó giúp tăng tính module hóa, dễ dàng bảo trì, mở rộng và tái sử dụng mã.