//^ ++++++++++++++++++++++++++++++++++++++++ ADVANCED PROMISE ++++++++++++++++++++++++++++++++++++++++

// These are advanced concepts and techniques for working with promises, helping you write more efficient, robust, and maintainable asynchronous code.



// & -------------------- 1. Combining Promises with Promise.any --------------------

// Promise.any waits for the first fulfilled promise and ignores rejections unless all promises are rejected.

const fetchFromFastAPI = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Fast API response"), 1000);
  });

const fetchFromSlowAPI = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Slow API response"), 3000);
  });

const fetchWithError = () =>
  new Promise((_, reject) => {
    setTimeout(() => reject("API Error"), 1000);
  });

Promise.any([fetchFromFastAPI(), fetchFromSlowAPI(), fetchWithError()])
  .then((result) => {
    console.log("First fulfilled promise:", result);
  })
  .catch((error) => {
    console.error("All promises rejected:", error.errors);
  });

/*
Output:
    First fulfilled promise: Fast API response

If all are rejected, then:
    All promises rejected: [ 'Fast API response', 'Slow API response', 'API Error' ]

*/



// & -------------------- 2. Sequential Execution with reduce --------------------

// Sometimes you need to execute promises sequentially instead of in parallel. This can be achieved using Array.reduce.

const tasks = [
  () => Promise.resolve("Task 1 completed."),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Task 2 completed."), 1000)
    ),
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Task 3 completed."), 500)
    ),
];

tasks
  .reduce((prevPromise, task) => {
    return prevPromise.then(() => task().then(console.log));
  }, Promise.resolve())
  .then(() => console.log("All tasks completed."));

/*
  Output:
  Task 1 completed.
  Task 2 completed.
  Task 3 completed.
  All tasks completed.

  */

/*
  Here, the tasks are fulfilled in a serial manner. The Promise.resolve() in tasks.reduce is given as the reduce function needs an intial promise.
  This promise is not created by the user. When the reduce function starts it becomes as a prevPromise, making the first iteration starts with a
  resolved promise and then all given promises are fulfilled or rejected in a series.

  This use of Promise.resolve() as the first resolved promise leads to correct execution of given promises in the array. Otherwise, if task()[0]
  is given as the first promise then it will be treated differently then other promises in the array i.e. task()[1], and task()[2].

  Though, the task()[2] is faster than task()[1], it waits for the task()[1] to complete, and then it is resolved.

  This way we can perform a series of promise execution irrespective of their time to resolve. This is useful when we want a series of API to be fetched
  in a manner but they are fetched with variable speed and we want a slower API response to show earlier than a fast API response.

*/



// & -------------------- 3. Custom Timeout with Promises --------------------

// To create a custom timeout for a promise to prevent waiting indefinitely for a slow or unresponsive operation.

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fetched Data");
    }, 3000);
  });
};

// If an API is unresponsive, we should not wait forever for it to complete.
// For that a custom timeout can be created.
// This is done by using Promise.race().

// Here, for slow response/ unresponsive API fetch simulation leading to a timeout, we can give less time than the fetchData time.

const withTimeout = (promise, timeout) => {
  return Promise.race([
    promise, // The original promise i.e. fetchData
    new Promise((_, reject) =>
      setTimeout(() => {
        reject(new Error("Operation timed out"));
      }, timeout)
    ),
  ]);
};

withTimeout(fetchData(), 2000)
  .then((result) => console.log("Result:", result))
  .catch((error) => console.error("Error:", error.message));

/*
Output:
    Error: Operation timed out

    If the timeout is more than the fetchData time, then the original promise will be resolved.

    Result: Fetched Data

*/
    