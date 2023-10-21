'use strict';
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do like this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automaticaly return {}

const jonas = new Person('Jonas', 1992);
const matilda = new Person('Matilda', 1995);
const jack = new Person('Jack', 1998);

console.log(jonas, matilda, jack);
console.log(jonas instanceof Person);

Person.hey = function () {
  console.log('hey there');
  console.log(this);
};
Person.hey();
//jonas.hey();
//Prototype inheritance
// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);

const arr = [1, 23, 4, 5, 5, 4, 23]; // new Array
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

//Never do like this
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
const h1 = document.querySelector('h1');
console.log(h1);
console.dir(h1);

//Coding chalange
console.log('__________Coding chalange_________________');

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  console.log(`${this.make} is speed ${(this.speed = this.speed + 10)}`);
};

Car.prototype.brake = function () {
  console.log(`${this.make} is speed ${(this.speed = this.speed - 10)}`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

//class expratiorn
//const PersonCL = class {};

//Inheritence
const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`Tesla with a charge of ${this.charge}%`);
};
ElectricCar.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new ElectricCar('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
tesla.brake();
console.log(tesla.charge);
tesla.chargeBattery(20);

console.log('__________Coding chalange_________________');

// class decloration ES6
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  introduce() {
    console.log(`My name is ${this.fullName} `);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name!`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    return this._fullName;
  }
}

// Jessica object
const jessica = new PersonCL('Jyssica Devis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCL.prototype);

// PersonCL.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
//jessica.greet();
const walter = new PersonCL('Walter White', 1965);

//Inheritance ES6
class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    //Always need to happen first!;
    super(fullName, birthYear);
    this.course = course;
  }

  calcAge() {
    console.log(
      `I am ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      } `
    );
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}
const marta = new StudentCL('Marta Taa', 2012, 'Computer cince');

console.log(marta);
marta.introduce();
marta.calcAge();

const account = {
  owner: 'jonas',
  movments: [200, 530, 120, 300],

  get latest() {
    return this.movments.slice(-1).pop();
  },
  set latest(mov) {
    this.movments.push(mov);
  },
};

console.log(account.latest);
console.log((account.latest = 50));
console.log(account.movments);

//Object.create
//prototype inheritance

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stiven = Object.create(PersonProto);
console.log(stiven);
stiven.name = 'Stiven';
stiven.birthYear = 2002;
stiven.calcAge();

console.log(stiven.__proto__ === PersonProto);

const satha = Object.create(PersonProto);

satha.init('Satha', 1979);

//Chalange 2

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }

  brake() {
    this.speed = this.speed - 10;
    console.log(this.speed);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
    console.log(`set ${this.speed}`);
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);

ford.accelerate();
ford.brake();
console.log(ford.speedUS);
console.log((ford.speedUS = 120));

console.log('__________Coding chalange_________________');

//Inheritence
class ElectricCarCL extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed = this.speed + 20;
    this.charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} with a charge of ${this.#charge}%`);
    return this;
  }
}

const revian = new ElectricCarCL('Revian', 120, 23);
// console.log(revian);
// console.log(revian.make);
// console.log(revian.speed);
// console.log();
revian.accelerate().accelerate().accelerate().accelerate().chargeBattery(100);
console.log('__________Coding chalange_________________');

//////////////////////////////////////
//Inharitance between Classes: Constractor Function

const PersonInh = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonInh.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
//Linking prototypes

const Student = function (firstName, birthYear, course) {
  PersonInh.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(PersonInh.prototype);

const mike = new Student('Mike', 2020, 'Computer Science');
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(Student.prototype.constructor);

//Another Example Class
//1.Public fields (instances)
//2. Pricate fields
//3. Public methods

class Account {
  //1.Public fields (instances)
  locale = navigator.language;
  _movements = [];

  //2. Private fields
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protectet property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3. Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }
  //Public interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
  //protectet method
  // 4. Private methods
  _approveLoan(val) {
    return true;
  }
  //   #approveLoan(val) {
  //     return true;
  //   }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
//acc1.approveLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
console.log(acc1.pin);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(2500);
