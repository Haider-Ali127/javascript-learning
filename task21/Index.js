
// simple task solved by private field property (#)) ES2022
class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        } else {
            console.log("Deposit must be positive!");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        } else {
            console.log("Insufficient funds or invalid amount!");
        }
    }
    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount(10000);

console.log("Initial Balance:", account.balance);
account.deposit(5000);
console.log("Balance after deposit:", account.balance);
account.withdraw(3000);
console.log("Balance after withdraw:", account.balance);
account.withdraw(20000); 
