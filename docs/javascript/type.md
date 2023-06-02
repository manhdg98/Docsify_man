Trong JavaScript, các kiểu dữ liệu nguyên thủy bao gồm "number", "string", "boolean", "null" và "undefined". Bất kỳ thứ gì không phải là một kiểu dữ liệu nguyên thủy đều được coi là một đối tượng.

Kiểu dữ liệu tham chiếu trong JavaScript bao gồm các đối tượng (objects), mảng (arrays), hàm (functions) và các kiểu dữ liệu tùy chỉnh (custom types). Khi bạn khai báo và sử dụng một mảng trong JavaScript, nó sẽ được xem như là một đối tượng.

Thông thường, các biến và đối tượng JavaScript được lưu trữ trong bộ nhớ stack và heap. Biến thông thường (như số, chuỗi) được lưu trữ trên stack, trong khi đối tượng và mảng được lưu trữ trên heap.

Khi tạo một mảng, một vùng nhớ trên heap được cấp phát để lưu trữ các phần tử của mảng đó. Mỗi phần tử của mảng cũng được lưu trữ trong vùng nhớ heap riêng.

. Khi bạn gán một mảng cho một biến, biến đó chỉ tham chiếu đến vị trí bộ nhớ chứa mảng đó, chứ không lưu trữ trực tiếp giá trị của mảng. Điều này khác với kiểu dữ liệu nguyên thủy như số (number) hay chuỗi (string), khi giá trị thực sự của chúng được lưu trữ trong biến.