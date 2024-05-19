// -----------------INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS---------------

// Person Constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Person Prototype
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

// Student Constructor
/*
const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

In the above student constructor the same firstName and birthYear is repeated.
We can get it from Person Constructor if we want the student to be the child
of Person.
*/

const Student = function (firstName, birthYear, course) {
  // We need call method to get 'this' of Person
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Making Student.__proto__ = Person.prototype
Student.prototype = Object.create(Person.prototype);

// Student Prototype
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const rohan = new Student('Rohan', 2000, 'Computer Science');

console.log(rohan);

rohan.introduce();

/*
To make the inheritance complete, we want the {Person.prototype to be the
prototype of Student.prototype}. And that is [Student.__proto__ = Person.prototype]
So, in that way new instances of Student can call the calcAge method from
Person.prototype.

Note:
This thing must be done before setting Student.prototype methods or properties. So, just after creating Student constructor.
Because:
Student.prototype = Object.create(Person.prototype);
Now, the Student.prototype is empty. And after that we should add methods and
properties to Student.prototype.

Note:
Never do this: Student.prototype = Person.prototype;
This will set them equal and the prototype of new instance of Student and new instance of Person will become same Person.prototype.
*/

// Calling calcAge for rohan
rohan.calcAge();

// Testing the inheritance chain

console.log(rohan.__proto__);
/* Has only introduce: f() and [[prototype]]: Object.. 
No constructor (as Object.create made a new object where no constructor is defined while linking prototypes) 
It points towards Person not Student but has the introduce function. 
*/
console.log(rohan.__proto__.__proto__);
// Has calcAge: f(), constructor, and [[prototype]]: Object

console.log(rohan instanceof Student); // true
console.log(rohan instanceof Person); // true ---strange behavior(as Student.prototype is linked to Person.prototype) and it should be for chain to work
console.log(rohan instanceof Object); // true hence the chain is set

/* 
To explicitly set constructor in rohan.__proto__ i.e. Student.prototype,
Do this:
*/

Student.prototype.constructor = Student;

// -----------------INHERITANCE BETWEEN CLASSES: ES6 CLASSES---------------

// Using the same PersonCl of scriptClasses.js

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const date = new Date();
    const year = date.getFullYear();
    console.log(year - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      console.log(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there');
  }
}

// For StudentCl class to inherit from PersonCl class we use extends
// For the constructor of StudentCl to get constructor of PersonCl we use super()

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first - to access this
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  // If calcAge is defined here it will override the previous one
  // This comes first in prototype chain that is in Student.prototype
  calcAge() {
    const date = new Date();
    const year = date.getFullYear();
    console.log(`I am ${year - this.birthYear} years old.`);
  }
}

const ronak = new StudentCl('Ronak Pradhan', 2001, 'Biology');
console.log(ronak);

ronak.introduce();
ronak.calcAge();
console.log(ronak.__proto__); // StudentCl.prototype // has introduce
console.log(ronak.__proto__.__proto__); // PersonCl.prototype // has calcAge

// -----------------INHERITANCE BETWEEN CLASSES: Object.create()---------------

const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};


const rohit = Object.create(PersonProto);

console.log(rohit); // {}

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const Jitendra = Object.create(StudentProto);

Jitendra.init('Jitendra', 1991, "Biology");
Jitendra.introduce();
Jitendra.calcAge();