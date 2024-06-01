
// EXERCISE 9
// Return an array of bank accounts with balance over $100
// Array example: bankAccounts in /data/data.js
// getClientsWithBalanceOverOneHundred(array) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]


import { bankAccounts, bankAccountsNoPositiveBalance } from "../data/data.js";

export function getClientsWithBalanceOverOneHundred(array) {
  const clientsWithBalanceOver100 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 100) {
      clientsWithBalanceOver100.push(array[i]);
    }
  }
  return clientsWithBalanceOver100;
}

const clientsWithBalanceOver100 = [];
const bankAccounts = bankAccountsNoPositiveBalance;
for (let i = 0; i < bankAccounts.length; i++) {
  const client = bankAccounts[i];
  if (client.balance > 100) {
    clientsWithBalanceOver100.push(client);
  }
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
