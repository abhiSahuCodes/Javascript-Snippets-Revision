'use strict';
// new OPERATOR
const Person = function (firstName, birthYear) {
    // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
//   this.calAge = function() {
//     console.log(2024 - this.birthYear);
//   }
};

const abhishek = new Person('Abhishek', 1993);
console.log(abhishek);

// 1. A New {} i.e. empty object is created.
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// Now the main function becomes the blueprint for
// other instances created with new keyword calling
// that function.

const rohan = new Person('Rohan', 2000);
const suhani = new Person('Suhani', 2001);

console.log(rohan, suhani);

const rakesh = {
  firstName: 'Rakesh',
  birthYear: 1998,
};

console.log(abhishek instanceof Person); // true
console.log(rakesh instanceof Person); // false



// PROTOTYPES


Person.prototype.calcAge = function() {
    const date = new Date();
    console.log(date.getFullYear() - this.birthYear);
}

console.log(Person.prototype);

abhishek.calcAge();
// if we console.log(abhishek), then there won't be
// any calcAge but still we can access it as it is
// prototypal inheritance

rohan.calcAge();
suhani.calcAge();

console.log(abhishek.__proto__);
console.log(abhishek.__proto__ === Person.prototype); // true

// But the prototype is not the prototype of Person rather it should
// be called as like prototypeOfLinkedObjects

console.log(Person.prototype.isPrototypeOf(abhishek)) // true
console.log(Person.prototype.isPrototypeOf(Person)); //false


Person.prototype.species = "Homo sapiens";

console.log(abhishek.species, rohan.species);

// The calcAge, and species are not abhishek's and rohan's own methods, and 
// properties. These are inherited methods and properties.
// To check that
console.log(abhishek.hasOwnProperty('firstName')); // true
console.log(abhishek.hasOwnProperty('species')); // false
