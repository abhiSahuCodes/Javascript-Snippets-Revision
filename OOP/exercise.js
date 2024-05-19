/////////////////////////////////////////////////////
// #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h.
DATA CAR 2: 'Mercedes' going at 95 km/h.

*/

/* This can work but not recommended as it will be terrible for performance */

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;

//     this.accelerate = function() {
//         this.speed += 10;
//         console.log(`${this.make} is going at a speed of ${this.speed} km/h.`)
//     }

//     this.brake = function() {
//         this.speed -= 5;
//         console.log(`${this.make} is going at a speed of ${this.speed} km/h.`)
//     }
// }

/* This is recommended */

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at a speed of ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at a speed of ${this.speed} km/h.`);
};

const bmw = new Car('BMW', 110);

const mercedes = new Car('Mercedes', 100);

console.log(bmw.accelerate());
console.log(bmw.brake());
console.log(bmw.brake());

console.log(mercedes.accelerate());
console.log(mercedes.brake());
console.log(mercedes.brake());

/////////////////////////////////////////////////////
// #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h.

*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // Methods
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} car speed is now ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} car speed is now ${this.speed} km/h.`);
    return this; // for exercise 4 to perform chaining.
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford.speedUS);

ford.speedUS = 50;
console.log(ford);

/////////////////////////////////////////////////////
// #3

/* 
1. Use a constructor function to implement an Electric Car (called 'EV') as a CHILD "class" of 'CarObject'. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%.

*/

const CarObject = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

CarObject.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at a speed of ${this.speed} km/h.`);
};

CarObject.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at a speed of ${this.speed} km/h.`);
};

const EV = function (make, speed, charge) {
  CarObject.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(CarObject.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

// Testing the object

tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

/////////////////////////////////////////////////////
// #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%.

*/

// CarCl is already defined in exercise 2. So, just extending that.
// Just for chaining the brake method in CarCl to be updated to return this.

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

// Testing the Object

console.log(rivian);


rivian.accelerate().accelerate().accelerate().brake().chargeBattery(90).accelerate();

// console.log(rivian.#charge) // Can't access it.
console.log(rivian.speedUS);