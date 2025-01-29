/*
Question 1:
You are given an array of numbers, and you need to create a function that returns a new array where each element is 
the square of the corresponding element from the original array.

For example, given the array [1, 2, 3, 4], the function should return [1, 4, 9, 16].

*/

let array = [1, 2, 3, 4];

function duplicateNumber(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let sqNum;
    sqNum = arr[i] * arr[i];
    newArray.push(sqNum);
  }
  return newArray;
}

console.log(duplicateNumber(array));

// OR

function duplicateNumber(arr) {
  return arr.map((num) => num * num);
}

console.log(duplicateNumber(array));

/*
Question 2:
You have an object representing a user, like this:
let user = {
  name: "John",
  age: 30,
  country: "USA"
};

Write a function updateUser that updates the user's name and age based on the values passed to the function.

For example, if you call updateUser(user, "Jane", 25), it should update the user's name to "Jane" and age to 25.
*/

let user = {
  name: "John",
  age: 30,
  country: "USA",
};

function updateUser(user, newName, newAge) {
  user.name = newName;
  user.age = newAge;
  return user; // Return the updated user object
}

console.log(updateUser(user, "Jane", 25));

/*
You are working with an API that returns data in this format:
let users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Mike", age: 35 }
];

Write a function findUserById that takes an id as a parameter and returns the user object that has that id.

For example, calling findUserById(2) should return { id: 2, name: "Jane", age: 25 }.

*/

let users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Mike", age: 35 },
];

function findByUserId(id) {
  let user = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      user = { ...users[i] };
    }
  }

  return user;
}

console.log(findByUserId(1));

// OR

function findByUserId(id) {
  let user = null;

  users.forEach((element) => {
    if (element.id === id) {
      user = { ...element };
    }
  });

  return user;
}

console.log(findByUserId(2));

// OR

function findUserById(id) {
  return users.find((user) => user.id === id);
}

console.log(findUserById(3));

/*
Question 4:
You are given an array of numbers:

let numbers = [5, 8, 12, 15, 18];

Write a function filterEvenNumbers that filters out all odd numbers and returns only the even numbers from the array.

For example, calling filterEvenNumbers(numbers) should return [8, 12, 18].

*/

let numbers = [5, 8, 12, 15, 18];

function filterEvenNumbers(arr) {
  return (newArr = arr.filter((num) => num % 2 === 0));
}

console.log(filterEvenNumbers(numbers));

// OR

function filterEvenNumbers(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterEvenNumbers(numbers));

// OR

function filterEvenNumbers(arr) {
  let newArr = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      newArr.push(num);
    }
  }
  return newArr;
}

console.log(filterEvenNumbers(numbers));

/*
Question 5:
Write a function fetchUserData that uses a Promise to simulate an API call. 
The function should take a userId as an argument and resolve with a fake user object (e.g., { id: 1, name: "John Doe" }) after 2 seconds.

For example, calling fetchUserData(1) should return a promise that resolves to { id: 1, name: "John Doe" } after 2 seconds.

*/

function fetchUserData(id) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === id);

    setTimeout(() => {
      if (user) {
        console.log("User found!");
        resolve(user);
      } else {
        reject("User not found!");
      }
    }, 2000);
  });
}

fetchUserData(3)
  .then((data) =>
    console.log(`This is the user data for the ${data.id}:`, data)
  )
  .catch((error) => console.log(error));

/*
Question 6:
Write a function fetchAllUserData that takes an array of user IDs and uses fetchUserData to fetch data for all of them. 
Use Promise.all to ensure all the user data is fetched in parallel.

For example, calling fetchAllUserData([1, 2, 3]) should return a promise that resolves to an array of user objects, like this:

[
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mike" }
]

If any of the IDs don’t exist, the promise should reject with an appropriate error message.

*/

function fetchAllUserData(ids) {
  return Promise.all(ids.map((id) => fetchUserData(id))).then((users) =>
    users.map(({ id, name }) => ({ id, name }))
  );
}

fetchAllUserData([1, 2, 3])
  .then((filteredUsersData) => console.log(filteredUsersData))
  .catch((error) => console.log(error));

/*
Question 7:
Modify fetchAllUserData so that even if one of the user fetches fails (i.e., fetchUserData rejects), the function still returns the successful users instead of rejecting everything.

Hint: Use Promise.allSettled() instead of Promise.all.

For example, calling fetchAllUserData([1, 2, 4]) (where user with id: 4 doesn’t exist) should return:

[
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
]
*/

function fetchAllExistingUserData(ids) {
  return Promise.allSettled(ids.map((id) => fetchUserData(id))).then((users) =>
    users
      .filter(({ status }) => status === "fulfilled")
      .map(({ value }) => ({ id: value.id, name: value.name }))
  );
}

fetchAllExistingUserData([1, 2, 4])
  .then((filteredAllUsersData) => console.log(filteredAllUsersData))
  .catch((error) => console.log(error));

/*
We have used map(({ value }) => ({ id: value.id, name: value.name })) instead of map(({ id, name }) => ({ id, name })) as in the previous because
in the previous Promise.all, we get:
[
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Mike", age: 35 }
]

So, it is easy to iterate.
But in Promise.allSettled, we get:
[
  { status: "fulfilled", value: { id: 1, name: "John", age: 30 } },
  { status: "fulfilled", value: { id: 2, name: "Jane", age: 25 } },
  { status: "rejected", reason: "User not found!" } // This happens if a user is missing
]


*/
