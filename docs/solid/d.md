Dependency Inversion Principle (DIP) quy định rằng các module cấp cao không nên phụ thuộc vào các module cấp thấp trực tiếp, mà cả hai nên phụ thuộc vào một abstraction. Ngoài ra, abstraction không nên phụ thuộc vào chi tiết, mà chi tiết nên phụ thuộc vào abstraction. Nguyên tắc này thúc đẩy việc sử dụng interfaces hoặc abstract classes để tạo một lớp trung gian giữa các module.

Để giải thích DIP trong JavaScript, hãy xem xét ví dụ sau:

```javascript
class UserService {
  constructor(database) {
    this.database = database;
  }

  getUser(id) {
    return this.database.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}

class MySQLDatabase {
  query(sql) {
    // Logic thực hiện truy vấn với MySQL database
    console.log("Executing query:", sql);
    // Giả sử trả về kết quả truy vấn
    return { id: 1, name: "John Doe" };
  }
}

const mysqlDatabase = new MySQLDatabase();
const userService = new UserService(mysqlDatabase);

const user = userService.getUser(1);
console.log("User:", user);
```

Trong ví dụ này, chúng ta có một lớp `UserService` đại diện cho một dịch vụ xử lý người dùng. Nó phụ thuộc trực tiếp vào lớp `MySQLDatabase` để thực hiện các truy vấn cơ sở dữ liệu.

Để tuân thủ nguyên tắc DIP, chúng ta có thể tạo một abstraction là `Database` để tạo một lớp trung gian giữa `UserService` và `MySQLDatabase`.

Ví dụ:

```javascript
class UserService {
  constructor(database) {
    this.database = database;
  }

  getUser(id) {
    return this.database.query(`SELECT * FROM users WHERE id = ${id}`);
  }
}

class Database {
  query(sql) {
    throw new Error("This method should be implemented by subclasses.");
  }
}

class MySQLDatabase extends Database {
  query(sql) {
    // Logic thực hiện truy vấn với MySQL database
    console.log("Executing query:", sql);
    // Giả sử trả về kết quả truy vấn
    return { id: 1, name: "John Doe" };
  }
}

const mysqlDatabase = new MySQLDatabase();
const userService = new UserService(mysqlDatabase);

const user = userService.getUser(1);
console.log("User:", user);
```

Trong ví dụ này, chúng ta đã tạo một abstraction là `Database` định nghĩa phương thức `query`. Lớp `MySQLDatabase` kế thừa từ `Database` và triển khai phương thức `query` theo cách riêng của nó.

Khi chúng ta khởi tạo đối tượng `UserService`, chúng ta truyền một đối tượng `MySQLDatabase` vào. Nhưng thay vì `UserService` phụ thuộc trực tiếp vào `MySQLDatabase, nó phụ thuộc vào abstraction là Database. Điều này cho phép chúng ta linh hoạt thay đổi cơ sở dữ liệu mà không cần thay đổi mã nguồn của UserService. Ví dụ, nếu chúng ta muốn chuyển từ MySQL sang MongoDB, chúng ta chỉ cần tạo một lớp MongoDBDatabase mới kế thừa từ Database và triển khai phương thức query cho MongoDB.

Nguyên tắc DIP giúp giảm sự phụ thuộc giữa các module và tạo ra sự linh hoạt và dễ dàng mở rộng trong thiết kế. Nó cũng giúp chúng ta dễ dàng thay đổi và kiểm thử các thành phần riêng lẻ mà không làm ảnh hưởng đến các thành phần khác trong hệ thống.