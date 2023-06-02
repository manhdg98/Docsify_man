Liskov Substitution Principle (LSP) là một nguyên tắc thiết kế trong SOLID principles, nó quy định rằng các đối tượng của lớp con phải có thể thay thế các đối tượng của lớp cha mà không làm thay đổi tính đúng đắn của chương trình.

Để giải thích LSP, hãy xem xét ví dụ sau trong JavaScript:

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function printArea(rectangle) {
  rectangle.setWidth(4);
  rectangle.setHeight(5);
  console.log(rectangle.area());
}

const rectangle = new Rectangle(3, 4);
const square = new Square(3, 3);

printArea(rectangle); // Kết quả: 20
printArea(square); // Kết quả: 25
```

Trong ví dụ này, chúng ta có hai lớp `Rectangle` và `Square`. Lớp `Square` là một lớp con của `Rectangle` và kế thừa các phương thức và thuộc tính từ `Rectangle`.

Tuy nhiên, khi chúng ta gọi phương thức `printArea` và truyền một đối tượng `Square` vào, kết quả in ra không đúng. Mặc dù `Square` kế thừa phương thức `area` từ `Rectangle`, nhưng nó đã vi phạm nguyên tắc LSP vì phương thức `setWidth` và `setHeight` trong `Square` không hoạt động như mong đợi.

Theo nguyên tắc LSP, lớp con (`Square`) nên có thể thay thế lớp cha (`Rectangle`) mà không làm thay đổi kết quả hoặc tính đúng đắn của chương trình. Trong trường hợp này, `Square` không thể thay thế `Rectangle` một cách đúng đắn vì nó thay đổi hành vi của các phương thức `setWidth` và `setHeight`.

Để tuân thủ LSP, chúng ta có thể sửa đổi cấu trúc của lớp hoặc thay đổi quan hệ kế thừa. Trong trường hợp này, chúng ta có thể tách riêng lớp `Rectangle` và `Square` mà không kế thừa từ nhau, hoặc sử dụng một cấu trúc khác để biểu diễn quan hệ giữa các hình chữ nhật và hình vuông.
