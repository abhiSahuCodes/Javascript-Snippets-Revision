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
