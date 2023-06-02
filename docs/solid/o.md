Open/Closed Principle (OCP) là một nguyên tắc thiết kế trong SOLID principles, nó quy định rằng một phần mềm phải được thiết kế sao cho các lớp, module hoặc hệ thống phải mở để mở rộng (open for extension) nhưng đóng để thay đổi (closed for modification). Nghĩa là, chúng ta nên có khả năng mở rộng chức năng của một phần mềm mà không cần sửa đổi mã nguồn gốc.

Dưới đây là một ví dụ về cách áp dụng nguyên tắc OCP trong JavaScript:

```javascript
class Shape {
  draw() {
    throw new Error("Method 'draw' must be implemented");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log('Drawing a rectangle');
  }
}

class Circle extends Shape {
  draw() {
    console.log('Drawing a circle');
  }
}

class Drawing {
  constructor() {
    this.shapes = [];
  }

  addShape(shape) {
    this.shapes.push(shape);
  }

  drawShapes() {
    for (let shape of this.shapes) {
      shape.draw();
    }
  }
}

// Sử dụng lớp Drawing
const drawing = new Drawing();
drawing.addShape(new Rectangle());
drawing.addShape(new Circle());
drawing.drawShapes();
```

Trong ví dụ này, chúng ta có một lớp cơ sở `Shape` định nghĩa phương thức `draw`, nhưng nó được gọi là phương thức trừu tượng (abstract) bằng cách ném ra một lỗi nếu không được triển khai.

Các lớp `Rectangle` và `Circle` kế thừa từ `Shape` và triển khai phương thức `draw` của riêng chúng.

Lớp `Drawing` là một lớp chịu trách nhiệm quản lý và vẽ các hình. Nó chứa một mảng các đối tượng `Shape` và cung cấp các phương thức để thêm hình vào danh sách và vẽ tất cả các hình.

Khi chạy mã trên, kết quả sẽ là:

```
Drawing a rectangle
Drawing a circle
```

Trong ví dụ này, nguyên tắc OCP được áp dụng bằng cách sử dụng kế thừa và đa hình. Lớp `Shape` định nghĩa phương thức `draw` nhưng không triển khai nó. Thay vào đó, các lớp con kế thừa từ `Shape` và triển khai phương thức `draw` của riêng chúng. Khi chúng ta muốn thêm một hình mới, chúng ta chỉ cần tạo một lớp mới kế thừa từ `Shape` và triển khai phương thức `draw` mà không cần sửa đổi lớp `Drawing`.