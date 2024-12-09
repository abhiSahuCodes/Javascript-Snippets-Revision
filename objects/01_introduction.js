// ^ +++++++++++++++++++++++++++++++++ OBJECTS ++++++++++++++++++++++++++++++++

// & ----------------- Definition -----------------

/*
In JavaScript, an object is a collection of key-value pairs, where the keys are known as properties (or attributes), 
and the values can be of any data type, including other objects, arrays, or functions. These functions within objects are called methods.

Objects are a foundational part of JavaScript and provide a way to group and organize data and functionality together.
*/

// & ----------------- Purpose of Objects in JavaScript -----------------

/*
^ Data Organization: 
    Objects allow you to store related data in a structured manner. For example, all details of a person (name, age, address) can be stored together in one object.
^ Reusability: 
    Objects enable you to define reusable structures for organizing and manipulating data.
^ Modeling Real-World Entities: 
    Objects can represent entities like a car, user, or product, with properties and behaviors (methods) mimicking the real world.
^ Foundation for OOP (Object-Oriented Programming): 
    Objects are central to JavaScript's OOP paradigm, allowing the creation of blueprints (classes) and inheritance.
*/

// & ----------------- Importance of Objects -----------------

/*
^ Dynamic Nature: 
    Objects can dynamically add, modify, or remove properties and methods.
^ Essential for APIs: 
    Many JavaScript features, including the DOM (Document Object Model) and built-in libraries, heavily use objects.
^ Flexibility: 
    Objects can hold complex data, enabling the construction of nested and hierarchical structures.
^ Custom Methods: 
    Methods allow encapsulating logic and functionality specific to an object.
*/

// & ----------------- Code Examples -----------------

// ~ Basic Object Syntax

// * Defining an object
const person = {
  name: "Rohan Mehra", // Property
  age: 30, // Property
  greet: function () {
    // Method
    console.log(`Hello, his name is ${this.name}.`);
  },
};

// * Accessing Properties
console.log(person.name); // Output: "Rohan"
console.log(person.age); // Output: 30

// * Calling a Method
person.greet(); // Output: "Hello, his name is Rohan."

// ~ Dynamic Nature of Objects

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2021,
};

// * Adding a new property
car.color = "Red";

// * Modifying a property
car.year = 2022;

// * Removing a property
delete car.model;

console.log(car); // Output: { brand: 'Toyota', year: 2022, color: 'Red' }

// ~ Nested Objects

// * Defining a nested object
const user = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: "123-456-7890",
  },
  skills: ["JavaScript", "React", "Node.js"],
};

// * Accessing nested properties
console.log(user.contact.email); // Output: alice@example.com
console.log(user.skills[1]); // Output: React


// ? Another Example

const address = {
  street: "123 Main St",
  city: "New York",
  state: "NY",
  zip: "10001",
  country: "USA",
};

const userData = {
  name: "John Doe",
  age: 25,
  address: address,
};

console.log(userData.address.city); // Output: New York


// & ----------------- Summary -----------------

/*
^ Definition: 
    Objects are key-value pairs; keys are properties, values can be anything.
^ Purpose: 
    Organize data, model real-world entities, enable OOP, and support API usage.
^ Flexibility: 
    Dynamic addition/removal/modification of properties and methods.
*/

