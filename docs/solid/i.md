Interface Segregation Principle (ISP) là một nguyên tắc trong SOLID principles, nó quy định rằng một giao diện nên được thiết kế chỉ cho các khả năng mà các đối tượng cụ thể cần sử dụng, thay vì đưa ra một giao diện lớn chứa nhiều phương thức không cần thiết.

Để giải thích ISP trong JavaScript, hãy xem xét ví dụ sau:

```javascript
class Document {
  constructor(name) {
    this.name = name;
  }

  open() {
    console.log("Opening document:", this.name);
  }

  save() {
    console.log("Saving document:", this.name);
  }

  close() {
    console.log("Closing document:", this.name);
  }

  print() {
    console.log("Printing document:", this.name);
  }
}

class Printer {
  printDocument(document) {
    document.print();
  }
}

class Editor {
  openDocument(document) {
    document.open();
  }

  saveDocument(document) {
    document.save();
  }

  closeDocument(document) {
    document.close();
  }
}
```

Trong ví dụ này, chúng ta có một lớp `Document` đại diện cho một tài liệu, và nó có các phương thức `open`, `save`, `close` và `print`. Chúng ta cũng có hai lớp khác là `Printer` và `Editor`.

Lớp `Printer` có một phương thức `printDocument` nhận vào một đối tượng `Document` và gọi phương thức `print` trên đối tượng đó để in tài liệu.

Lớp `Editor` có các phương thức `openDocument`, `saveDocument` và `closeDocument` nhận vào một đối tượng `Document` và thực hiện các hoạt động mở, lưu và đóng tài liệu.

Trong ví dụ này, nguyên tắc ISP được áp dụng bằng cách chia tách giao diện `Document` thành các giao diện con. Thay vì có một giao diện lớn chứa tất cả các phương thức, chúng ta có thể tách riêng các khả năng của tài liệu thành các giao diện riêng biệt như `Printable` và `Editable`. 

Ví dụ:

```javascript
class PrintableDocument {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log("Printing document:", this.name);
  }
}

class EditableDocument {
  constructor(name) {
    this.name = name;
  }

  open() {
    console.log("Opening document:", this.name);
  }

  save() {
    console.log("Saving document:", this.name);
  }

  close() {
    console.log("Closing document:", this.name);
  }
}

class Printer {
  printDocument(document) {
    document.print();
  }
}

class Editor {
  openDocument(document) {
    document.open();
  }

  saveDocument(document) {
    document.save();
  }

  closeDocument(document) {
    document.close();
  }
}
```
