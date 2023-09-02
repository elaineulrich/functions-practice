// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

import { bankAccounts } from "../data/data.js";

export function getAllWithdrawals(array) {
  const withdrawalSums = [];

  for (const account of array) {
    if (account.withdrawals && Array.isArray(account.withdrawals)) {
      // Calculate the sum of withdrawals for each account
      const sum = account.withdrawals.reduce((total, withdrawal) => total + withdrawal, 0);
      withdrawalSums.push(sum);
    } else {
      // If the account has no withdrawals, add 0 to the sums array
      withdrawalSums.push(0);
    }
  }

  return withdrawalSums;
}

const allWithdrawals = getAllWithdrawals(bankAccounts);
console.log(allWithdrawals);



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function