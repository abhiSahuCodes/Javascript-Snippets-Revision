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

