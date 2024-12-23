//^ ++++++++++++++++++++++++++++++++++++++++ CREATING PROMISES ++++++++++++++++++++++++++++++++++++++++

/*
Creating a promise involves using the Promise constructor. 
This constructor accepts a function (called the executor) that defines the asynchronous operation. The executor function is passed two arguments:

    resolve: A function that you call when the operation succeeds.
    reject: A function that you call when the operation fails.
*/

//

// ~ Steps to create a promise

// 1. Use the |Promise| constructor

// Syntax:

const promise = new Promise((resolve, reject) => {
  // Perform an operation (asynchronous or synchronous)
  // Call resolve(value) if the operation succeeds
  // Call reject(error) if the operation fails
});

// 2. Simulate an Operation

/*
You can simulate an asynchronous operation using setTimeout, API calls, or any task that doesn’t produce an immediate result.
*/

// & -------------------- Example: Simulating an Asynchronous Task --------------------

// This promise simulates a task that completes after 2 seconds:

const task = new Promise((resolve, reject) => {
  const success = true; // Simulate a condition

  setTimeout(() => {
    if (success) {
      resolve("Task completed successfully!"); // Fulfill the promise
    } else {
      reject("Task failed."); // Reject the promise
    }
  }, 2000); // Simulate a 2-second delay
});

// Consuming the promise
task
  .then((message) => {
    console.log("Success:", message); // Log the success message
  })
  .catch((error) => {
    console.error("Error:", error); // Log the error message
  })
  .finally(() => {
    console.log("Task is done."); // Always runs
  });

// & -------------------- Example: Coin Toss --------------------

/*
Write a promise that simulates flipping a coin:

    - Resolve with "Heads" if the result is true.
    - Reject with "Tails" if the result is false.

*/

const flipCoin = new Promise((resolve, reject) => {
  const isHead = Math.random() > 0.5; // Random Boolean

  if (isHead) {
    resolve("Heads");
  } else {
    reject("Tails");
  }
});

flipCoin
  .then((result) => {
    console.log(`The coin flips and points: ${result}`);
  })
  .catch((result) => {
    console.log(`The coin flips and points: ${result}`);
  })
  .finally(() => {
    console.log(`The coin toss is complete.`);
  });

/*
Output:
    The coin flips and points: Heads
    The coin toss is complete.

*/

