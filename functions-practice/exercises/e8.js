
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts, bankAccountsNoPositiveBalance } from "../data/data.js";

export function getClientWithGreatestBalance(array) {
  let greatestBalanceClient = [array[0]];

  for (client of array) {
    if (client.balance > greatestBalance[0].balance) {
      greatestBalance[0] = client;
    }
  }
  return greatestBalance;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
