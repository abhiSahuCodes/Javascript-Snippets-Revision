// ++++++++++++++++++++++++++++++++++++++++++++++ 1. Pop ++++++++++++++++++++++++++++++++++++++++++++++

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const element = array.pop();

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(element); // 10 Gives only deleted element

// ++++++++++++++++++++++++++++++++++++++++++++++ 2. Push +++++++++++++++++++++++++++++++++++++++++++++++

let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];

const elementOne = arrayOne.push(18);

console.log(arrayOne); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 18]
console.log(elementOne); // 11 Gives only length

// ++++++++++++++++++++++++++++++++++++++++++++++ 3. Shift +++++++++++++++++++++++++++++++++++++++++++++++

let arrayTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const elementTwo = arrayTwo.shift();

console.log(arrayTwo); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(elementTwo); // 1 Gives only deleted element

// +++++++++++++++++++++++++++++++++++++++++++++ 4. Unshift ++++++++++++++++++++++++++++++++++++++++++++++

let arrayThree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const elementThree = arrayThree.unshift(0);

console.log(arrayThree); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(elementThree); // 11 Gives only length

// ++++++++++++++++++++++++++++++++++++++++++++++ 5. Slice +++++++++++++++++++++++++++++++++++++++++++++++

// a. Positive index

let arrayFour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const elementFour = arrayFour.slice(2, 5); // The first one is the starting index and the second one is the ending index but the ending index is not included

console.log(arrayFour); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(elementFour); // [3, 4, 5] Gives only deleted element

// b. Negative index

const negativeSlice = arrayFour.slice(-3);

console.log("negativeSlice: ", negativeSlice); //negativeSlice:  [ 8, 9, 10 ]

// ++++++++++++++++++++++++++++++++++++++++++++++++ 6. Splice +++++++++++++++++++++++++++++++++++++++++++++++++

let arrayFive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. For deleting

const elementFive = arrayFive.splice(2, 5); // Arguments: - 1. Starting index - 2. Number of elements to be deleted

console.log(arrayFive); // [1, 2, 8, 9, 10]

console.log(elementFive); // [3, 4, 5, 6, 7] Gives only deleted element

let arr = [1, 2, 3, 4, 5];
const arrSplicedElement = arr.splice(-2, 1); // Arguments: - If starting index is in negative, then -1 will be last element of the array and so here -2 will be second last element
console.log(arr); // [1, 2, 3, 5]
console.log(arrSplicedElement); // 4

// b. For adding

const elementSix = arrayFive.splice(2, 0, 3, 4, 5); // Arguments: - 1. Starting index - 2. Number of elements to be deleted - 3. Elements to be added

console.log(arrayFive); // [1, 2, 3, 4, 5, 8, 9, 10]

console.log(elementSix); // [] Gives only deleted element

// c. For replacing

const elementSeven = arrayFive.splice(2, 3, 311, 322, 333); // Arguments: - 1. Starting index - 2. Number of elements to be deleted - 3. Elements to be added

console.log(arrayFive); // [1, 2, 311, 322, 333, 8, 9, 10]

console.log(elementSeven); // [3, 4, 5] Gives only deleted element

let arr2 = [
  "apple",
  "mango",
  "strawberry",
  "nothing",
  "everything",
  "anything",
  "grapes",
  "oranges",
];

const e1 = arr2.splice(2, 3, "something", "kiwi", "lemon");

console.log(arr2); // ['apple', 'mango', 'something', 'kiwi', 'lemon', 'anything', 'grapes', 'oranges'   ]
console.log(e1); // [ 'strawberry', 'nothing', 'everything' ]const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// ++++++++++++++++++++++++++++++++++++++++++++++++ 7. Concat +++++++++++++++++++++++++++++++++++++++++++++++++

const arrayAj = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const arrayKt = ["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"];

const resultConcat = arrayAj.concat(arrayKt);

console.log(resultConcat);

// +++++++++++++++++++++++++++++++++++++++++++++++++ 8. ForEach +++++++++++++++++++++++++++++++++++++++++++++++++

