# Các thông số Non-Functional BA cần biết

Trong bất kỳ hệ thống nào, chỉ cần bỏ qua một tham số kỹ thuật cũng có thể khiến trải nghiệm người dùng bị gãy. Non-Functional Requirements (NFR) không phải phần "dành cho dev lo sau", mà là xương sống giúp hệ thống chịu được áp lực thực tế: người dùng đông, lỗi mạng, xử lý chậm hay cần bảo vệ dữ liệu.

Dưới đây là sáu nhóm thông số mà BA nào cũng nên nắm rõ.

## 1. Timeout – Giới hạn thời gian chờ tối đa cho một yêu cầu
Khi hệ thống gọi tới dịch vụ khác nhưng không nhận được phản hồi, đến thời điểm nào hệ thống nên ngừng chờ và coi là lỗi? Nếu không xác định timeout rõ ràng, hệ thống có thể bị treo, giao diện đứng hoặc khoá tài nguyên backend.

* Gợi ý tham khảo: <3 giây cho thao tác đơn, 10–15 giây cho xử lý lô hoặc cần xác thực chéo.
* Không đặt timeout = hệ thống đứng chờ vô hạn, người dùng không rõ trạng thái và dễ thao tác lại gây mất dữ liệu.

## 2. Latency – Độ trễ từ khi gửi yêu cầu đến khi nhận phản hồi
Ví dụ người dùng nhấn "Xác nhận" và thấy phản hồi sau 3 giây – liệu ổn hay chậm? Latency ảnh hưởng trực tiếp đến cảm giác mượt của ứng dụng.

* Ứng dụng cần phản hồi nhanh (đặt hàng, xác thực mã, thanh toán...) nên giữ latency <1 giây.
* Giao diện thông tin có thể chấp nhận 2–3 giây.
* Không phân loại rõ dịch vụ cần real-time sẽ khiến hệ thống phản hồi chậm mà vẫn "hợp lệ", tạo ra bực bội cho người dùng.

## 3. Retry – Cơ chế thử lại nếu request thất bại
Giao tiếp mạng luôn có xác suất lỗi: mất mạng, nghẽn server hoặc lỗi tạm thời. Retry giúp giảm lỗi giả nhưng cần cấu hình cẩn thận.

* Giới hạn 2–3 lần, cách nhau 2–5 giây.
* Chỉ áp dụng với thao tác idempotent (gọi lại không gây tác dụng phụ).
* Không có retry: chỉ cần lỗi một lần là yêu cầu mất. Retry quá nhiều: hệ thống quá tải. Retry sai logic: trùng giao dịch (đơn hàng, email, trừ tiền...).

## 4. Security Requirements – Yêu cầu bảo mật
"Hệ thống phải đảm bảo an toàn thông tin" là chưa đủ. Cần làm rõ:

* **Authentication**: hình thức xác thực (username/password, OTP, SSO, vân tay...). Nếu dùng OTP thì thời hạn bao lâu, giới hạn gửi lại?
* **Authorization**: người dùng có phân quyền không, có kiểm tra vai trò trước khi hiển thị nút hay thao tác?
* **Encryption**: dữ liệu lưu trữ và truyền tải có mã hoá không, dùng thuật toán nào (AES256, SHA256...)?
* **Audit & Logging**: hành động nào cần ghi log, log lưu bao lâu, có chức năng xem lịch sử thao tác không?

Thiếu các yêu cầu này có thể dẫn đến lộ thông tin, thao túng quyền, khó truy vết lỗi hoặc vi phạm tiêu chuẩn bảo mật.

## 5. CCU – Concurrent Users
Số người dùng đăng ký có thể lớn nhưng số người dùng đồng thời (CCU) mới quyết định khả năng chịu tải.

* Cần xác định thời điểm peak time, tình huống đột biến truy cập và có giới hạn session login không.
* Không ước lượng CCU khiến dev và hạ tầng đánh giá thấp tải, dễ dẫn đến vỡ trận, timeout hàng loạt hoặc bị chặn kết nối.

## 6. TPS – Transactions Per Second
TPS đo số giao dịch hệ thống xử lý mỗi giây, khác với CCU.

* Ví dụ hệ thống thanh toán online cần 100–200 TPS vào giờ cao điểm; hệ thống báo cáo nội bộ chỉ cần 5–10 TPS.
* Không nắm TPS sẽ không thể kiểm thử hiệu năng đúng và không biết hệ thống "nghẽn cổ chai" ở đâu.

## Kết luận
Non-Functional không phải "để sau rồi tính". Chúng ảnh hưởng đến cảm giác người dùng, sự ổn định, bảo mật và chi phí vận hành.

### Checklist nhanh dành cho BA
- Timeout của từng request là bao nhiêu?
- Latency cho phép ở mức nào? Có cần real-time không?
- Retry có được bật không, bao nhiêu lần và logic ra sao?
- Hệ thống có những yêu cầu bảo mật nào bắt buộc?
- Dự kiến số user đồng thời (CCU) là bao nhiêu?
- Hệ thống cần xử lý bao nhiêu giao dịch mỗi giây (TPS)?

