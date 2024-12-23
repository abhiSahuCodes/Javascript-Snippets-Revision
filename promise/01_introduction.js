//^ ++++++++++++++++++++++++++++++++++++++++ INTRODUCTION ++++++++++++++++++++++++++++++++++++++++

/*
A Promise is a JavaScript object that represents the result of an asynchronous operation. 
Think of it as a placeholder for a value that is not immediately available but will be resolved in the future. 
Promises make it easier to handle asynchronous tasks, such as fetching data from a server or performing a time delay.


^ What is a Promise?
A promise has three states:

^ Pending: 
    The initial state. The promise has started but is not yet fulfilled or rejected.
^ Fulfilled: 
    The operation has completed successfully, and the promise returns a value.
^ Rejected: 
    The operation has failed, and the promise returns an error.

The promise transitions from pending to either fulfilled or rejected once the operation is complete.

^ Key Methods
^ then(): 
    Used to handle the result of a fulfilled promise.
^ catch(): 
    Used to handle errors or rejected promises.
^ finally(): 
    Used to execute code after the promise is settled (fulfilled or rejected), regardless of the outcome.

*/

// ~ Basic Example

const promise = new Promise((resolve, reject) => {
  const success = true; // Change to false to test rejection
  if (success) {
    resolve("Operation succeeded!"); // Transition to 'fulfilled'
  } else {
    reject("Operation failed!"); // Transition to 'rejected'
  }
});

// Consuming the promise
promise
  .then((message) => {
    console.log("Fulfilled:", message); // Handle fulfillment
  })
  .catch((error) => {
    console.error("Rejected:", error); // Handle rejection
  })
  .finally(() => {
    console.log("Promise settled (fulfilled or rejected)."); // Always executed
  });

/*
^ Explanation:
A new promise is created using the Promise constructor.
It takes a function (called the executor) as an argument.

The executor function receives two parameters:
    - resolve: Call this when the operation is successful.
    - reject: Call this when the operation fails.

Depending on the value of success:
    - If success is true, the resolve function is called, transitioning the promise to the fulfilled state.
    - If success is false, the reject function is called, transitioning the promise to the rejected state.

The then() method is used to handle successful resolution.
The catch() method is used to handle errors or rejection.
The finally() method is always executed, regardless of the outcome.

*/

// ~ Practical Example

const fetchUserData = new Promise((resolve, reject) => {
  const userFound = true; // Simulate success or failure
  setTimeout(() => {
    if (userFound) {
      resolve({ id: 1, name: "Alice" }); // Fulfill with user data
    } else {
      reject("User not found!"); // Reject with an error message
    }
  }, 2000); // Simulate network delay
});

// Consume the promise
fetchUserData
  .then((user) => {
    console.log("User fetched:", user);
  })
  .catch((error) => {
    console.error("Error fetching user:", error);
  })
  .finally(() => {
    console.log("Fetch operation complete.");
  });

// ~ Fetching Data with Promises (Actual Use)

const fetchTodo = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        // If the response status is not 2xx, reject the promise
        reject(`HTTP Error: ${response.status}`);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => resolve(data)) // Resolve with the fetched data
    .catch((error) => reject(`Fetch Error: ${error}`)); // Handle network or parsing errors
});

// Consume the promise

fetchTodo
  .then((todo) => {
    console.log("Fetched Todo:", todo);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Fetch operation complete.");
  });
