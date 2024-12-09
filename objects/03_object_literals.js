// ^ +++++++++++++++++++++++++++++++++ OBJECT LITERALS ++++++++++++++++++++++++++++++++

// & ----------------- Definition -----------------

/*
    Object literals are the simplest and most commonly used way to create objects in JavaScript. 
    They allow you to define objects by directly specifying their properties and values within curly braces {}.

*/

// & ----------------- Syntax -----------------

/*
const objectName = {
  key1: value1,
  key2: "value2",

  methodName: function () {
    required Code
  },
};

*/

/* 
Keys:       Represent the property names of the object.
Values:     Can be of any data type, including strings, numbers, arrays, other objects, or functions.
Methods:    Functions defined as properties within the object.

*/

// & ----------------- Features of Object Literals -----------------

/*
^ Simple and Readable Syntax: 
    Objects are defined directly in the code.
^ Dynamic Properties: 
    You can add, modify, or delete properties even after the object is created.
^ Concise Method Syntax: 
    Modern JavaScript allows defining methods in a shorter way.

*/

// & ----------------- Examples of Object Literals -----------------

// ~ Basic Example

const student = {
  name: "John",
  age: 20,
  course: "Computer Science",
};

console.log(student.name); // Output: "John"
console.log(student.age); // Output: 20

// ~ Object with Methods

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b; // Concise method syntax
  },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(5, 3)); // Output: 2


// ~ Nested Objects

const employee = {
  name: "Alice",
  department: {
    name: "IT",
    location: "Building 1",
  },
  skills: ["JavaScript", "Python", "AWS"],
};

console.log(employee.department.name); // Output: IT
console.log(employee.skills[1]); // Output: Python


// ~ Using Variables as Property Names

const propertyName = "speed";

const vehicle = {
    brand: "BMW",
    [propertyName]: "210 km/h" // Dynamically setting property / Computed Property
}

console.log(vehicle.speed); // Output: "210 km/h"


// ~ Short Property Syntax

const nameOfPerson = "Rohan"
const ageOfPerson = 25

const person = {nameOfPerson, ageOfPerson}

console.log(person) // Output: { nameOfPerson: 'Rohan', ageOfPerson: 25 }                                                         


// & ----------------- Summary -----------------

/*
Object literals provide a straightforward way to create objects by listing key-value pairs.

They are flexible, allowing for nested structures, dynamic updates, and methods.

Modern features like concise methods and computed property names enhance usability.

*/