const arrayFor = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const resultForEach = arrayFor.forEach((element) => element + "A");

console.log(resultForEach); // undefined   forEach returns undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++ 9. Map +++++++++++++++++++++++++++++++++++++++++++++++++

const resultMap = arrayFor.map((element) => element + "A");

console.log(resultMap); // [ 'aA', 'bA', 'cA', 'dA', 'eA', 'fA', 'gA', 'hA', 'iA', 'jA' ] Returns a new array

// +++++++++++++++++++++++++++++++++++++++++++++++++ 10. Filter +++++++++++++++++++++++++++++++++++++++++++++++++

const resultFilter = arrayFor.filter(
  (element) => element === "a" || element === "j"
);

console.log(resultFilter); // [ 'a', 'j' ] Returns a new array

console.log(arrayFor); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ] This still remains unchanged

// ++++++++++++++++++++++++++++++++++++++++++++++++ 11. Reduce +++++++++++++++++++++++++++++++++++++++++++++++++

let arrayItemPrice = [100, 200, 300, 500, 900, 1100, 1500];

let initialValue = 25;
let currentIndex = 2;

const resultReduce = arrayItemPrice.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  console.log(array); // [ 100, 200, 300, 500, 900, 1100, 1500 ]
  if (currentIndex >= 2) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
},
initialValue);

console.log(resultReduce); // 4325

const resultReduceSimple = arrayItemPrice.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(resultReduceSimple); // 4600

// ++++++++++++++++++++++++++++++++++++++++++++++++ 12. Find +++++++++++++++++++++++++++++++++++++++++++++++++

const arrayFind = [10, 15, 20, 25, 21, 22, 26, 29];

const resultFind = arrayFind.find((element) => element % 3 === 0);

console.log(resultFind); // 15 Gives the first element that matches the conditiion

const numbers = [4, 9, 16, 25, 29, 3];

const found = numbers.find((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
  return element > 15;
});

console.log(`Found Element: ${found}`);

// ++++++++++++++++++++++++++++++++++++++++++++++++ 13. FindIndex +++++++++++++++++++++++++++++++++++++++++++++++++

const resultFindIndex = numbers.findIndex((element) => element > 15);

console.log(resultFindIndex); // 2 Gives the index of the first element that matches the conditiion

// ++++++++++++++++++++++++++++++++++++++++++++++++ 14. FindLastIndex +++++++++++++++++++++++++++++++++++++++++++++++++

const resultFindLastIndex = numbers.findLastIndex((element) => element > 15);

console.log(resultFindLastIndex); // 4 Gives the index of the last element that matches the conditiion

// ++++++++++++++++++++++++++++++++++++++++++++++++ 15. IndexOf +++++++++++++++++++++++++++++++++++++++++++++++++

// array.indexOf(searchElement, fromIndex = 0); Default 0 is the starting index if not mentioned explicitly

const fruits = ["apple", "banana", "cherry", "apple"];

console.log(fruits.indexOf("apple")); // Output: 0
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.indexOf("grape")); // Output: -1

// indexOf() is still working on the original array, not a subarray. So, it gives answer corresponding to the original array.
// The fromIndex only affects where the search starts—it doesn’t "reset" indices.

console.log(fruits.indexOf("apple", 1)); // Output: 3 (starts searching from index 1) It searches from ["banana", "cherry", "apple"], Now apple at index 3 from the original array
console.log(fruits.indexOf("cherry", -2)); // Output: 2 (negative index starts search from array.length - 2) It searches from ["cherry", "apple"], Now cherry at index 2 from the original array.

// ++++++++++++++++++++++++++++++++++++++++++++++++ 16. Includes +++++++++++++++++++++++++++++++++++++++++++++++++

// array.includes(element, fromIndex)

const arrayIncludes = ["apple", "banana", "cherry", "apple"];

console.log(arrayIncludes.includes("apple")); // true
console.log(arrayIncludes.includes("banana")); // true
console.log(arrayIncludes.includes("grape")); // false

