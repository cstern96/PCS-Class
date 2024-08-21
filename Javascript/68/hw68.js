'use strict'
function createBankAccount(balance) {
    return {
        balance,
        performWithdrawal: function (withdrawal) {
            return this.balance = this.balance - withdrawal;
        },
        performDeposit: function (deposit) {
            return this.balance = this.balance + deposit;
        }
    }

}
function transaction(deposit, withdrawal) {
    return this.balance = this.balance + deposit - withdrawal;
}

const bankAccount1 = createBankAccount(1000);
console.log(bankAccount1);
console.log(bankAccount1.performWithdrawal(500));
const bankAccount2 = createBankAccount(3000);
console.log(bankAccount2);
console.log(bankAccount2.performDeposit(7000));
console.log(transaction.call(bankAccount1, 1000, 500));


const depositFiftyAccount1 = transaction.bind(bankAccount1, 50, 0);
console.log(depositFiftyAccount1());
