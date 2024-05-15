'use strict';

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



