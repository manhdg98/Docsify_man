### Async

```js
promise.then((message) => {
  console.log(`Resolve with ${message}`);
})
```
Đẩy vào 1 callback function và chờ đợi kết quả khi promise được resolve

```js
const message = await promise
console.log(`Resolve with ${message}`)
```
Chờ đợi kết quả khi promise được resolve. Vì vậy mã sẽ bị chặn tại thười điểm này, nó sẽ ngồi im và đợi cho
promose được giải quyết xong, và mới lưu giá trị vào biến message. Nhưng điều này không có nghĩa là <b>toàn bộ chương trình Javascript sẽ dừng lại và chờ đợi, nó chỉ có nghĩa là phần cụ thể này của mã của bạn đúng chức năng cụ thể này sẽ chờ đợi</b>
