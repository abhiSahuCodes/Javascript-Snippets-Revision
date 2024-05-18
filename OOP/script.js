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


// // PROTOTYPAL INHERITANCE AND CHAINING

/* Person.prototype is not the prototype of Person rather it is the prototype of
the object created though  Person like abhishek, suhani and rakesh. */

/*
Constructor function i.e [Person()] is used to create [abhishek] object.
Person.prototype is assigned a function calcAge() and it becomes prototype of 
[abhishek] object. So, abhishek.__proto__ = Person.prototype. 
And Person.prototype has a constructor function which is [Person()].

But Person.prototype is not the top part of the prototype chain.

Person.__proto__ = Object.prototype;
Object.prototype has a constructor function which is [Object()].
This [Object()] is the built in constructor function for objects. 
This is used when we write an object literal like {...} = new Object(...).
As Object.prototype is the top part of the prototype chain, it's prototype is null.
So, Object.prototype.__proto__ = null.

Prototype Chain: Series of links between objects, linked through prototypes.

abhishek.hasOwnProperty('firstName')-> here we check if abhishek has no method such as
hasOwnProperty. So, javascript will look into Person.prototype, it will not find
there as it is not there. So, it will look into Object.prototype and it will find 
there and this abhishek.hasOwnProperty('firstName') will be possible to call as 
this method will be inherited to abhishek (not copied).

*/

console.log(abhishek.__proto__); // Person.prototype
console.log(abhishek.__proto__.__proto__); // Object.prototype
console.log(abhishek.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

// Same with arrays

const arr = [2, 3, 4, 5, 3, 6, 5, 7]; // This is same as new Array(2, 3, 4, 5, 3, 6, 5, 7])

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // null


// Creating prototype method
Array.prototype.unique = function() {
  return [...new Set(this)];
}

console.log(arr.unique()); // [2, 3, 4, 5, 6, 7]

const h1 = document.querySelector('h1');

console.log(h1.__proto__); // HTMLHeadingElement {...}
console.log(h1.__proto__.__proto__); // HTMLElement {...}
console.log(h1.__proto__.__proto__.__proto__); // Element {...}
console.log(h1.__proto__.__proto__.__proto__.__proto__); // Node {...}

// Node has a [[prototype]]: EventTarget {...} and EventTarget has a [[prototype]]: Object {...}

// For function 

function sum(a, b) {
  return a + b;
}
console.dir(sum);


