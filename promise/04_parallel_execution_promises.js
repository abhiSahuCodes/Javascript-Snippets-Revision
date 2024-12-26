//^ ++++++++++++++++++++++++++++++++++++++++ PARALLEL EXECUTION PROMISES ++++++++++++++++++++++++++++++++++++++++

/*
In many cases, you may need to execute multiple asynchronous operations simultaneously (e.g., fetching data from different APIs) and wait for all of them to complete. 
This can be achieved using Promise.all or Promise.allSettled.

*/

/*
^ Key Methods for Parallel Execution:

^ Promise.all
    - Waits for all promises in an array to be resolved.
    - If any promise is rejected, the entire Promise.all is rejected immediately.

^ Promise.allSettled
    - Waits for all promises in an array to settle (fulfilled or rejected).
    - Always resolves with an array of objects containing the status and result of each promise.

^ Promise.race
    - Resolves or rejects as soon as the first promise in the array settles.

*/

// & -------------------- Example: Promise.all --------------------

// Fetching User and Orders Data Simultaneously

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched User Data");
      resolve({ id: 1, name: "Rohan" });
    }, 1000); // Simulate 1-second delay
  });
};

const fetchOrders = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched Orders Data");
      resolve([
        { orderId: 1, item: "Laptop" },
        { orderId: 2, item: "Smartphone" },
      ]);
    }, 2000); // Simulate 2-second delay
  });
};

Promise.all([fetchUser(), fetchOrders()])
  .then(([user, orders]) => {
    console.log("User:", user);
    console.log("Orders:", orders);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
Output:
    Fetched User Data
    Fetched Orders Data

    User: { id: 1, name: 'Rohan' }
    Orders: [ { orderId: 1, item: 'Laptop' }, { orderId: 2, item: 'Smartphone' } ]


*/

// Both operations start simultaneously. The results are available when the slower operation (fetchOrders) finishes.

// & -------------------- Example: Promise.allSettled --------------------

// Handle Success and Failures Together

const fetchUserInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched User Data");
      resolve({ id: 1, name: "Rohan" });
    }, 1000);
  });
};

const fetchOrdersInfo = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      console.error("Failed to fetch orders");
      reject("Orders API failed");
    }, 2000);
  });
};

Promise.allSettled([fetchUserInfo(), fetchOrdersInfo()]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise ${index + 1} fulfilled:`, result.value);
    } else {
      console.log(`Promise ${index + 1} rejected:`, result.reason);
    }
  });
});

/*
Output:

    Fetched User Data
    Failed to fetch orders - This is error message from fetchOrdersInfo function
    Promise 1 fulfilled: { id: 1, name: 'Rohan' }
    Promise 2 rejected: Orders API failed

*/

// Unlike Promise.all, it doesn't stop when a promise fails. Results include both successful and failed promises.

// & -------------------- Example: Promise.race --------------------

// Handling the First Settled Promise

const fetchSlow = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Slow operation completed");
      resolve("Slow Result");
    }, 3000); // Simulate 3-second delay
  });
};

const fetchFast = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fast operation completed");
      resolve("Fast Result");
    }, 1000); // Simulate 1-second delay
  });
};

Promise.race([fetchSlow(), fetchFast()])
  .then((result) => {
    console.log("Race winner:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/*
Output:
    Fast operation completed
    Race winner: Fast Result

    Slow operation completed (This comes after a delay)

*/

// Only the fastest promise (fetchFast) resolves. The slower promise (fetchSlow) is ignored.


