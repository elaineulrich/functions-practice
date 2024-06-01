
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

import { bankAccounts, bankAccountsNoPositiveBalance } from "../data/data.js";

export function getAllDepositsGreaterThanOneHundred(array) {
  let depositsGreaterThanOneHundred = [];

  for (const account of array) {
    if (account.deposits) {
      for (const deposit of account.deposits) {
        if (deposit > 100) {
          depositsGreaterThanOneHundred.push(deposit);
        }
      }
    }
  }

  return depositsGreaterThanOneHundred;
}






// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
