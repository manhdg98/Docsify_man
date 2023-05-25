Builder design pattern là một mẫu thiết kế sáng tạo (creational design pattern) nhằm cung cấp một cách linh hoạt để tạo ra các đối tượng phức tạp từ các thành phần đơn giản. Mẫu thiết kế này cho phép chúng ta xây dựng các đối tượng phức tạp theo các bước tuần tự mà không làm lộ các chi tiết về quá trình xây dựng.

Mẫu thiết kế Builder thường được sử dụng khi chúng ta muốn tạo ra các đối tượng có nhiều thuộc tính và các bước xây dựng phức tạp. Thay vì tạo ra một constructor với hàng loạt tham số, mẫu thiết kế Builder sử dụng một đối tượng Builder riêng biệt để xây dựng từng phần của đối tượng chính.

```js
class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name, { age, phone = '123-456-7890', address } = {}) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

let user = new User('Bob', { address: new Address('12345', 'Main St.') })
```


```js
class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name) {
    this.name = name
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name)
  }

  setAge(age) {
    this.user.age = age
    return this
  }

  setPhone(phone) {
    this.user.phone = phone
    return this
  }

  setAddress(address) {
    this.user.address = address
    return this
  }

  build() {
    return this.user
  }
}

const builder = new UserBuilder('Bob')
const user = builder.setAddress(new Address('12345', 'Main St.')).build()
```