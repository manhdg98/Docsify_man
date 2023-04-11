### Bài toán 1: Xoắn ốc
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

```note
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
```
Giải quyết bằng javascript

```js
function snail(array) {
  let result = [];

  while (array.length) {
    // lấy các phần tử của hàng đầu tiên và thêm vào kết quả
    result = result.concat(array.shift());

    // lấy các phần tử của cột cuối cùng và thêm vào kết quả
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // lấy các phần tử của hàng cuối cùng theo thứ tự ngược lại và thêm vào kết quả
    if (array.length) {
      result = result.concat(array.pop().reverse());
    }

    // lấy các phần tử của cột đầu tiên theo thứ tự ngược lại và thêm vào kết quả
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].length) {
        result.push(array[i].shift());
      }
    }
  }

  return result;
}


snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
```

### Bài toán 2: Thuật toán KMP tìm chuỗi trong chuỗi nhanh nhất
### Bài toán 3: 
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:
```js
 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
```

Solution

```js
Array.prototype.sameStructureAs = function(other) {
  // check if both arguments are arrays
  if (!Array.isArray(this) || !Array.isArray(other)) {
    return false;
  }

  // check if the length of both arrays is the same
  if (this.length !== other.length) {
    return false;
  }

  // iterate over the elements of the first array and their corresponding elements in the second array
  for (let i = 0; i < this.length; i++) {
    // if the element in the first array is an array and the corresponding element in the second array is not an array, or vice versa, return false
    if (Array.isArray(this[i]) !== Array.isArray(other[i])) {
      return false;
    }
    // if the element in the first array is an array, recursively call the sameStructureAs method on the two nested arrays
    if (Array.isArray(this[i]) && !this[i].sameStructureAs(other[i])) {
      return false;
    }
  }

  // if all elements have been checked and no mismatches have been found, return true
  return true;
};
```