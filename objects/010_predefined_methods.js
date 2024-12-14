// ^ +++++++++++++++++++++++++++++++++ PREDEFINED OBJECT METHODS ++++++++++++++++++++++++++++++++

// & ----------------- Object.keys() -----------------

/*
^ Purpose: 
    Returns an array of a given object's property names (keys).
^ Use case: 
    Iterating through keys or checking available keys in an object.

*/

const user = { name: "Abhishek", age: 30, profession: "Developer" };

console.log(Object.keys(user)); // Output: [ 'name', 'age', 'profession' ]


// & ----------------- Object.values() -----------------

/*
^ Purpose: 
    Returns an array of a given object's property values.
^ Use case: 
    Useful when you only need the values for operations like summing or filtering.

*/

console.log(Object.values(user)) // Output: [ 'Abhishek', 30, 'Developer' ]

// & ----------------- Object.entries() -----------------

/*
^ Purpose: 
    Returns an array of a given object's own key-value pairs as [key, value].
^ Use case: 
    Useful for destructuring or iterating over both keys and values.

*/

console.log(Object.entries(user));

/*
Output:

[
  [ 'name', 'Abhishek' ],
  [ 'age', 30 ],
  [ 'profession', 'Developer' ]
]

*/

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`)
}

/*
Output:

name: Abhishek
age: 30
profession: Developer
*/


// & ----------------- Object.assign() -----------------

/*
^ Purpose: 
    Copies values from one or more source objects to a target object. Used for shallow cloning or merging objects.
^ Use case: 
    To clone objects or combine multiple objects.

*/

const source = {hobby: "Coding"};

const clone = Object.assign({}, user); // Shallow copy of 'user'

console.log(clone) // Output: { name: 'Abhishek', age: 30, profession: 'Developer' }


const merged = Object.assign({}, user, source); // Merging 'user' and 'source'
console.log(merged);

/*
Output:

{ name: 'Abhishek', age: 30, profession: 'Developer', hobby: 'Coding' }
*/

