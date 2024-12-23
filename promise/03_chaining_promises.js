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

// & -------------------- Example: Chaining Promises with API Calls --------------------

// Fetching user data
const fetchUser = () => {
  return new Promise((resolve, reject) => {
    fetch("https://dummyapi.online/api/users/1")
      .then((response) => {
        if (!response.ok) {
          reject(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then((userData) => {
        console.log("Fetched User Data:", userData);
        resolve(userData);
      })
      .catch((error) => {
        reject(`Fetch Error: ${error}`);
      });
  });
};

// Fetching user orders
const fetchUserOrders = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetched Orders for User ID: ${userId}`);
      resolve([
        {
          orderId: 1,
          laptop: "Laptop",
        },
        {
          orderId: 2,
          laptop: "Smartphone",
        },
      ]);
    }, 1500); // For 1.5-second delay
  });
};

// Chaining promises

fetchUser()
  .then((user) => {
    const { id, name, address } = user;
    console.log(`User Name: ${name}`);
    console.log(
      `User Address: ${address.street}, ${address.city}, ${address.state} ${address.zipcode}`
    );
    return fetchUserOrders(id); // Fetch user's orders
  })
  .then((orders) => {
    console.log("Orders:", orders);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Operation complete.");
  });
