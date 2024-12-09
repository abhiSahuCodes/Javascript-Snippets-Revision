// ^ +++++++++++++++++++++++++++++++++ FACTORY FUNCTIONS ++++++++++++++++++++++++++++++++

// & ----------------- Definition -----------------

/*
A factory function is a function in JavaScript that creates and returns objects. 
It acts like a factory that "produces" objects with specific properties and methods. 
Unlike constructors, factory functions do not use the new keyword and offer more flexibility in object creation.

*/

// & ----------------- Importance -----------------

/*
^ Reusability: 
    Create multiple objects with the same structure and behavior.
^ Customization: 
    Easily customize properties and methods of objects.
^ Encapsulation: 
    Hide complex logic within the factory function.

*/

// & ----------------- Syntax -----------------

/*
function factoryFunction(params) {
    return {
        key1: value1, 
        key2: value2,
        methodName() {
            some functionality
            }
        }
}

*/

// & ----------------- Examples of Factory Functions -----------------

// ~ Basic Example

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(
        `Hello, his name is ${this.name} and he is ${this.age} years old.`
      );
    },
  };
}

const person1 = createPerson("Rohan", 30);
const person2 = createPerson("Rohit", 26);

console.log(person1.greet()); // Output: "Hello, his name is Rohan and he is 30 years old."

console.log(person2.greet()); // Output: "Hello, his name is Rohit and he is 26 years old."

// ~ Factory Function with Default Values

function createCar(brand, model, year = 2020) {
  return {
    brand,
    model,
    year,
    details() {
      return `${this.brand} ${this.model}, manufactured in ${this.year}`;
    },
  };
}

const car1 = createCar("Toyota", "Camry");
const car2 = createCar("Tesla", "Model 3", 2022);

console.log(car1.details()); // Output: Toyota Camry, manufactured in 2020
console.log(car2.details()); // Output: Tesla Model 3, manufactured in 2022

// ~ Encapsulating Logic

function createRectangle(length, width) {
  return {
    length,
    width,
    area() {
      return this.length * this.width;
    },
    perimeter() {
      return 2 * (this.length + this.width);
    },
  };
}

const rectangle = createRectangle(5, 10);

console.log(rectangle.area()); // Output: 50
console.log(rectangle.perimeter()); // Output: 30

// ~ Dynamic Properties

function createUser(username, isAdmin = false) {
  return {
    username,
    role: isAdmin ? "Admin" : "User",
    welcomeMessage() {
      return `Welcome, ${this.username}! Your role is ${this.role}.`;
    },
  };
}

const user1 = createUser("Rohan");
const user2 = createUser("Rohit", true);

console.log(user1.welcomeMessage()); // Output: Welcome, Rohan! Your role is User.
console.log(user2.welcomeMessage()); // Output: Welcome, Rohit! Your role is Admin.

// & ----------------- Advantages of Factory Functions -----------------

/*
^ 1. Flexibility: 
        Works without the new keyword, making it simpler in some cases.
^ 2. Readable Code: 
        Encapsulates object creation logic for better code organization.
^ 3. Default Parameters: 
        Easily set defaults for properties.
^ 4. Custom Logic: 
        Add dynamic behavior during object creation.

*/

// & ----------------- Summary -----------------

/*
Factory functions create and return objects dynamically.

They allow properties, methods, and logic to be encapsulated.

Ideal for reusability and customization without relying on new.

*/
