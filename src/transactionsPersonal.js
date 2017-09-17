import Globals from './globals';
import { fetch } from './accounts';
import { getTransactionsFromAccount, demoCustomer, getCustomerAccounts } from './options';

const ids = [parseInt(demoCustomer, 10)];


const getPeople = async () => {
  const results = [];
  for (let i = 0; i < ids.length; i += 1) {
    results.push( await fetch(getCustomerAccounts(ids[i])));
  }
  return results;
};

const getTransactions = async () => {
  const transactions = [];
  const people = await getPeople();
  for (let i = 0; i < people.length; i += 1) {
    for (let j = 0; j < people[i].accounts.length; j += 1) {
      const data = {
        accountNumber: people[i].accounts[j].accountNumber,
        dateFrom: '01012017',
        dateTo: '17092017',
        customerID: parseInt(people[i].customerID, 10),
      };
      transactions.push( await fetch(getTransactionsFromAccount(data)));
    }
  }
  return transactions;
};


const mergeTransactions = async () => {
  const transactions = [];
  const transactionsSplitted = await getTransactions();
  for (let i = 0; i < transactionsSplitted.length; i += 1) {
    for (let j = 0; j < transactionsSplitted[i].transactions.length; j += 1) {
      const transaction = transactionsSplitted[i].transactions[j];

      transaction.branch = '';
      transaction.firm = '';
      transaction.description = transaction['message/KID'];
      transactions.push(transaction);
    }
  }
  return transactions;
};

const getPersonalData = async () => {
  const data = await mergeTransactions();
  Globals.personalTransactions = data;
  console.log(data);
  Globals.personalDone = true;
};

export default getPersonalData;