// ++++++++++++++++++++++++++++++++++++++++++++++++ 17. Sort +++++++++++++++++++++++++++++++++++++++++++++++++

// Sorts the array. By Default: Sorts in Ascending Order as strings. Modifies the original array

// array.sor(compareFunction)

const nums = [10, 2, 5, 1, 3];

nums.sort();

console.log(nums); // [ 1, 10, 2, 3, 5 ]

/*
Custom Sorting with compareFunction:

You can provide a compareFunction to sort numbers or other data types correctly. 
The compareFunction takes two arguments, a and b (representing two elements from the array), and returns:

A negative value: If a should come before b.
A positive value: If b should come before a.
0: If they are considered equal.

//  nums.sort(function(a, b) { return a - b; }); // Ascending Order
//  nums.sort(function(a, b) { return b - a; }); // Descending Order
*/

const numArray = [10, 2, 5, 1, 3];

numArray.sort((a, b) => a - b);

console.log(numArray); // [ 1, 2, 3, 5, 10 ]

numArray.sort((a, b) => b - a);

console.log(numArray); // [ 10, 5, 3, 2, 1 ]

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

// Sorting by age (ascending)
people.sort((a, b) => a.age - b.age);
console.log(people);
// [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// ++++++++++++++++++++++++++++++++++++++++++++++++ 18. Reverse +++++++++++++++++++++++++++++++++++++++++++++++++

const arrayReverse = [1, 2, 3, 4, 5];

console.log(arrayReverse.reverse()); // [5, 4, 3, 2, 1] Modifies the original array

// ++++++++++++++++++++++++++++++++++++++++++++++++ 19. Join +++++++++++++++++++++++++++++++++++++++++++++++++

// Join all elements of an array into a string.

const joinFruits = ["apple", "banana", "cherry"];

console.log(joinFruits.join()); // "apple,banana,cherry" Modifies the original array into a string

console.log(joinFruits.join("-")); // "apple-banana-cherry" Modifies the original array into a string with custom separator

console.log(joinFruits.join("")); // "applebananacherry" Modifies the original array into a string with no separator

const joinNumbers = [1, 2, 3, 4];
console.log(joinNumbers.join(":")); // Output: "1:2:3:4"

const emptyArray = [];
console.log(emptyArray.join("-")); // Output: "" Nothing is showed in terminal (A blank space)

// +++++++++++++++++++++++++++++++++++++++++++++++ 20. Every +++++++++++++++++++++++++++++++++++++++++++++++++

// Tests whether all elements in the array pass the test implemented by the provided function.

/* 
The every() method in JavaScript checks whether all elements in an array pass a given test (implemented as a callback function). 
It returns true if all elements satisfy the condition, otherwise, it returns false(even one element doesn't satisfy the condition).

Stops checking as soon as a condition fails (short-circuits for efficiency).
*/

// array.every((element, index, array) => thisArg)

const EveryNumbers = [2, 4, 6, 8];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // Output: true

const mixedNumbers = [2, 3, 4];
const allEvenMixed = mixedNumbers.every((num) => num % 2 === 0);
console.log(allEvenMixed); // Output: false

// +++++++++++++++++++++++++++++++++++++++++++++++ 21. Some +++++++++++++++++++++++++++++++++++++++++++++++++

/*
The some() method in JavaScript tests whether at least one element in an array passes a specified test (provided as a callback function). 
If any element satisfies the condition, it returns true. If none do, it returns false.

Returns:
  - true: If at least one element passes the test.
  - false: If no elements pass the test.
*/

// array.some((element, index, array) => thisArg)

const words = ["apple", "banana", "cherry"];
const hasLetterA = words.some((word) => word.includes("a"));
console.log(hasLetterA); // Output: true

const emptyArraySome = [];
const result = emptyArray.some((x) => x > 0);
console.log(result); // Output: false
// Reason: `some()` always returns false for an empty array.

const someNumbers = [10, 20, 30];
const condition = numbers.some((num, index, array) => num > array[0]);
console.log(condition); // Output: true (20 and 30 are greater than 10)

