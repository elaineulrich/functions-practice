// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

import { bankAccountsNoPositiveBalance } from "../data/data.js";

export function getClientWithNoMoney(array) {
  // Filter accounts with a balance of 0 and then map to extract names
  return array
    .filter((client) => client.balance === 0)
    .map((client) => client.name);
}

const clientsWithZeroBalance = getClientWithNoMoney(bankAccountsNoPositiveBalance);
console.log(clientsWithZeroBalance);






// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
