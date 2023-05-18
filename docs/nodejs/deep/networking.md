Cũ phải dùng đĩa CD để copy
![High level coding](./img/cd-copy.PNG)
Sử dụng switch card mạng
![High level coding](./img/switch_network.PNG)
Mỗi 1 chỗ cắm tương ứng với 1 địa chỉ network của 1 máy
![High level coding](./img/switch.PNG)

### Wireshark
Wireshark là một công cụ phân tích mạng và ghi lại lưu lượng giao thông (traffic) trong mạng. Nó là một phần mềm mã nguồn mở và được sử dụng phổ biến trong lĩnh vực mạng máy tính.

Wireshark cho phép người dùng xem và phân tích các gói tin (packets) đi qua mạng, giúp hiểu rõ về hoạt động và vấn đề mạng. Với khả năng theo dõi và ghi lại lưu lượng mạng, Wireshark cung cấp cho người dùng khả năng kiểm tra và phân tích các giao thức mạng như TCP/IP, UDP, DNS, HTTP, và nhiều giao thức khác.

Wireshark cung cấp giao diện đồ họa cho phép người dùng dễ dàng xem các gói tin mạng theo thời gian thực hoặc từ các tệp tin đã được ghi lại trước đó. Nó cho phép người dùng lọc và tìm kiếm các gói tin theo nhiều tiêu chí như địa chỉ IP, cổng, giao thức, từ khóa và các thông tin khác.

Wireshark không chỉ là công cụ hữu ích trong việc gỡ lỗi và khắc phục sự cố mạng, mà còn được sử dụng để kiểm tra hiệu suất mạng, phân tích bảo mật, và nghiên cứu về giao thức mạng.

![High level coding](./img/wireshark.PNG)

### TCP & UDP & Port Number

#### TCP

TCP là một giao thức truyền tải dựa trên kết nối trong mạng máy tính. Nó cung cấp một kênh truyền tin cậy, đảm bảo dữ liệu được chuyển giao một cách chính xác và đúng thứ tự từ nguồn đến đích.

TCP sử dụng các khung (segments) để chia dữ liệu thành các đơn vị nhỏ hơn, gửi chúng qua mạng và xác nhận việc nhận dữ liệu. Nó hỗ trợ kiểm soát lỗi, điều chỉnh luồng dữ liệu và tái thiết lập kết nối trong trường hợp mất mát dữ liệu.

TCP đảm bảo tính toàn vẹn và độ tin cậy của dữ liệu, thích hợp cho các ứng dụng yêu cầu truyền tải dữ liệu chính xác như trình duyệt web, gửi email, tải tập tin, và các ứng dụng cần đồng bộ hóa dữ liệu.

#### UDP

UDP là một giao thức truyền tải dữ liệu không đáng tin cậy trong mạng máy tính. Nó cung cấp một phương thức truyền gói tin nhanh và đơn giản mà không đảm bảo tính toàn vẹn và đúng thứ tự của dữ liệu.

UDP không thực hiện kiểm soát lỗi, điều chỉnh luồng dữ liệu hoặc tái thiết lập kết nối. Gói tin được gửi đi mà không có quá trình xác nhận hoặc kiểm tra lỗi.

UDP thích hợp cho các ứng dụng yêu cầu truyền tải nhanh chóng như streaming media, video chat, game trực tuyến, nơi mất mát dữ liệu có thể được chấp nhận để đạt được tốc độ cao và phản hồi thời gian thực.

#### Port Number
Port numbers are assigned in various ways, based on three ranges: System
Ports (0-1023), User Ports (1024-49151), and the Dynamic and/or Private
Ports (49152-65535)

Ở 1 số hệ thống k thể chạy các port từ 0-1023, nếu bắt buộc phải chạy ứng dụng trên cấc PORT này thì cần chạy với sudo


