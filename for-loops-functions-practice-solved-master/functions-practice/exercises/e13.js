
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]


import { bankAccounts, bankAccountsNoPositiveBalance } from "../data/data.js";

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  const result = [];

  for (const account of array) {
    // Check if the account has a 'deposits' property and it is an array
    if (account.deposits && Array.isArray(account.deposits)) {
      // Calculate the sum of deposits using reduce
      const sumOfDeposits = account.deposits.reduce((acc, deposit) => acc + deposit, 0);

      // Check if the sum of deposits is less than 2000
      if (sumOfDeposits < 2000) {
        result.push(account);
      }
    } else {
      // If the account has no deposits, add it to the result
      result.push(account);
    }
  }

  return result;
}

const accountsWithSumsOfDepositsLess2000 = getAllAccountsWithSumsOfDepositsLess2000(bankAccounts);
console.log(accountsWithSumsOfDepositsLess2000);




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
