// ^ +++++++++++++++++++++++++++++++++ OBJECT METHODS ++++++++++++++++++++++++++++++++

// & ----------------- Definition -----------------

/*
In JavaScript, a method is a function that is a property of an object.
Methods define the behaviors or actions that an object can perform.

^ Theory:
    - Methods are essentially functions attached to objects.
    - They are used to perform specific tasks related to the object.
    - Methods allow objects to encapsulate both data (properties) and behavior (methods).
*/

// & ----------------- Example -----------------

const person = {
  firstName: "Abhishek",
  lastName: "Sahu",
  // Method to return full name
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.getFullName()); // Output: "Abhishek Sahu"

// & ----------------- Adding methods to Objects -----------------

/*
^ Theory:
    Methods can be added to objects in two ways:
        - When Creating the Object: Define methods directly as properties.
        - After Object Creation: Assign a function to an object property.

*/

// ~ Adding Methods While Creating the Object

const car = {
  brand: "Tesla",
  model: "Model 3",
  // Adding a method
  start: function () {
    return `${this.brand} ${this.model} is starting...`;
  },
};

console.log(car.start()); // Output: "Tesla Model 3 is starting..."

// ~ Adding Methods After Object Creation

const calculator = {
  value: 10,
};

// Adding method
calculator.add = function (number) {
  return this.value + number;
};

console.log(calculator.add(5)); // Output: 15

// & ----------------- The "this" Keyword Inside Methods -----------------

/*
The this keyword in a method refers to the object that is calling the method.

^ Theory:

    "this" is a special keyword in JavaScript used within objects to access the object’s properties or methods.
    The value of "this" depends on how the method is called.

*/

// & ----------------- Example: Using "this" in Methods -----------------

const student = {
  name: "Rohan",
  age: 20,
  // Method using `this`
  introduce: function () {
    return `Hi, his name is ${this.name} and he is ${this.age} years old.`;
  },
};

console.log(student.introduce()); // Output: "Hi, my name is Rohit and I am 20 years old."

// & ----------------- Important Notes About "this": -----------------

/*
^ In Regular Methods: 
    "this" refers to the object the method belongs to.
^ Arrow Functions: 
    Arrow functions don’t have their own "this". They inherit "this" from their surrounding context.

*/

// & ----------------- Example: this with Arrow Functions -----------------

const book = {
  title: "JavaScript Essentials",
  author: "Abhishek",
  // Regular function
  details: function () {
    return `This book is "${this.title}" by ${this.author}.`;
  },
  // Arrow function (won't work correctly with `this` in this context)
  detailsArrow: () => {
    return `This book is "${this.title}" by ${this.author}.`;
  },
};

console.log(book.details()); // Correct: "This book is 'JavaScript Essentials' by Abhishek."
console.log(book.detailsArrow()); // Incorrect: "This book is 'undefined' by undefined."

// & ----------------- Practical Use Case: Combining Methods and Properties -----------------

const bankAccount = {
  accountHolder: "Rohan Mehra",
  balance: 5000,

  // Deposit Method
  deposit: function (amount) {
    this.balance += amount;
    return `Deposited ₹${amount}. New balance: ₹${this.balance}.`;
  },

  // Withdraw Method
  withdraw: function (amount) {
    if (amount > this.balance) {
      return `Insufficient funds! Current balance: ₹${this.balance}.`;
    }
    this.balance -= amount;
    return `Withdrew ₹${amount}. New balance: ₹${this.balance}.`;
  },
};

console.log(bankAccount.deposit(2000)); // Output: "Deposited ₹2000. New balance: ₹7000."
console.log(bankAccount.withdraw(3000)); // Output: "Withdrew ₹3000. New balance: ₹4000."
console.log(bankAccount.withdraw(5000)); // Output: "Insufficient funds! Current balance: ₹4000."


// & ----------------- Summary -----------------

/*
Methods are object properties that store functions.

They define actions that an object can perform.

Use the "this" keyword to access object properties within methods.

Avoid using arrow functions for methods when "this" is required.

*/
