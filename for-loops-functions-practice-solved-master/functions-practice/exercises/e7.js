// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts, bankAccountsNoPositiveBalance } from './data/data.js'; 

export function getClientWithLeastBalance(bankAccounts) {
  const filteredAccounts = bankAccounts.filter(account => account.balance > 0);

  if (filteredAccounts.length === 0) {
    return []; 
  }

  let minBalanceAccount = filteredAccounts[0];
  for (let i = 1; i < filteredAccounts.length; i++) {
    if (filteredAccounts[i].balance < minBalanceAccount.balance) {
      minBalanceAccount = filteredAccounts[i];
    }
  }

  return [minBalanceAccount];
} 

export function getClientWithLeastPositiveBalance(bankAccounts) {
  const positiveAccounts = bankAccounts.filter(account => account.balance > 0);

  if (positiveAccounts.length === 0) {
    return []; 
  }

  let minBalanceAccount = positiveAccounts[0];
  for (let i = 1; i < positiveAccounts.length; i++) {
    if (positiveAccounts[i].balance < minBalanceAccount.balance) {
      minBalanceAccount = positiveAccounts[i];
    }
  }

  return [minBalanceAccount];
}

const result = getClientWithLeastPositiveBalance(bankAccountsNoPositiveBalance);
console.log(result);




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function