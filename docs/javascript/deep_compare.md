1. Deep compare Array

```js
function deepCompareArrays(arr1, arr2) {
  // If the arrays have different lengths, they are not equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  // Loop through the elements of the arrays
  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];
    
    // If the current element is an array, compare it recursively
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!deepCompareArrays(val1, val2)) {
        return false;
      }
    }
    
    // If the current element is not an array, compare it using the strict equality operator
    else if (val1 !== val2) {
      return false;
    }
  }
  
  // If all the elements are equal, the arrays are equal
  return true;
}
```

Write UT using Parameterize
```js
const { deepCompareArrays } = require('./utils'); // import hàm deepCompareArrays từ file utils.js

describe('deepCompareArrays', () => {
  const testCases = [
    { arr1: [], arr2: [], expected: true },
    { arr1: [1, 2, 3], arr2: [1, 2], expected: false },
    { arr1: [1, 2, 3], arr2: [1, 2, 4], expected: false },
    { arr1: [[1, 2], [3, 4]], arr2: [[1, 2], [3, 4]], expected: true },
    { arr1: [[1, 2], [3, 4]], arr2: [[1, 2], [3, 5]], expected: false },
  ];

  test.each(testCases)(
    'deepCompareArrays(%p, %p) should return %p',
    ({ arr1, arr2, expected }) => {
      expect(deepCompareArrays(arr1, arr2)).toBe(expected);
    },
  );
});
```

2. Deep compare Object

```js
function deepCompare(obj1, obj2) {
  // Kiểm tra xem cả hai đối tượng đều là đối tượng hoặc không
  if (typeof obj1 == 'object' && typeof obj2 == 'object') {
    // Kiểm tra số lượng thuộc tính của hai đối tượng
    if (Object.keys(obj1).length != Object.keys(obj2).length) {
      return false;
    }
    // Kiểm tra từng thuộc tính của hai đối tượng
    for (let prop in obj1) {
      if (!deepCompare(obj1[prop], obj2[prop])) {
        return false;
      }
    }
    return true;
  } else {
    // Nếu không phải đối tượng thì so sánh bằng toán tử '==='
    return obj1 === obj2;
  }
}
```