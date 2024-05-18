/////////////////////////////////////////////////////
// #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

/* This can work but not recommended */

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

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h.`)
}               

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at a speed of ${this.speed} km/h.`)
}   

const bmw = new Car('BMW', 110);

const mercedes = new Car('Mercedes', 100);


console.log(bmw.accelerate());
console.log(bmw.brake());
console.log(bmw.brake());

console.log(mercedes.accelerate());
console.log(mercedes.brake());
console.log(mercedes.brake());

