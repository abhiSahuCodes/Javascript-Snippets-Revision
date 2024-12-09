// ^ +++++++++++++++++++++++++++++++++ OBJECT CONSTRUCTOR ++++++++++++++++++++++++++++++++

// & ----------------- Definition -----------------

/*
The Object constructor is a built-in function in JavaScript that creates and returns a new object programmatically. 
It is used to create objects with properties and methods.
It provides an alternative to object literals, especially useful when you need to create multiple objects dynamically.

*/

// & ----------------- Syntax -----------------

/*
const objectName = new Object();

    - new Object(): Creates an empty object.
    - Properties and methods can be added to the object dynamically.

*/

// & ----------------- Examples of Using object Constructor -----------------

// ~ Creating an Empty Object and Adding Properties

const person = new Object(); // Creates an empty object

// * Add properties dynamically
person.name = "Rohan";
person.age = 30;

// * Add a method
person.greet = function () {
  return `Hello, his name is ${this.name}.`;
};

console.log(person.name); // Output: "Rohan"
console.log(person.greet()); // Output: "Hello, his name is Rohan."


// ~ Using Bracket Notation

const car = new Object();

// * Add properties with bracket notation
car["brand"] = "Toyota";
car["model"] = "Hyryder"
car["year"] = 2022;

// * Access properties dynamically

const property = "model";
console.log(car["model"])   // Output: "Hyryder"
console.log(car["brand"])   // Output: "Toyota"
console.log(car[property]); // Output: "Hyryder"

