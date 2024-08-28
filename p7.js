/* Write a function to check if an array is empty. The function should take a single argument, which is the array.
function isArrayEmpty(arr) {
  return ...;
}

console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty([1, 2, 3])); // false */

function isArrayEmpty(arr) {
    return arr.length === 0; /*1.arr.length gives the number of elements in the array. 2.arr.length === 0 checks if the array is empty by comparing its length to 0. If it is, the function returns true; otherwise, it returns false. */
  }
  
  console.log(isArrayEmpty([])); 
  console.log(isArrayEmpty([1, 2, 3])); 
  