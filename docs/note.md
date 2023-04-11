### Redis
Redis là một hệ thống cơ sở dữ liệu key-value được sử dụng để lưu trữ dữ liệu trong bộ nhớ và có thể sử dụng để lưu trữ các bản sao trên đĩa cứng hoặc SSD. Redis được sử dụng rộng rãi để lưu trữ và truy xuất dữ liệu theo cách nhanh chóng và hiệu quả, đặc biệt là khi cần xử lý các tác vụ có thời gian phản hồi thấp.

### Kafka
Kafka là một hệ thống xử lý dữ liệu phân tán, sử dụng mô hình publish-subscribe để gửi và nhận các thông điệp. Kafka có thể xử lý hàng triệu thông điệp mỗi giây, đồng thời cung cấp tính năng bảo đảm tin cậy và độ bền cao. Kafka được sử dụng rộng rãi để xử lý dữ liệu theo thời gian thực trong các ứng dụng lớn, chẳng hạn như xử lý dữ liệu trực tuyến, truyền thông và giao dịch.

### gRPC
gRPC là một giao thức truyền thông giữa các ứng dụng, cho phép chúng giao tiếp và truyền dữ liệu qua mạng. gRPC được thiết kế để hỗ trợ việc phát triển ứng dụng phân tán trên các nền tảng khác nhau. gRPC cung cấp một kiểu truyền dữ liệu hiệu quả hơn so với HTTP và REST, đặc biệt là khi truyền dữ liệu lớn hoặc truyền dữ liệu theo thời gian thực.

### TCP (Transmission Control Protocol)
TCP là một trong những giao thức truyền tải dữ liệu phổ biến nhất trong mạng máy tính. TCP đảm bảo rằng các dữ liệu được gửi và nhận đúng thứ tự, không bị mất, và không bị trùng lặp. TCP cũng đảm bảo rằng các thiết bị trên mạng được điều khiển và điều chỉnh theo cách phù hợp, giúp tăng tốc độ truyền tải dữ liệu và giảm độ trễ. TCP được sử dụng rộng rãi trong các ứng dụng truyền tải dữ liệu như trình duyệt web, email, và các ứng dụng đòi hỏi độ tin cậy cao.

### URI (Uniform Resource Identifier) 
URI là chuỗi ký tự dùng để xác định một tài nguyên trên mạng, bao gồm tên giao thức, tên miền, đường dẫn đến tài nguyên, và các thông tin khác. URI có thể là URL hoặc URN (Uniform Resource Name).

Ví dụ về URI:  
- URL: https://www.google.com/search?q=uri&oq=uri&aqs=chrome.0.69i59j0i131i433j0i433j69i60l2j0i131i433j0i131.1108j1j7&sourceid=chrome&ie=UTF-8
- URN: urn:isbn:0-13-123952-8

### URL (Uniform Resource Locator) 
URL là một loại URI, chứa thông tin địa chỉ để truy cập tài nguyên trên mạng, bao gồm tên giao thức, tên miền, đường dẫn đến tài nguyên, và các thông tin khác.

Ví dụ về URL:  
- https://www.facebook.com/
- https://www.youtube.com/watch?v=dQw4w9WgXcQ

Full URL:  
![URL](./_images/URL.PNG) 

### Hybrid App development
Phát triển ứng dụng Hybrid đề cập đến quá trình xây dựng các ứng dụng di động có thể chạy trên nhiều nền tảng như iOS và Android. Những ứng dụng này được phát triển bằng các công nghệ web như HTML, CSS và JavaScript sau đó được bao bọc trong một container native, cho phép chúng được triển khai trên nhiều nền tảng.
Ví dụ: Ứng dụng Starbucks là một ví dụ về ứng dụng Hybrid.

### Enterprise/Mission-critical application
Ứng dụng Enterprise/Mission-critical là các ứng dụng được phát triển để giải quyết các nhu cầu kinh doanh và được coi là quan trọng và cần thiết đối với hoạt động của doanh nghiệp.
Ví dụ: Hệ thống quản lý khách hàng (CRM) của Salesforce là một ví dụ về ứng dụng Enterprise/Mission-critical.

### Nginx
Nginx là một web server, được sử dụng để phục vụ các trang web tĩnh và động, các ứng dụng web và cân bằng tải.
Ví dụ: Trang web của Netflix được phục vụ bằng Nginx.

### CronJob
CronJob là một công cụ hệ thống được sử dụng để lên lịch thực thi các tác vụ định kỳ hoặc tự động.
Ví dụ: Một CronJob có thể được sử dụng để sao lưu cơ sở dữ liệu hàng ngày hoặc chạy các tác vụ định kỳ trên máy chủ.

### Memcached
Memcached là một hệ thống caching dữ liệu phân tán, được sử dụng để giảm thiểu thời gian truy vấn cơ sở dữ liệu và tăng tốc độ truy cập dữ liệu.
Ví dụ: Memcached có thể được sử dụng để lưu cache các kết quả tìm kiếm trên một trang web hoặc giữ các đối tượng được truy vấn thường xuyên trong bộ nhớ để giảm thiểu tải cho cơ sở dữ liệu.

(Nginx/CronJob/Mem-cached/Redis)