// ++++++++++++++++++++++++++++++++++++++++++++++++ 22. flatMap +++++++++++++++++++++++++++++++++++++++++++++++++

/*
The flatMap() method in JavaScript is a combination of map() and flat(). 
It applies a callback function to each element of the array (like map()), and then flattens the resulting array by one level (like flat(1)).

flatMap() flattens the mapped array by one level only.
Does not mutate the original array.
Useful for tasks like filtering, transforming, and flattening arrays in a single step.

Returns:
A new flattened array created by applying the callback and flattening the result by one level.
*/

// Examples:

// 1. Doubling and flattening:

const flatMapNumbers = [1, 2, 3];
const flatMapresult = flatMapNumbers.flatMap((num) => [num, num * 2]);
console.log(flatMapresult); // Output: [1, 2, 2, 4, 3, 6]

// 2. Removing empty elements:

const flatMapwords = ["hello", "", "world"];
const nonEmptyWords = words.flatMap((word) => (word ? [word] : []));
console.log(nonEmptyWords); // Output: ["hello", "world"]

// 3. Splitting strings and flattening:

const flatMapSentences = ["Hello world", "JavaScript is awesome"];
const flatMapWordResult = flatMapSentences.flatMap((sentence) =>
  sentence.split(" ")
);
console.log(flatMapWordResult); // Output: ["Hello", "world", "JavaScript", "is", "awesome"]

// 4. Flattening deeper structures (limited to one level):

const flatMapNested = [1, [2, [3]]];
const flattened = flatMapNested.flatMap((num) => num);
console.log(flattened); // Output: [1, 2, [3]]

// Comparison with map() + flat()

// If you use map() followed by flat(), it produces the same result, but flatMap() is more efficient.

// Example using map() and flat():

const numarr = [1, 2, 3];
const resultArr = numbers.map((num) => [num, num * 2]).flat();
console.log("FlatAndMap: ", resultArr); // Output: FlatAndMap:[ 4,  8,  9, 18, 16,  32, 25, 50, 29, 58, 3, 6]

const resultArrflatMap = numbers.flatMap((num) => [num, num * 2]);
console.log("FlatMap: ", resultArrflatMap); // Output: FlatMap: [1, 2, 2, 4, 3, 6]\



// ++++++++++++++++++++++++++++++++++++++++++++++++ 23. Flat +++++++++++++++++++++++++++++++++++++++++++++++++

/*
The flat() method in JavaScript is used to flatten an array by reducing its nested structure. 
By default, it flattens an array by one level, but you can specify the depth of flattening.

Returns:
A new array with the sub-array elements concatenated into it up to the specified depth.

*/

// array.flat(depth)

/*
Parameters
  - depth (optional): An integer specifying the depth level to flatten.
  - Defaults to 1 if not provided.
  - Use Infinity to completely flatten deeply nested arrays.

*/

// Examples:

// 1. Flattening by one level (default):

const arrFlat1 = [1, [2, [3, [4]]]];
console.log(arrFlat1.flat()); // Output: [1, 2, [3, [4]]]

// 2. Specifying a depth:

const arrFlat2 = [1, [2, [3, [4]]]];
console.log(arrFlat2.flat(2)); // Output: [1, 2, 3, [4]]

// 3. Completely flattening an array:

const arrFlat3 = [1, [2, [3, [4]]]];
console.log(arrFlat3.flat(Infinity)); // Output: [1, 2, 3, 4]

// 4. Flattening an already flat array:

const arrFlat4 = [1, 2, 3];
console.log(arrFlat4.flat()); // Output: [1, 2, 3]

// 5. Flattening an array with empty slots:

// The flat() method removes empty slots (sparse elements) in an array.

const arrFlat5 = [1, , 3, [4, , 6]];
console.log(arrFlat5.flat()); // Output: [1, 3, 4, 6]

/*
Key Points:

  - flat() does not modify the original array; it returns a new one.
  - Removing empty slots is an additional feature.
  - Use in combination with other methods like map() to process and flatten arrays efficiently.

*/

