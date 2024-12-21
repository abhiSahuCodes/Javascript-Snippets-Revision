// // ^ +++++++++++++++++++++++++++++++++ OBJECT COMPARISION ++++++++++++++++++++++++++++++++

// /*
// In JavaScript, comparing objects can be tricky because of the way objects are stored and referenced in memory.
// Let's dive into the concepts of comparing object references and understanding deep and shallow equality.

// */

// // & ----------------- Comparing Object References -----------------

// /*
// ^ Concept:
//     Objects are reference types in JavaScript. When you compare two objects using === or ==,
//     it checks whether both variables point to the same memory location, not whether they have the same content.

// */

// // ~ Example

// const obj1 = { a: 1 };
// const obj2 = { a: 1 };
// const obj3 = obj1;

// console.log(obj1 === obj2); // Output: false
// console.log(obj1 === obj3); // Output: true

// /*
// Even if obj1 and obj2 have identical properties and values, they are separate objects stored in different memory locations.
// But obj1 and obj3 share the same memory location, so they are considered equal as they point to the same object after obj3 = obj1.

// */

// const obj4 = { a: 1 };
// const obj5 = obj4;

// console.log(obj4 === obj5); // Output: true (same memory reference)

// // Here, obj5 is a reference to obj4. Any changes to obj5 will reflect in obj4.

// obj5.b = 2;

// console.log(obj4); // Output: { a: 1, b: 2 }

// // ~ Comparing Nested Objects

// // For nested objects, the comparison behaves the same way. Only the top-level reference is checked.

// const obj6 = { a: { b: 1 } };
// const obj7 = { a: { b: 1 } };

// console.log(obj6 === obj7); // Output: false (different memory references)

// const obj8 = obj6.a;
// const obj9 = obj7.a;

// console.log(`obj8: ${JSON.stringify(obj8)}, obj9: ${JSON.stringify(obj9)}`); // Output: obj8: {"b":1}, obj9: {"b":1}
// console.log("obj8:", obj8, "obj9:", obj9); // Output: obj8: { b: 1 } obj9: { b: 1 }

// // ~ Comparing Arrays and Functions (as Objects)

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = arr1;

// console.log(arr1 === arr2); // false (different arrays, different memory locations)
// console.log(arr1 === arr3); // true (same array, same memory reference)

// const func1 = () => {};
// const func2 = () => {};
// const func3 = func1;

// console.log(func1 === func2); // false (different function objects)
// console.log(func1 === func3); // true (same function reference)

// // ~ Using Object.is() for Reference Comparison

// // The Object.is() method works similarly to === but with special rules for NaN, +0, and -0.

// const obj10 = { a: 1 };
// const obj11 = obj10;

// console.log(Object.is(obj10, obj11)); // true (same reference)
// console.log(Object.is(obj10, { a: 1 })); // false (different objects)

// console.log(Object.is(NaN, NaN)); // true
// console.log(+0 === -0); // true
// console.log(Object.is(+0, -0)); // false

// // ~ Edge Case: Comparing null and undefined

// console.log(null === null); // true
// console.log(undefined === undefined); // true
// console.log(null === undefined); // false (different types)

// const obj12 = null;
// const obj13 = {};

// console.log(obj12 === obj13); // false

// // ~ Practical Use

// const userCache = new Map();
// const user = { id: 1, name: "Rohan" };
// userCache.set(user, "cached");

// console.log(userCache.has(user)); // true
// console.log(userCache.has({ id: 1, name: "Rohan" })); // false (different objects)

// & ----------------- Deep and Shallow Equality -----------------

// To compare the contents of objects, we need to go beyond reference equality.

// ~ Shallow Equality

/*
Shallow Equality
Definition: A shallow comparison checks only the first level of properties in an object and ensures they have the same values. 
It doesn't account for nested objects.

*/

// Example
const obj15 = { a: 1, b: 2 };
const obj16 = { a: 1, b: 2 };
const obj17 = { a: 1, b: { c: 2 } };
const obj18 = { a: 1, b: { c: 2 } };
const obj19 = { a: 1, b: { c: 3 } };

function shallowEqual(objectA, objectB) {
  if (objectA === objectB) {
    return true;
  }

  if (
    typeof objectA !== "object" ||
    objectA === null ||
    typeof objectB !== "object" ||
    objectB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objectA);
  const keysB = Object.keys(objectB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let key in objectA) {
    if (objectA[key] !== objectB[key]) {
      return false;
    }
  }

  return true;
}

console.log(shallowEqual(obj15, obj16)); // true (all top-level properties match)
console.log(shallowEqual(obj15, obj17)); // false (nested structure in obj7 is different)
console.log(shallowEqual(obj17, obj18)); // false (nested objects have different references)
console.log(shallowEqual(obj17, obj19)); // false (nested property values differ)

// ~ Deep Equality

/*
 Compares all levels of an object, including nested objects and arrays, to ensure complete structural and value equality. 
 This typically involves recursion to traverse all levels of the objects.

*/

// Example

function deepEqual(objA, objB) {
  if (objA === objB) return true;

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(obj15, obj16)); // true (all levels match)
console.log(deepEqual(obj15, obj17)); // false (structure differs, obj17 has a nested object)
console.log(deepEqual(obj17, obj18)); // true (all levels, including nested, match)
console.log(deepEqual(obj17, obj19)); // false (nested property values differ)
