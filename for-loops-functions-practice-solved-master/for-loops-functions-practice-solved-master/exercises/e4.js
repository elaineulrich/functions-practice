// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  if (array.length === 0) {
    return undefined; 
  }

  let minValue = array[0]; 
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }

  return minValue;
}

const number = [2, 45, 32, 3, 0, 46, 12];
console.log(findMinValueInArray(number)); 


export function findMaxValueInArray(array) {
  if (array.length === 0) {
    return undefined; 
  }

  let maxValue = array[0]; 
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  return maxValue;
}

console.log(findMaxValueInArray(number)); 



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
