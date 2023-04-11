
JavaScript là một ngôn ngữ lập trình hướng đối tượng (OOP), cho phép các lập trình viên sử dụng các tính chất của OOP để thiết kế và xây dựng các ứng dụng. Các tính chất của OOP trong JavaScript bao gồm:

Tính đóng gói (Encapsulation): Tính đóng gói là tính chất cho phép các thuộc tính và phương thức của đối tượng được bảo vệ và ẩn đi khỏi các đối tượng khác. Điều này giúp giảm thiểu sự phụ thuộc giữa các đối tượng và giúp quản lý mã nguồn dễ dàng hơn.

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get animalName() {
    return this.name;
  }

  set animalName(name) {
    this.name = name;
  }
}

let animal = new Animal('Dog', 3);
console.log(animal.animalName); // Output: Dog

animal.animalName = 'Cat';
console.log(animal.animalName); // Output: Cat
```

Tính kế thừa (Inheritance): Tính kế thừa cho phép các đối tượng con được xây dựng dựa trên các đối tượng cha. Điều này giúp tái sử dụng mã nguồn và tăng tính linh hoạt của ứng dụng.
Ví dụ:

```js
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking.`);
  }
}

let dog = new Dog('Max', 3, 'Labrador');
dog.eat(); // Output: Max is eating.
dog.bark(); // Output: Max is barking.
```

Tính đa hình (Polymorphism): Tính đa hình cho phép các đối tượng có thể có các hành vi khác nhau dựa trên các đối tượng cha của chúng. Điều này giúp tăng tính linh hoạt của ứng dụng

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

let animals = [new Dog('Max'), new Cat('Kitty')];

animals.forEach(animal => {
  animal.speak();
});
// Output: Max barks.
// Output: Kitty meows.
```

Tính trừu tượng (Abstraction): Tính trừu tượng trong OOP cho phép các lập trình viên ẩn các chi tiết cài đặt bên trong một đối tượng để giảm sự phức tạp và giúp các lập trình viên tập trung vào các tính năng của đối tượng.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

function makeAnimalSpeak(animal) {
  animal.speak();
}

let dog = new Dog('Max');
let cat = new Cat('Kitty');

makeAnimalSpeak(dog); // Output: Max barks.
makeAnimalSpeak(cat); // Output: Kitty meows.
```

Trong ví dụ này, hàm makeAnimalSpeak được sử dụng để kích hoạt phương thức speak của một đối tượng Animal. Bằng cách sử dụng tính trừu tượng, các lập trình viên có thể tập trung vào chức năng của phương thức speak thay vì phải quan tâm đến cài đặt bên trong của đối tượng