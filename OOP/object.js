// -----------------Object.create()-------------------

/*
Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

PersonProto is a prototype of any object that is created using 
Object.create(). So, dhoni is an object created using PersonProto. So, PersonProto becomes the prototype of dhoni.
At first the newly created object is empty. The properties of 
the object need to be set using the object literal syntax.

*/








const PersonProto = {
    calcAge() {
        console.log(new Date().getFullYear() - this.birthYear);
    },

    // This is needed for the Way 2 of setting properties
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const dhoni = Object.create(PersonProto);

console.log(dhoni);

// These properties can be set using this way - Way 1
dhoni.name = 'Mahendra Singh Dhoni';
dhoni.birthYear = 1981;

dhoni.calcAge();
console.log(dhoni.__proto__); // PersonProto
console.log(dhoni.__proto__ === PersonProto); // true


const rohit = Object.create(PersonProto);

// These properties can be set using this way - Way 2
rohit.init('Rohit', 1987);

rohit.calcAge();