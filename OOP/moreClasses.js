class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}.`)
    }

    // Public interface
    deposit(val) {
        this.movements.push(val);
    }

    withdraw(val) {
        this.deposit(-val);
    }

    approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved.`)
        }
    }
}

const acc1 = new Account('Ronak', 'INR', 111111);
console.log(acc1);

// This works but should not be done - functions should be defined
// acc1.movements.push(25000);
// acc1.movements.push(-14000);

acc1.deposit(25000);
acc1.withdraw(14000);

acc1.requestLoan(10000);

// This should not be accessible - so we need data encapsulation and privacy
acc1.approveLoan(2000);

console.log(acc1);
