Mẫu thiết kế Iterator là một mẫu thiết kế hành vi (behavioral design pattern) trong đó nó cung cấp một cách truy cập tuần tự và duyệt qua các phần tử của một tập hợp mà không tiết lộ bất kỳ chi tiết cấu trúc nội bộ nào của tập hợp đó. Iterator cho phép lặp qua các phần tử của một tập hợp mà không phụ thuộc vào cấu trúc bên trong của nó.

Dưới đây là một ví dụ về cách triển khai mẫu Iterator bằng JavaScript:

```javascript
class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    return this.collection[this.index++];
  }
}

// Sử dụng Iterator
const collection = [1, 2, 3, 4, 5];
const iterator = new Iterator(collection);

while (iterator.hasNext()) {
  const element = iterator.next();
  console.log(element);
}
```

Trong ví dụ này, lớp Iterator có hai phương thức chính là `hasNext` và `next`. Phương thức `hasNext` kiểm tra xem có phần tử tiếp theo trong tập hợp hay không. Phương thức `next` trả về phần tử tiếp theo trong tập hợp và di chuyển con trỏ đến phần tử kế tiếp.

Khi sử dụng Iterator, chúng ta tạo một thể hiện của nó với một tập hợp cần được lặp qua. Trong ví dụ trên, chúng ta tạo một Iterator với một mảng `collection`. Sau đó, chúng ta sử dụng vòng lặp while và gọi `hasNext` để kiểm tra xem còn phần tử tiếp theo hay không. Sau đó, chúng ta gọi `next` để lấy phần tử tiếp theo và xử lý nó.

Ví dụ trên sẽ lặp qua các phần tử của mảng `[1, 2, 3, 4, 5]` và in ra màn hình. Mẫu thiết kế Iterator cho phép chúng ta lặp qua các phần tử của một tập hợp mà không cần biết cấu trúc bên trong của tập hợp đó, đảm bảo tính linh hoạt và tách biệt giữa việc lặp qua và cấu trúc dữ liệu cụ thể.