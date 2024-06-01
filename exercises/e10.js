// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

import { bankAccounts } from "../data/data.js";

export function getClientsWithLetterInName(array, letter) {
  const clientsWithLetterInName = [];
  for (let i = 0; i < array.length; i++) {
    const client = array[i];
    if (client.name.toLowerCase().includes(letter.toLowerCase())) {
      clientsWithLetterInName.push(client.name);
    }
  }
  return clientsWithLetterInName;
}

const letter = 'e';
const clientsWithLetterE = [];
const bankAccountsArray = bankAccounts;
for (let i = 0; i < bankAccountsArray.length; i++) {
  const clientName = bankAccountsArray[i].name;
  if (clientName.toLowerCase().includes(letter.toLowerCase())) {
    clientsWithLetterE.push(clientName);
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
