// ^ +++++++++++++++++++++++++++++++++ OBJECT ITERATION ++++++++++++++++++++++++++++++++

// & ----------------- for...in -----------------

/*
The for...in loop is used to iterate over the enumerable properties of an object. 
It allows you to access all the keys (property names) in the object. 

*/

// & ----------------- Syntax -----------------

/*
for (let key in object) {
    Code to execute for each key
}

^ key: 
    The variable that stores the property name (key) for each iteration.
^ object: 
    The object whose properties you want to iterate over.

Iterates over enumerable properties of an object.
Returns property names (keys), which can be used to access values.

*/

// & ----------------- Example: Basic Iteration -----------------

const person = {
  name: "Abhishek",
  age: 31,
  isDeveloper: true,
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

/*
Output: 

name: Abhishek
age: 31
isDeveloper: true

*/

// & ----------------- Checking for Own Properties -----------------

/*
The for...in loop will also iterate over properties inherited through the prototype chain. 
To filter out these inherited properties, use Object.hasOwn() or hasOwnProperty().

*/

const developer = {
  name: "Abhishek",
  age: 31,
};

// developer.greet = function () {
//     console.log("Hello!");
// }

// or

Object.prototype.greet = function () {
  console.log("Hello!");
};

// ~ Iterating without filtering
for (let key in developer) {
  console.log(`${key}: ${developer[key]}`);
}

/*
Output:

name: Abhishek
age: 31
greet: function () {
  console.log("Hello!");
}

*/

// ~ Iterating and filtering out inherited properties

for (let key in developer) {
  if (Object.hasOwn(developer, key)) {
    console.log(key);
  }
}

/*
Output:

name
age

*/

// & ----------------- Example: Modifying Object During Iteration -----------------

const inventory = {
  apples: 10,
  oranges: 5,
};

console.log(inventory) // Output: { apples: 10, oranges: 5 }

for (let key in inventory) {
    inventory[key] *= 2;
}

console.log(inventory); // Output: { apples: 20, oranges: 10, greet: NaN }

/*
Without for...in loop, we would get own properties of the object.

With for...in loop, we get all properties, including inherited ones.

Here, during for...in loop, we get greet as a function but after performing *2, it's NaN as function can't be multiplied.

To avoid this we can use developer.greet in place of Object.prototype.greet.



*/


// & ----------------- Avoiding this -----------------

/*
How to Avoid This:

To avoid accidentally modifying or adding inherited properties:

Use Object.hasOwn to check if the property is an own property.


for (let key in inventory) {
  if (Object.hasOwn(inventory, key)) {
    inventory[key] *= 2;
  }
}

Alternatively, use Object.keys() or similar methods that only handle own properties:

Object.keys(inventory).forEach(key => {
  inventory[key] *= 2;
});

*/


// & ----------------- Pitfalls of for...in -----------------

/*
Iterates over the prototype chain unless filtered.

Order of iteration is not guaranteed. Modern engines may follow insertion order, but this is not reliable for all scenarios.

*/

// & ----------------- When to Use for...in -----------------

/*
Use for...in when:

  - You need to iterate over all keys of an object.
  - The order of iteration does not matter.
  - You need to include only enumerable properties. 

*/





