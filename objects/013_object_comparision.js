// ^ +++++++++++++++++++++++++++++++++ OBJECT COMPARISION ++++++++++++++++++++++++++++++++

/*
In JavaScript, comparing objects can be tricky because of the way objects are stored and referenced in memory. 
Let's dive into the concepts of comparing object references and understanding deep and shallow equality.

*/

// & ----------------- Comparing Object References -----------------

/*
^ Concept:
    Objects are reference types in JavaScript. When you compare two objects using === or ==, 
    it checks whether both variables point to the same memory location, not whether they have the same content.

*/

// ~ Example

const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 === obj2); // Output: false
console.log(obj1 === obj3); // Output: true

/*
Even if obj1 and obj2 have identical properties and values, they are separate objects stored in different memory locations.
But obj1 and obj3 share the same memory location, so they are considered equal as they point to the same object after obj3 = obj1.

*/

