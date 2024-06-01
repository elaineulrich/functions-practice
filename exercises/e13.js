
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]


import { bankAccounts, bankAccountsNoPositiveBalance } from "../data/data.js";

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  const result = [];

  for (const account of array) {
    let sumOfDeposits = 0;

    // Check if deposits property exists and is truthy
    if (account.deposits && typeof account.deposits === 'object' && account.deposits !== null) {
      // Ensure deposits is an object and not null
      // Iterate through deposits if it's an array
      if (Object.prototype.toString.call(account.deposits) === '[object Array]') {
        for (const deposit of account.deposits) {
          sumOfDeposits += deposit;
        }
      }
    }

    if (sumOfDeposits < 2000) {
      result.push(account);
    } else if (!account.deposits || !(typeof account.deposits === 'object' && account.deposits !== null)) {
      result.push(account);
    }
  }

  return result;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
