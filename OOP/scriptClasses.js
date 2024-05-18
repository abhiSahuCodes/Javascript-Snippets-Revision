// ----------------- ES6 CLASSES -----------------

/* 
Classes are same and are a wrapper for user-friendlyness.
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.
*/

// Class expression

const bikeCl = class {
  constructor(make, color) {
    this.make = make;
    this.color = color;
  }
};

// Class declaration

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods - It will be inside the prototype not in new instance created - Recommended here
  calcAge() {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const dhoni = new PersonCl('Mahendra Singh Dhoni', 1981);
console.log(dhoni);
dhoni.calcAge();

console.log(dhoni.__proto__ === PersonCl.prototype); // true

/*


// Not Recommended - Now inside the prototype both calcAge and greet will be there.

PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
}

// Now inside the prototype both calcAge and greet will be there even if greet is
is not inside the class body.


// But it should be there.

*/

dhoni.greet();

/*
-----------------------IMPORTANT CLASSES INFORMATION-----------------------------
* 1. Classes are not hoisted. But functions are hoisted(can be executed before declaration)
* 2. Classes are first-class citizens (pass them into functions and return them from functions).
* 3. Classes are executed in strict mode
---------------------------------------------------------------------------------
*/


