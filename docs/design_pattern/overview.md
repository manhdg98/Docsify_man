### (Creational Design Patterns):

Mô tả: Loại mẫu thiết kế này tập trung vào quá trình tạo ra các đối tượng. Chúng đảm bảo rằng việc tạo đối tượng được thực hiện một cách linh hoạt và không phụ thuộc vào các lớp cụ thể.

1. Factory Method Pattern (Mẫu Factory Method):
Factory Method Pattern cho phép chúng ta tạo ra các đối tượng mà không cần chỉ định rõ lớp cụ thể của đối tượng. Thay vào đó, nó định nghĩa một phương thức tạo đối tượng trong một lớp gốc và để các lớp con triển khai phương thức này để tạo ra đối tượng phù hợp.

2. Abstract Factory Pattern (Mẫu Abstract Factory):
Abstract Factory Pattern cung cấp một giao diện để tạo ra các họ đối tượng liên quan hoặc phụ thuộc lẫn nhau mà không cần chỉ định lớp cụ thể của chúng. Nó cho phép chúng ta tạo ra các đối tượng với tính tương thích và đồng nhất trong một họ.

3. Singleton Pattern (Mẫu Singleton):
Singleton Pattern đảm bảo rằng chỉ có một thể hiện (instance) duy nhất của một lớp được tạo ra và cung cấp một điểm truy cập toàn cầu để truy cập đến thể hiện đó. Điều này thường được sử dụng khi chỉ cần một thể hiện duy nhất của một đối tượng trong toàn bộ ứng dụng.

4. Builder Pattern (Mẫu Builder):
Builder Pattern cho phép chúng ta xây dựng các đối tượng phức tạp bước by bước. Nó giúp chúng ta tách biệt quá trình xây dựng đối tượng từ cấu trúc của nó, cho phép cùng một quy trình xây dựng tạo ra các biểu diễn khác nhau của đối tượng.

5. Prototype Pattern (Mẫu Prototype):
Prototype Pattern cho phép chúng ta tạo ra các đối tượng mới bằng cách sao chép các đối tượng đã tồn tại. Thay vì tạo mới từ đầu, chúng ta tạo ra một bản sao của đối tượng hiện có và chỉ cần thay đổi những phần cần thiết.

6. Object Pool Pattern (Mẫu Object Pool):
Object Pool Pattern duy trì một nhóm các đối tượng sẵn có để sử dụng lại thay vì tạo mới khi cần. Điều này giúp giảm độ trễ do việc tạo và hủy đối tượng. Khi một đối tượng cần được sử dụng, nó được lấy từ pool và khi không cần nữa, nó được trả lại cho pool để sử dụng lại.

7. Lazy Initialization Pattern (Mẫu Lazy Initialization):
Lazy Initialization Pattern được sử dụng để trì hoãn việc khởi tạo một đối tượng cho đến khi nó thực sự được sử dụng. Điều này giúp tối ưu hóa hiệu suất và tiết kiệm tài nguyên. Đối tượng chỉ được khởi tạo khi có yêu cầu và lưu trữ để sử dụng lại trong các lần sau.

8. Dependency Injection Pattern (Mẫu Dependency Injection):
Dependency Injection Pattern giảm sự phụ thuộc giữa các đối tượng bằng cách chuyển giao việc cung cấp các đối tượng phụ thuộc từ bên ngoài. Thay vì các đối tượng tự tạo và quản lý các đối tượng phụ thuộc của mình, chúng được cung cấp từ bên ngoài, làm cho các đối tượng trở nên độc lập và có thể tái sử dụng dễ dàng.

9. Object-Relational Mapping (ORM) Pattern (Mẫu Object-Relational Mapping):
ORM Pattern cung cấp một cách để ánh xạ giữa các đối tượng trong mã nguồn và cơ sở dữ liệu quan hệ. Nó giúp giảm sự phức tạp và thao tác trực tiếp với cơ sở dữ liệu, cho phép thao tác với dữ liệu thông qua các đối tượng đã được định nghĩa trước.

### (Structural Design Patterns):

Mô tả: Loại mẫu thiết kế này tập trung vào cách các đối tượng được kết nối và tương tác với nhau để tạo thành các cấu trúc lớn hơn.

1. Adapter Pattern (Mẫu Adapter):
Adapter Pattern cho phép các đối tượng có các giao diện không tương thích hoạt động cùng nhau bằng cách đóng gói giao diện không tương thích vào một lớp trung gian (adapter). Lớp adapter sẽ chuyển đổi giao diện của một đối tượng thành một giao diện khác mà các đối tượng khác có thể sử dụng.

2. Bridge Pattern (Mẫu Bridge):
Bridge Pattern tách rời một abstraction (trừu tượng) từ implementation (thực hiện) để hai thành phần có thể thay đổi độc lập nhau. Nó giúp tránh việc gắn kết chặt chẽ giữa abstraction và implementation, cho phép chúng được phát triển và mở rộng riêng biệt.

3. Composite Pattern (Mẫu Composite):
Composite Pattern cho phép chúng ta xây dựng các cây đối tượng phân cấp theo cấu trúc phân cấp dạng cây. Nó định nghĩa một giao diện chung cho các đối tượng đơn lẻ và các đối tượng tổng hợp, cho phép chúng được sử dụng một cách đồng nhất.

