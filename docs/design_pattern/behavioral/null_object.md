Null Object (Null Object design pattern) là một mẫu thiết kế hành vi (behavioral design pattern) nhằm cung cấp một giải pháp thay thế cho việc sử dụng tham chiếu null trong ngôn ngữ lập trình hướng đối tượng. Khi một tham chiếu đối tượng là null, điều này có nghĩa là tham chiếu không trỏ tới bất kỳ đối tượng nào. Việc này có thể dẫn đến các ngoại lệ liên quan tới tham chiếu null và làm mã nguồn dễ gặp lỗi.

Mẫu thiết kế Null Object giải quyết vấn đề này bằng cách giới thiệu một đối tượng null (null object) có cùng giao diện với các đối tượng thực tế, nhưng cung cấp các triển khai mặc định hoặc không thực hiện thực tế của các phương thức. Thay vì trả về null khi một đối tượng không khả dụng, mẫu thiết kế Null Object trả về đối tượng null. Điều này cho phép mã nguồn của khách hàng (client code) tiếp tục gọi các phương thức trên đối tượng mà không cần quan tâm đến tham chiếu null và nguy cơ xảy ra ngoại lệ null pointer.

Ý tưởng chính sau mẫu thiết kế Null Object là đóng gói xử lý tham chiếu null bên trong đối tượng. Đối tượng null hoạt động như một thay thế cho đối tượng thực tế, cung cấp hành vi an toàn và minh bạch trong khi ẩn logic xử lý null khỏi mã nguồn của khách hàng.


```js
class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    hasAccess() {
        return this.name === 'Bob'
    }
}

class NullUser {
    constructor() {
        this.id = -1;
        this.name = 'Guest';
    }

    hasAccess() {
        return false;
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'John')
]

function getUser(id) {
    const user = users.find(user => user.id === id);

    if (user == null) {
        return new NullUser()
    }

    return user;
}

function printUser(id) {
    const user = getUser(id)

    /*
      We need to explicitly tell the console.log to print `Guest` if the user does not have a name
  
      This is problematic since we need to remember to always put this every time we use the users name
  
      It is also bad because if we want to print `Unknown User` instead, we would need to change every place that we put `Guest` which will most likely be all over the application
    */
    console.log('Hello ' + user.name)

    /*
      This will throw an error if we don't first check that the user object has this function available and isn't null.
    
      This is a lot of extra code to add in every time we want to check user access, and could cause bugs that are easy to miss if we forget to do the null checks.
    */
    if (user != null && user.hasAccess != null && user.hasAccess()) {
        console.log('You have access', name)
    } else {
        console.log('You are not allowed here', name)
    }
}

users.push(new User(3, "manh"))
users.push(new User(4))
console.log(getUser(6)) // NullUser { id: -1, name: 'Guest' }
```