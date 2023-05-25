Pattern Command là một mẫu thiết kế phần mềm thuộc nhóm hành vi (behavioral design pattern) và được sử dụng để đóng gói các yêu cầu hoặc hành động vào một đối tượng riêng biệt, cho phép xác định, thực thi và hủy bỏ các yêu cầu một cách linh hoạt.

Trong JavaScript, mẫu Command thường được sử dụng để tạo ra một giao diện chung cho việc thực thi các hành động khác nhau và quản lý trạng thái của chúng. Dưới đây là một ví dụ mô tả mẫu Command bằng JavaScript:

```javascript
// Receiver
class Light {
  turnOn() {
    console.log('Light is on');
  }

  turnOff() {
    console.log('Light is off');
  }
}

// Command interface
class Command {
  execute() {}

  undo() {}
}

// Concrete command 1
class TurnOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }

  undo() {
    this.light.turnOff();
  }
}

// Concrete command 2
class TurnOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }

  undo() {
    this.light.turnOn();
  }
}

// Invoker
class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  executeCommand() {
    this.command.execute();
  }

  undoCommand() {
    this.command.undo();
  }
}

// Client
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.executeCommand(); // Turns the light on

remoteControl.setCommand(turnOffCommand);
remoteControl.executeCommand(); // Turns the light off

remoteControl.undoCommand(); // Reverts back to previous state (light on)
```

Trong ví dụ trên, chúng ta có một Receiver (Light) đại diện cho đối tượng mà chúng ta muốn thực hiện các hành động lên. Các Concrete Command (TurnOnCommand và TurnOffCommand) triển khai giao diện Command để thực thi các hành động tương ứng trên Receiver. Invoker (RemoteControl) nhận và gửi các lệnh để thực thi các Command tương ứng.

Khi Client sử dụng mẫu Command, nó không cần biết hoặc quan tâm đến cách thức thực hiện cụ thể của các hành động, mà chỉ cần tương tác với các đối tượng Command và Invoker. Điều này giúp tách biệt hành vi của Client và các hành động cụ thể, cung cấp sự linh hoạt trong việc thêm, sửa đổi và xóa các hành động mà không ảnh hưởng đ