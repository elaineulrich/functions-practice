
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data.js";

export function getClientsWithWrongBalance(array) {
  const wrongBalanceClients = array.filter((client) => {
    const calculatedBalance = (client.deposits || []).reduce((total, deposit) => total + deposit, 0) -
      (client.withdrawals || []).reduce((total, withdrawal) => total + withdrawal, 0);

    return client.balance !== calculatedBalance;
  });

  return wrongBalanceClients;
}

const clientsWithWrongBalance = getClientsWithWrongBalance(bankAccounts);
console.log(clientsWithWrongBalance);





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
