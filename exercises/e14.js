
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data.js";

export function getClientsWithWrongBalance(array) {
  const wrongBalanceClients = [];

  for (const client of array) {
    const calculatedBalance = calculateBalance(client.deposits, client.withdrawals);
    if (client.balance !== calculatedBalance) {
      wrongBalanceClients.push(client);
    }
  }

  return wrongBalanceClients;
}

function calculateBalance(deposits, withdrawals) {
  let balance = 0;

  if (deposits) {
    for (const deposit of deposits) {
      balance += deposit;
    }
  }

  if (withdrawals) {
    for (const withdrawal of withdrawals) {
      balance -= withdrawal;
    }
  }

  return balance;
}






// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
