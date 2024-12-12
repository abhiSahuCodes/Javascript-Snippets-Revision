// ^ +++++++++++++++++++++++++++++++++ CREATING OBJECT SUMMARY ++++++++++++++++++++++++++++++++

// & ----------------- Unified Examples for Object Creation -----------------

/*
We will model a simple Car object with the following:
    - Properties: brand, model, and year.
    - Method: getDetails (returns a string with the car's details).

*/

// ~ 1. Using Object Literal

const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    getDetails() {
      return `${this.brand} ${this.model}, manufactured in ${this.year}`;
    }
  };
  
  console.log(car1.getDetails()); // Output: Toyota Camry, manufactured in 2022
  

// ~ 2. Using Object Constructor

const car2 = new Object();
car2.brand = "Tesla";
car2.model = "Model 3";
car2.year = 2023;

car2.getDetails = function() {
  return `${this.brand} ${this.model}, manufactured in ${this.year}`;
};

console.log(car2.getDetails()); // Output: Tesla Model 3, manufactured in 2023


// ~ 3. Using Factory Function

function createCar(brand, model, year) {
    return {
      brand,
      model,
      year,
      getDetails() {
        return `${this.brand} ${this.model}, manufactured in ${this.year}`;
      }
    };
  }
  
  const car3 = createCar("Honda", "Civic", 2021);
  console.log(car3.getDetails()); // Output: Honda Civic, manufactured in 2021


// ~ 4. Using Classes

class Car {
    constructor(brand, model, year) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `${this.brand} ${this.model}, manufactured in ${this.year}`;
    }
  }
  
  const car4 = new Car("Ford", "Mustang", 2020);
  console.log(car4.getDetails()); // Output: Ford Mustang, manufactured in 2020


// ~ 5. Using Constructor Functions

function CarConstructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  
    this.getDetails = function() {
      return `${this.brand} ${this.model}, manufactured in ${this.year}`;
    };
  }
  
  const car5 = new CarConstructor("BMW", "X5", 2019);
  console.log(car5.getDetails()); // Output: BMW X5, manufactured in 2019
  

// & ----------------- Comparison -----------------

/*
^ Method	        Code Simplicity	        Reusability	            Modern Usage

Object              Literals	            Easiest	                Low	Common

Object              Constructor	            Less concise	        Low	Rare

Factory             Functions	            Concise	High	        Moderate

Classes	            Structured	            High	                Preferred

Constructor         Structured	            High	                Legacy Usage
Functions

*/


// & ----------------- How This Helps -----------------

/*
Seeing the same example implemented in different ways makes it easier to remember the distinctions.

Focus on object literals and classes for modern JavaScript development.

Use factory functions if encapsulation or flexibility is required.

*/

