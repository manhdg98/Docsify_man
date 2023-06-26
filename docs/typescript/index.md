### What is Typescript

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale

Created by Microsoft in the year 2012

#### Init

```shell
tsc --init
```

#### Watch

```shell
tsc -w
```

### Understanding Static Types

![Async && Sync](./img/type.PNG) 

#### Using Type Union:
```js
let taxNumber: string | number  = calculateTax(100,false);
```

#### Using Type Assertions
```js
let taxNumber = calculateTax(100, false) as number;

let taxNumber = <number> calculateTax(100, false);
```

#### Using a Type Guard
```js
typeof taxValue === "number"
```

#### Understanding the Never Type

Something has gone wrong if execution reaches the default clause of theswitch statement, and TypeScript provides the never type to ensure you can’taccidentally use a value once type guards have been used to exhaustively narrowa value to all of its possible types

```js
let taxValue = calculateTax(100, false);
switch (typeof taxValue) {
  case "number":
    console.log(`Number Value:
  ${taxValue.toFixed(2)}`);
    break;
  case "string":
    console.log(`String Value:
  ${taxValue.charAt(0)}`);
    break;
  default:
    let value: never = taxValue;
    console.log(`Unexpected type for value: ${value}`);
}
```

#### Using the unknown Type

```js
let newResult: unknown = calculateTax(200, false);
let myNumber: number = newResult;
console.log(`Number value: ${myNumber.toFixed(2)}`);
```

An unknown value can’t be assigned to another type without a typeassertion, so the compiler produces the following error when it compiles the code

```shell
src/index.ts(18,5): error TS2322: Type 'unknown' isnot assignable to type 'number'.
```

Instead
```js
let myNumber: number = newResult as number;
```
Unlike the earlier example, the unknown value is really a number, so thecode doesn’t generate a runtime error and produces the following output whenexecuted

#### Using Nullable Types

Under normal circumstances, the compiler will report an error if a value ofone type is assigned to a variable of a different type, but the compiler remainssilent because it allows null and undefined to be treated as values for alltypes

### Removing null from a Union with an Assertion

Using !
```js
let taxValue: string | number = calculateTax(100,false)!;
```

A non-null value is asserted by applying the ! character after the value, as illustrated by Figure 7-5. The assertion in the listing tells the compiler that the result from the calculateTax function will not be null, which allows it to be assigned to the taxValue variable, whose type is string | number.

### Function

![Async && Sync](./img/function.PNG) 

#### Using Optional Parameters

```js
function calculateTax(amount, discount?) {
    return (amount * 1.2) - (discount || 0);
}
let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
```

#### Using Default Parameters

```js
function calculateTax(amount, discount?) {
    return (amount * 1.2) - (discount || 0);
}
```

#### Using a Rest Parameter

A function can have one rest parameter only, and it must bethe last parameter

```js
function calculateTax(amount: number, discount: number = 0, ...extraFees: number[]): number {
    return (amount * 1.2) - discount + extraFees.reduce((total, val) => total + val, 0);
}
```

#### Defining Void Functions
Functions that do not produce results are declared using the void type
```js
function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}
writeValue("Tax value", calculateTax(100, 0));
```

#### Overloading Function Types

```js
function calculateTax(amount: number): number;
function calculateTax(amount: null): null;
function calculateTax(amount: number | null): number | null {
    if (amount != null) {
        return amount * 1.2;
    }
    return null;
}

```

### Understanding Assert Functions

```js
function check(expression: boolean) : asserts expression {
    if (!expression) {
        throw new Error("Expression is false");
    }
}
function calculateTax(amount: number | null): number {
    check(typeof amount == "number");
    return amount * 1.2;
}
let taxAmount: number = calculateTax(100);
console.log(`Tax value: ${taxAmount}`)
```

### Using Arrays, Tuples, and Enums

![Async && Sync](./img/number.PNG) 

#### Working with Arrays

Syntax
```js
let prices: number[] = [100, 75, 42];
let prices: Array<number> = [100, 75, 42];
```

```js
let prices: number[] = [100, 75, 42];
let names: string[] = ["Hat", "Gloves", "Umbrella"];
```

```js
function calculateTax(amount: number): number {
    return amount * 1.2;
}
function writePrice(product: string, price: number):
    void {
    console.log(`Price for ${product}:
    $${price.toFixed(2)}`);
}
let prices = [];
prices.push(...[100, 75, 42, "20"]);

let names = ["Hat","Gloves","Umbrella","Sunglasses"];
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
```

Trong đoạn mã bạn đã đưa ra, khi bạn gọi hàm calculateTax trong hàm writePrice, giá trị cuối cùng của mảng prices là một chuỗi được gán cho tham số price.

Trong TypeScript, khi bạn khai báo một mảng với kiểu dữ liệu cụ thể, như number[], TypeScript sẽ cố gắng kiểm tra và đảm bảo rằng các phần tử trong mảng đó đều có kiểu dữ liệu tương ứng. Tuy nhiên, trong trường hợp bạn sử dụng toán tử spread (...) để gán các phần tử vào mảng prices, TypeScript không thể áp dụng kiểm tra kiểu dữ liệu chi tiết cho các phần tử được gán vào mảng.

#### Working with Tuples

Basic tuples are fixed-length arrays, where each element in the array can have adifferent type. Tuples are a data structure that is provided by the TypeScriptcompiler implemented using regular JavaScript arrays in the compiled code

```js
let hat: [string, number] = ["Hat", 100];
```

#### Using Tuple Types

Tuples have a distinct type that can be used just like any type, which means youcan create arrays of tuples, use tuples in type unions, and use type guards tonarrow values to specific tuple types

```js
function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];
let products: [string, number][] = [
  ["Hat", 100],
  ["Gloves", 75]
];
let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];

tupleUnion.forEach((elem: [string, number] | boolean) => {
  if (elem instanceof Array) {
    let [str, num] = elem;
    console.log(`Name: ${str}`);
    console.log(`Price: ${num.toFixed(2)}`);
  } else if (typeof elem === "boolean") {
    console.log(`Boolean Value: ${elem}`);
  }
});
```

#### Using Tuples with Optional Elements

```js
let hat: [string, number, number?] = ["Hat", 100];
let gloves: [string, number, number?] = ["Gloves", 75,10];
```

#### Defining Tuples with Rest Elements

```js
let hat: [string, number, number?, ...number[]] =["Hat", 100, 10, 1.20, 3, 0.95];
```