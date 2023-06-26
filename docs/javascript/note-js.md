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

### Global variable

The name of the global object changes based on the execution environment.In code executed by Node.js, global is used, but window or self may berequired in browsers

### Validate undefined

```js
a?.b ??  0
```

### This

#### This in Object

```js
let myObject = {
  greeting: "Hi, there",
  writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
  }
}

greeting = "Hello";
myObject.writeMessage("It is sunny today");
```

When the function is invoked via the object, the statement that invokes the
function is equivalent to using the call method with the object as the first
argument, like this:
```js
myObject.writeMessage.call(myObject, "It is sunny today");
```
#### Call
```javascript
let myObject = {
  greeting: "Hi, there",
  writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
  }
}

greeting = "Hello";
myObject.writeMessage("It is sunny today");

let myFunction = myObject.writeMessage;
myFunction("It is sunny today");
```

**Listing 3-39. Invoking a Function Outside of Its Object in the index.js File in the primer Folder**

Functions can be used like any other value, including assigning them to variables outside of the object in which they were defined, as shown in the listing. If the function is invoked through the variable, then `this` will be set to the global object. This often causes problems when functions are used as arguments to other methods or as callbacks to handle events, and the effect is that the same function will behave differently based on how it is invoked, as shown in the output produced by the code in Listing 3-39.

Output:
```
Hi, there, It is sunny today
Hello, It is sunny today
```
#### Bind 

```javascript
let myObject = {
  greeting: "Hi, there",
  writeMessage(message) {
    console.log(`${this.greeting}, ${message}`);
  }
};

myObject.writeMessage = myObject.writeMessage.bind(myObject);
greeting = "Hello";
myObject.writeMessage("It is sunny today");

let myFunction = myObject.writeMessage;
myFunction("It is sunny today");
```

**Listing 3-40. Setting the `this` Value in the index.js File in the primer Folder**

The `bind` method returns a new function that will have a persistent value for `this` when it is invoked. The function returned by the `bind` method is used to replace the original method, ensuring consistency when the `writeMessage` method is invoked.

Using `bind` is awkward because the reference to the object isn't available until after it has been created, which leads to a two-step process of creating the object and then calling `bind` to replace each of the methods for which a consistent `this` value is required.

The code in Listing 3-40 produces the following output:

```
Hi, there, It is sunny today
Hi, there, It is sunny today
```

### Strict mode

Strict mode (chế độ nghiêm ngặt) trong JavaScript là một chế độ được giới thiệu từ phiên bản ECMAScript 5 (ES5) để tắt hoặc bật một số tính năng không an toàn hoặc không khuyến khích của ngôn ngữ. Khi sử dụng strict mode, JavaScript sẽ thực thi mã theo một tập hợp các quy tắc nghiêm ngặt hơn, giúp phát hiện và ngăn chặn một số lỗi phổ biến.

Để bật strict mode trong một tệp JavaScript, bạn chỉ cần thêm đoạn khai báo sau ở đầu tệp:

```javascript
"use strict";
```

Sau khi bật strict mode, một số quy tắc được áp dụng:

1. Không thể sử dụng biến chưa khai báo: Bạn phải khai báo tất cả các biến trước khi sử dụng chúng. Nếu không, sẽ xảy ra lỗi.

```javascript
"use strict";
x = 10; // Lỗi: Biến x chưa được khai báo
```

2. Không thể gán giá trị cho các đối tượng chỉ đọc: Các đối tượng chỉ đọc như `undefined` hoặc `NaN` không thể được gán giá trị mới.

```javascript
"use strict";
undefined = 5; // Lỗi: Không thể gán giá trị cho undefined
```

3. Không thể sử dụng từ khóa `delete` với các biến hoặc các thuộc tính không thể xóa được.

```javascript
"use strict";
delete x; // Lỗi: Không thể xóa biến
```

4. Không thể sử dụng các tham số trùng lặp trong hàm.

```javascript
"use strict";
function foo(x, x) { // Lỗi: Tham số trùng lặp
  console.log(x);
}
```

5. Không thể sử dụng các từ khóa dự trữ như `eval`, `arguments` làm tên biến hoặc tên hàm.

```javascript
"use strict";
var eval = 10; // Lỗi: Không thể sử dụng eval làm tên biến
```

Strict mode giúp tăng cường tính an toàn và chính xác của mã JavaScript bằng cách phát hiện và báo lỗi cho các lỗi phổ biến. Nó cũng khuyến khích viết mã JavaScript sạch và dễ đọc hơn.
