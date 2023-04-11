React sử dụng Virtual DOM (DOM ảo) để quản lý và cập nhật các thay đổi trên giao diện người dùng. Khi một thành phần (component) trong React được cập nhật, React sẽ tạo ra một Virtual DOM mới, so sánh với Virtual DOM cũ để xác định các thay đổi cần được áp dụng, sau đó chỉ áp dụng các thay đổi đó lên DOM thật (DOM thực).

Quá trình này được gọi là Reconciliation (Đối chiếu), và giúp React cập nhật giao diện người dùng một cách hiệu quả hơn so với việc thao tác trực tiếp trên DOM thật. Bởi vì DOM là một phần quan trọng của trang web, việc thao tác trực tiếp trên DOM thật có thể gây ra hiệu suất thấp và ảnh hưởng đến trải nghiệm người dùng.

Vì vậy, React không cập nhật trực tiếp trên DOM thật, mà thay vào đó sử dụng Virtual DOM để quản lý và cập nhật các thay đổi trên giao diện người dùng.