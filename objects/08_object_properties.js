// ^ +++++++++++++++++++++++++++++++++ OBJECT PROPERTIES ++++++++++++++++++++++++++++++++

// & ----------------- Key-Value Pairs -----------------

/*
^ Definition: 
    In JavaScript, objects are collections of properties. Each property is a key-value pair.
^ Key: 
    A unique identifier for the property (string or symbol).
^ Value: 
    The data (can be of any type) associated with the key.

*/

// ~ Example

const person = {
  name: "Abhishek",
  age: 31,
  isDeveloper: true,
};

console.log(person); // Output: { name: 'Abhishek', age: 31, isDeveloper: true }

// ~ Explanation:

/*
    - name, age, and isDeveloper are the keys.
    - "Abhishek", 28, and true are their respective values.
    - Together, they form key-value pairs.

*/

// & ----------------- Accessing Properties -----------------

// There are two ways to access properties of an object:

/*
^ Dot Notation (.):
            Simple and commonly used when the key is a valid identifier (does not contain spaces, special characters, or start with a number).
^ Bracket Notation ([]):
            Used when the key has special characters, spaces, or is dynamic (e.g., stored in a variable).

*/

const developer = {
  name: "Abhishek",
  "home city": "New Delhi",
  age: 31,
};

// Dot notation
console.log(developer.name); // Output: "Abhishek"
console.log(developer.age); // Output: 28

// Bracket notation
console.log(developer["home city"]); // Output: "New Delhi"

// Accessing dynamically
const key = "age";
console.log(developer[key]); // Output: 28
console.log(developer.key); // Output: undefined

// & ----------------- Adding, Updating, and Deleting Properties -----------------

// ~ Adding a Property

developer.isWebDeveloper = true; // Using dot notation
developer["hobby"] = "coding"; // Using bracket notation

console.log(developer); // Output: { name: 'Abhishek', 'home city': 'New Delhi', age: 31, isWebDeveloper: true, hobby: 'coding' }

// ~ Updating a Property

developer.hobby = "coding and playing"; // Updating hobby
console.log(developer.hobby); // Output: "coding and playing"

// ~ Deleting a Property

delete developer.hobby; // Deleting hobby
console.log(developer); // Output: { name: 'Abhishek', 'home city': 'New Delhi', age: 31, isWebDeveloper: true }

// ^----------------- Nested Objects -----------------

// Nested objects are objects within objects. They are commonly used to represent more complex data structures.

// & ----------------- 1. Objects Inside Objects -----------------

/*
    - In JavaScript, a property of an object can itself be another object.
    - This creates a hierarchical (nested) structure.

*/

const user = {
  name: "Abhishek",
  age: 28,
  address: {
    street: "BTM Layout",
    city: "Bengaluru",
    zip: "560029",
  },
};

console.log(user);
// Output: { name: "Abhishek", age: 28, address: { street: "BTM Layout", city: "Bengaluru", zip: "560029" } }

// & ----------------- 2. Accessing Nested Properties -----------------

// ~ Dot notation

console.log(user.address.street); // Output: "BTM Layout"
console.log(user.address.city); // Output: "Bengaluru"

// ~ Bracket notation

console.log(user["address"]["street"]); // Output: "BTM Layout"

// & ----------------- 3. Modifying Nested Properties -----------------

// To modify a nested property, navigate to it and assign a new value.

const userDeveloper = {
  name: "Abhishek",
  address: {
    city: "New Delhi",
  },
};

// Update nested property

userDeveloper.address.city = "Bengaluru";
console.log(userDeveloper.address); // Output: { city: 'Bengaluru' }

// Add a new nested property

userDeveloper.address.zip = "560029";
console.log(userDeveloper.address); // Output: { city: 'Bengaluru', zip: '560029' }

// & ----------------- 4. Accessing Deeply Nested Properties Safely -----------------

/*
    - Accessing deeply nested properties can cause errors if any intermediate object is undefined.
    - Use optional chaining (?.) to safely access nested properties.

*/

// Safe access with optional chaining

console.log(userDeveloper.address?.city); // Output: "Bengaluru"
console.log(userDeveloper.address?.zip); // Output: undefined
console.log(userDeveloper.address?.street); // Output: undefined

// Without optional chaining (causes error)
// console.log(user.contact.phone);    // Error: Cannot read properties of undefined

// & ----------------- 5. Working with Nested Loops -----------------

// To loop through nested objects, use nested loops or recursive functions.

const developerData = {
  name: "Abhishek",
  age: 28,
  address: {
    street: "BTM Layout",
    city: "Bengaluru",
    zip: "560029",
  },
};

// ~ Loop through nested object

for (const key in developerData) {
  if (typeof developerData[key] === "object") {
    for (const nestedKey in developerData[key]) {
      console.log(`${nestedKey}: ${developerData[key][nestedKey]}`);
    }
  } else {
    console.log(`${key}: ${developerData[key]}`);
  }
}


/*
^ Output:

name: Abhishek
age: 28
street: BTM Layout
city: Bengaluru
zip: 560029

*/


