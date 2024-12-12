// ^ +++++++++++++++++++++++++++++++++ CLASSES AND CONSTRUCTOR FUNCTIONS ++++++++++++++++++++++++++++++++

//  & ----------------- Constructor Functions -----------------

/*
A constructor function is a regular JavaScript function used to create objects. 
It is invoked with the "new" keyword to construct new instances of an object.

*/

// & ----------------- Syntax -----------------

/*
function constructorName(params) {
    this.propertyName = value;

    this.methodName = function (){
        Some functionality
    };
};

*/

// & ----------------- Examples of Using Constructor Function -----------------

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(
      `Hello, his name is ${this.name} and he is ${this.age} years old.`
    );
  };
}

const person1 = new Person("Rohan", 30);
const person2 = new Person("Rohit", 26);

person1.greet(); // Output: "Hello, his name is Rohan and he is 30 years old."
person2.greet(); // Output: "Hello, his name is Rohit and he is 26 years old."

//  & ----------------- Classes -----------------

/*
In JavaScript, classes are a blueprint for creating objects. 
They provide a way to encapsulate data and functionality together, making your code more organized and reusable.
classes are syntactic sugar over the existing prototype-based inheritance model. 
They provide a cleaner, more modern, and organized way to create objects and define methods.

*/

// & ----------------- Syntax -----------------

/*
class ClassName {
    constructor(params) {
        this.propertyName = value;
    }

    methodName() {
        Some functionality
    }
}

*/

// & ----------------- Examples of Using Constructor Function -----------------

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, his name is ${this.name} and he is ${this.age} years old.`
    );
  }
}

const user1 = new User("Rohan", 30);
const user2 = new User("Rohit", 26);

// & ----------------- Key Differences Between Constructor Functions and Classes -----------------

/*
^ Feature	        Constructor Functions	                                    Classes

Syntax	            Uses a function with "this" for initialization.	            Cleaner, organized, and modern syntax.
Method              Definition	Methods are added inside the function           Methods are defined once in the class prototype.
                    (each object gets its own copy).	
Inheritance	        Requires Object.create() or prototypes manually.	        Built-in inheritance using extends.
Usage	            Used in older JavaScript code.	                            Preferred in modern JavaScript.

*/

// & ----------------- Encapsulation with Private Fields -----------------

class BankAccount {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(5000);

account.deposit(500);

console.log(account.getBalance());

// & ----------------- Inheritance with "extends" -----------------

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Tommy");
dog.speak();


// & ----------------- When to Use What? -----------------

/*
^ Use classes:
    - Modern projects and codebases.
    - Need for inheritance and organized code.
    - When private fields or other advanced features are needed.

*/

/*
^ Use Constructor Functions:
    - Working with legacy JavaScript code.
    - When you need simple object creation and no inheritance.

*/


// & ----------------- Summary -----------------

/*
Constructor functions and classes are used to create reusable object templates.

Classes are preferred for modern JavaScript due to their cleaner syntax and built-in inheritance.

Methods in classes are shared via prototypes, making them more memory-efficient.

*/
