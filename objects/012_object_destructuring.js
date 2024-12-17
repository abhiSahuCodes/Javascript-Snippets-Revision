// ^ +++++++++++++++++++++++++++++++++ OBJECT DESTRUCTURING ++++++++++++++++++++++++++++++++

/*
Object destructuring is a convenient way to extract values from an object and assign them to variables.
This feature, introduced in ES6, helps make the code more concise and readable.

*/

// & ----------------- Basic Syntax -----------------

/*
The syntax for object destructuring involves using curly braces {} to specify the properties you want to extract from the object.

*/

const person = {
  name: "Rohan",
  age: 30,
  profession: "Developer",
};

// ~ Destructuring

const { name, age, profession } = person;

console.log(name); // Output: "Rohan"
console.log(age); // Output: 30
console.log(profession); // Output: "Developer"

// & ----------------- Order Does Not Matter -----------------

/*
Unlike arrays, the order of properties in destructuring does not matter. The property names must match exactly with the object’s keys.
*/

const newCar = {
  brand: "Toyota",
  model: "Camry",
  year: 2021,
};

const { model, brand } = newCar;

console.log(model); // Output: "Camry"
console.log(brand); // Output: "Toyota"

// & ----------------- Using Rest Properties -----------------

/*
You can use the rest operator (...) to collect the remaining properties of an object into another variable.

*/

const newBike = {
  brandName: "Honda",
  model: "CBR",
  year: 2022,
};

const {brandName, ...rest} = newBike;

console.log(brandName); // Output: "Honda"  
console.log(rest); // Output: { model: 'CBR', year: 2022 }


// & ----------------- Nested Object Destructuring -----------------

/*
You can extract properties from nested objects by specifying the structure in the destructuring statement.
*/

const user = {
    username: "Rohit",
    role: "user",
    contact: {
        mailId: "rohit@gmail.com",
        phone: "123456780"
    }
}

const {username, contact: {mailId, phone}} = user;

console.log(username);      // Output: Rohit     
console.log(mailId);        // Output: rohit@gmail.com 
console.log(phone);         // Output: 123456789


// & ----------------- Default Values -----------------

/*
If a property doesn’t exist in the object, you can assign a default value to prevent undefined.
*/

const admin = {
    username: "Rohan",
    role: "admin",
    contact: {
        phone: "123456780"
    }
}

const {role, contact: {email = "Unknown"}} = admin;

console.log(role);      // Output: admin
console.log(email);     // Output: Unknown


// & ----------------- Practical Example -----------------

function getUserInfo (userData) {
    const {userName, age, emailId = "Not Provided"} = userData;
    console.log(`Name: ${userName}, Age: ${age}, Email: ${emailId}`);
}

const userData = {
    userName: "Rohan",
    age: 30,
    emailId: "rohan@gmail.com"
}

getUserInfo(userData);  // Output: Name: Rohan, Age: 30, Email: rohan@gmail.com

