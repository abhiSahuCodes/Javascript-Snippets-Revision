// ^ +++++++++++++++++++++++++++++++++ Difference between OBJECT and JSON ++++++++++++++++++++++++++++++++

// * JavaScript Objects and JSON (JavaScript Object Notation) have similarities, but they serve different purposes and have distinct differences. Here's a concise breakdown:

// & ----------------- JavaScript Objects -----------------

/*
^ Purpose: 
    Used in JavaScript to represent data and manipulate it within the program.
^ Format: 
    Defined using key-value pairs. Keys can be strings (implicitly) or identifiers (without quotes), and values can be any data type (string, number, array, object, function, etc.).
^ Functionality: 
    Can include methods (functions as values), support prototype inheritance, and allow manipulation of properties directly.
^ Usage:
    Directly used in JavaScript code.
*/

// * Syntax
const obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello!");
  },
};

// & ----------------- JSON (JavaScript Object Notation) -----------------

/*
^ Purpose: 
    A lightweight data-interchange format, designed to be language-agnostic and easily transmitted over a network.
^ Format: 
    A string representation of data. Keys must be strings (enclosed in double quotes), and values must be of simple data types (string, number, boolean, array, object, or null). 
    No functions, symbols, or undefined values are allowed.
^ Functionality: 
    Purely a data format, not executable or interactive.
^ Usage: 
    Used for storing and transmitting data, commonly in APIs or configuration files.
*/

// * Syntax

// ! It can't be written directly in JavaScript as it will give error.

/*

{
    "name": "John",
    "age": 30
}

*/

// & ----------------- Key Differences -----------------

/*
^   Feature	        JavaScript Objects	            JSON

    Purpose	        In-code data representation	    Data storage and transmission
    Keys	        Strings or identifiers	        Strings only (quoted)
    Values	        Any JS type (e.g., function)	Limited types (no functions)
    Format	        Flexible syntax	                Strict syntax (double quotes)
    Usage	        Within JS code	                Shared between systems

*/

// & ----------------- Conversion -----------------

// ^ Object to JSON
JSON.stringify();

const objToJSON = { name: "John", age: 30 };
const json = JSON.stringify(obj);
console.log(json); // '{"name":"John","age":30}'

// ^ JSON to Object
JSON.parse();

const jsonToObj = '{"name": "John", "age": 30}';
const obj2 = JSON.parse(jsonToObj);
console.log(obj2); // { name: 'John', age: 30 }
