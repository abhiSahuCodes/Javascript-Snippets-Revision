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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // INSTANCE METHODS - instances can inherit these
  // Methods - It will be inside the prototype not in new instance created - Recommended here
  calcAge() {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name)
      if (name.includes(" ")) {
        this._fullName = name;
      } else {
        console.log(`${name} is not a full name`);
      }
  }

  get fullName() {
    return this._fullName;
  } 

  // STATIC METHODS - It will be inside the constructor not in new instance created
  static hey() {
    console.log('Hey there')
  }

}

const dhoni = new PersonCl('Mahendra Singh Dhoni', 1981);
console.log(dhoni);
dhoni.calcAge(); // 43

// Static methods can be called without creating an instance
PersonCl.hey(); // Hey there

// getters
console.log(dhoni.age); // 43

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


// ----------------- GETTERS/SETTERS -----------------

/*
These are methods but can be used as properties.
*/

const rohan = new PersonCl("Rohan Singh", 2000);

const account = {
    owner: 'Abhishek',
    movements: [700, 540, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(account.latest); // 300

account.latest = 50;
console.log(account.movements);

// These are also used in class body.... Including those in the personCl class.


// ---------------------STATIC METHODS-----------------------


/*
Array.from() is a method that creates a new, shallow-copied Array instance from 
an array-like or iterable object.
This method is in the Array constructor not in the Array.prototype.
So, arrays cannot inherit this by default.

[2, 3, 5].from() will give error saying it is not a function.
Same as Number.parseFloat().

So, these are static methods present in Array and Number constructor.
*/

const Table = function(material) {
    this.material = material;
}

const table1 = new Table('wood');

Table.color = function(color) {
    console.log(`The table is ${color}.`);
    console.log(this) // ƒ (material) { this.material = material; }
}

// As Table is calling the color function so Table will be this inside the color function

Table.color('blue'); // The table is blue.

console.log(table1.material); // wood

// table1.color(); // The table1.color is not a function.

// IN PersonCl the static method is used above and called.


