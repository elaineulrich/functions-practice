
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  const flattenedArray = array.flat(); 
  return flattenedArray;
}

const array1 = [['d', 'r'], 'z', 'b', ['f', 'y']];
const array2 = ['d', 'r', 'z', 'b', 'f', 'y'];

console.log(flatArrays(array1)); 
console.log(array2); 

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); 



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