4. Decorator Pattern (Mẫu Decorator):
Decorator Pattern cho phép chúng ta thêm chức năng mới cho một đối tượng mà không làm thay đổi cấu trúc ban đầu của đối tượng. Nó sử dụng việc bọc một đối tượng bên ngoài bằng các lớp decorator để mở rộng chức năng của đối tượng gốc.

5. Facade Pattern (Mẫu Facade):
Facade Pattern cung cấp một giao diện đơn giản và thân thiện để truy cập vào một hệ thống phức tạp bên dưới. Nó cung cấp một lớp giao diện cao cấp để che giấu sự phức tạp và tương tác với các thành phần bên trong.

6. Flyweight Pattern (Mẫu Flyweight):
Flyweight Pattern giúp giảm sự lặp lại của dữ liệu trong hệ thống bằng cách chia sẻ các đối tượng giống nhau giữa nhiều đối tượng. Nó giúp giảm bộ nhớ sử dụng bằng cách lưu trữ các thông tin chung trong một đối tượng flyweight và sử dụng lại chúng trong các đối tượng khác. Điều này đặc biệt hữu ích khi có nhiều đối tượng cần lưu trữ cùng một thông tin.

7. Proxy Pattern (Mẫu Proxy):
Proxy Pattern cung cấp một đại diện (proxy) cho một đối tượng khác để kiểm soát quyền truy cập và thực hiện các hành động bổ sung. Đối tượng proxy đóng vai trò như một lớp trung gian, cho phép kiểm soát truy cập vào đối tượng thật và thực hiện các hành động trước hoặc sau khi gọi phương thức của đối tượng thật.

8. Composite Pattern (Mẫu Composite):
Composite Pattern cho phép chúng ta xây dựng các cây đối tượng phân cấp theo cấu trúc phân cấp dạng cây. Nó định nghĩa một giao diện chung cho các đối tượng đơn lẻ và các đối tượng tổng hợp, cho phép chúng được sử dụng một cách đồng nhất. Các đối tượng tổng hợp có thể chứa các đối tượng con và cũng có thể là một phần của một đối tượng tổng hợp khác.

6. Proxy Pattern (Mẫu Proxy):
Proxy Pattern cung cấp một đại diện (proxy) cho một đối tượng khác để kiểm soát quyền truy cập và thực hiện các hành động bổ sung. Đối tượng proxy đóng vai trò như một lớp trung gian, cho phép kiểm soát truy cập vào đối tượng thật và thực hiện các hành động trước hoặc sau khi gọi phương thức của đối tượng thật.

10. Facade Pattern (Mẫu Facade):
Facade Pattern cung cấp một giao diện đơn giản và thân thiện để truy cập vào một hệ thống phức tạp bên dưới. Nó cung cấp một lớp giao diện cao cấp để che giấu sự phức tạp và tương tác với các thành phần bên trong. Facade Pattern giúp giảm sự phụ thuộc và tăng tính module hóa trong hệ thống

### (Behavioral Design Patterns):

Mô tả: Loại mẫu thiết kế này tập trung vào cách các đối tượng và lớp tương tác và phân chia trách nhiệm giữa chúng.

1. Observer Pattern (Mẫu Observer):
Observer Pattern xác định một mối quan hệ "one-to-many" giữa các đối tượng, trong đó khi một đối tượng thay đổi trạng thái, tất cả các đối tượng liên quan sẽ được thông báo và cập nhật tự động. Điều này giúp đảm bảo sự đồng bộ hóa và phản hồi giữa các đối tượng trong hệ thống.

2. Iterator Pattern (Mẫu Iterator):
Iterator Pattern cung cấp một cách duyệt qua các phần tử của một tập hợp mà không tiết lộ cấu trúc nội bộ của nó. Nó định nghĩa một giao diện chung để truy cập tuần tự các phần tử của một tập hợp và cung cấp các phương thức để lấy phần tử tiếp theo và kiểm tra xem còn phần tử hay không.

3. Strategy Pattern (Mẫu Strategy):
Strategy Pattern cho phép chúng ta định nghĩa một tập hợp các thuật toán (strategy) khác nhau và tách rời chúng từ các đối tượng sử dụng chúng. Điều này cho phép thay đổi thuật toán mà không làm thay đổi cấu trúc của đối tượng và giúp đảm bảo tính linh hoạt và mở rộng của hệ thống.

4. Chain of Responsibility Pattern (Mẫu Chain of Responsibility):
Chain of Responsibility Pattern xây dựng một chuỗi các đối tượng xử lý (handler) và truyền yêu cầu từ đầu chuỗi đến cuối chuỗi cho đến khi tìm được đối tượng xử lý thích hợp. Mỗi đối tượng xử lý trong chuỗi có thể xử lý yêu cầu hoặc chuyển tiếp nó cho đối tượng tiếp theo trong chuỗi.

5. Command Pattern (Mẫu Command):
Command Pattern chuyển đổi yêu cầu thành một đối tượng độc lập, cho phép chúng ta đóng gói yêu cầu và tham số liên quan vào một đối tượng command.
