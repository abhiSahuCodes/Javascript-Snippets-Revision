
// 1) Public Fields - to be available to all instances
// 2) Private Fields
// 3) Public Methods
// 4) Private Methods

// There is also the static version 

class Account {
    // 1) Public fields
    locale = navigator.language;
    // _movements = [];

    // 2) Private Fields
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protect property - just a convention to not touch it
        this.#pin = pin;
        // this._movements = [];

        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}.`)
    }

    // Public interface / 3) Public Methods 

    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    // _approveLoan(val) {
    //     return true;
    // }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved.`)
            return this;
        }
    }

    // 4) Private Methods - this will be inside [[PrivateMethods]] 
    #approveLoan(val) {
        return true;
    }

    // Static - only accessible by the class not it's instances
    static helper() {
        console.log('Helper')
    }
}

const acc1 = new Account('Ronak', 'INR', 111111);
console.log(acc1);

// This works but should not be done - functions should be defined
// acc1.movements.push(25000);
// acc1.movements.push(-14000);

// After adding these methods, these should be used.
acc1.deposit(25000);
acc1.withdraw(14000);

// After defining getMovements
console.log(acc1.getMovements());

acc1.requestLoan(10000);

// This should not be accessible - so we need data encapsulation and privacy
// acc1.approveLoan(2000); // It is not a function

console.log(acc1);
// console.log(acc1.movements); // undefined
// console.log(acc1.#movements); // Property '#movements' is not accessible outside class 'Account' because it has a private identifier.

// console.log(acc1.pin); // undefined
// console.log(acc1.#pin); // Property '#pin' is not accessible outside class 'Account' because it has a private identifier.

// console.log(acc1.#approveLoan(1000)); // Property '#approveLoan' is not accessible outside class 'Account' because it has a private identifier.

Account.helper(); // Helper
// acc1.helper(); // acc1.helper is not a function.



// CHAINING METHODS

// acc1.deposit here won't work, we need to return this in deposit function. Then in all functions.
acc1.deposit(30000).deposit(50000).withdraw(20000).requestLoan(70000).withdraw(35000);

console.log(acc1);
console.log(acc1.getMovements());