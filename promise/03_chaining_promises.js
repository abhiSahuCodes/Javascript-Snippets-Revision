//^ ++++++++++++++++++++++++++++++++++++++++ CHAINING PROMISES ++++++++++++++++++++++++++++++++++++++++

/*
Promise chaining allows you to sequence multiple asynchronous operations where the output of one step becomes the input for the next. 
This is done by returning a value or another promise from a .then() method, and attaching subsequent .then() calls.

*/

/*
^ Why Chain Promises?

Avoid callback hell by structuring the code logically.
Manage dependencies between asynchronous tasks (e.g., fetch user details, then fetch their orders).
Handle errors centrally in the chain using .catch().

*/

// & -------------------- Basics of chaining promises --------------------

new Promise((resolve, reject) => {
  resolve(1); // Start with the value 1
})
  .then((value) => {
    console.log(value); // Logs: 1
    return value * 2; // Returns 2
  })
  .then((value) => {
    console.log(value); // Logs: 2
    return value * 3; // Returns 6
  })
  .then((value) => {
    console.log(value); // Logs: 6
  })
  .catch((error) => {
    console.error("Error:", error);
  });


/*
^ How It Works:

The first .then() receives the resolved value 1, processes it, and returns 2.
The second .then() receives 2, processes it, and returns 6.
The chain continues until all .then() methods are resolved or an error occurs.

*/