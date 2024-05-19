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



/////////////////////////////////////////////////////
// #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Methods
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} car speed is now ${this.speed} km/h.`)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} car speed is now ${this.speed} km/h.`)
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
console.log(ford)