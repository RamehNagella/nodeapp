"use strict";
/*
const bookings = [];
const ownerName = function (name) {
  console.log(name);
};
ownerName("jonas");

const createBooking = function (
  flightName,
  name,
  numberPassengers = numberPassengers || 1,
  price = 199 * numberPassengers
) {
  const booking = {
    flightName,
    name,
    numberPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH120", "JONAS", 1);
console.log(bookings);


// **********

//passing objects into functions

const flight1 = 'LH123';

const Jonas = {
  name: 'Jonas Schmedthmann',
  passport: 123456789,
  flight: 34,
};
const John = {
  name: 'John Greeshemn',
  passport: 323456780,
  flight: 34,
};
const checkIn = function (
  flightNum = flightNum,
  passenger = passenger
  //   flightNum = flightNum || Jonas.flight,
  //   passenger = passenger || Jonas.name
) {
  flightNum = 'LH1234';
  console.log(passenger.flight);
  console.log(flightNum);
  console.log(passenger.passport);
  passenger.name = 'Mr.' + passenger;
  if (passenger.passport == 123456789) alert('checked In');
  else {
    alert('wrong passport');
  }
};
// checkIn(flight1, Jonas);
// checkIn(flight1, John);

//function that returns the other function
function count(num) {
  let counter = num;
  return function () {
    counter++;
  };
}
const increase = count(23);
console.log(increase);
// Passing one function into other function

const greet = function (greeting) {
  console.log('11111', greeting);
  return function (name) {
    console.log('2222', name);
    console.log('11111', greeting);

    console.log('>>>>>>>>>>', `${greeting} ${name}`);
  };
};
// const greetHey = greet("hey");
// greetHey("jonas");
// greetHey("jona")("hii");
// greet("@@@@");
// greet("hello")("heyff");

const lufthansa1 = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} has booked ticket on ${this.iataCode}-${flightNum} flight`
    );
    this.bookings.push(`${this.iataCode} ${flightNum}: ${name} `);
  },
};
lufthansa1.book('123', 'RameshNagella');

//lufthansa1 has created another airline

// const euroWings1 = {
//   airLine: "EuroWings",
//   iataCode: "EW",
//   bookings: [],
//   book: lufthansa1.book,
// };
// euroWings1.book(1, "ramesh");
// console.log(euroWings1.bookings);
const euroWings1 = {
  airLine: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};
const book1 = lufthansa1.book;
// euroWings1.book1(1, "ramesh");
// euroWings1.book1(2, "rahel");
// since book1 function is not defined in eurowings object we woll get error.
// To book1 ticket in euroWings using lufthansa object we need to call explicitely.there are 3 methods 1.call 2.apply 3. Bind
book1.call(lufthansa1, 32, 'raru');
book1.call(euroWings1, 2, 'Sarah');
console.log(euroWings1.bookings);
console.log(lufthansa1.bookings);
const swiss1 = {
  airLine: 'airSwiss',
  iataCode: 'AS',
  bookings: [],
};
book1.call(swiss1, 1, 'Peter');
console.log(swiss1.bookings);

//Apply method >>this is also same as call method only difference is that it takes the data in array format
const flightData1 = [1, 'rajKumar'];
book1.apply(swiss1, flightData1);
// book1.apply(lufthansa1, 23, "honey");-->>Uncaught TypeError: CreateListFromArrayLike called on non-object
book1.apply(lufthansa1, flightData1);
book1.apply(euroWings1, flightData1);

//BIND method(this method doesnot call the immediate function insted it returns new functions, the this keyword used to bound it sets whatever the value bind)
// (this method is used for specific one particularly to call new function)

const flightData2 = [46, 'yasjKumar'];

console.log(book1.bind(lufthansa1, flightData2));
const bookLH = book1.bind(lufthansa1);
const bookAS = book1.bind(swiss1);
bookLH(43, 'JOHN');
bookLH(89, 'steven');

//booking tickets in specific flight
const bookEW1 = book1.bind(lufthansa1, 12);
bookEW1('Ramesh Nagella');
bookEW1('ravi');
bookEW1('joy'); //--->>here for book function we
//  need to specify two arguments for book function
bookEW1('laddu');
console.log(lufthansa1.bookings);

// partial application of bind method

const addTax2 = (rate, value) => {
  console.log(rate);
  console.log(value);

  const gst = value + value * rate;
  console.log(gst);
  return gst;
};
// console.log(addTax2(0.1, 100));
const addVAT2 = addTax2.bind(5, 0);
console.log(addVAT2(9, 100));
console.log('>>>>>___<<<<<<');
*/
/*
//    ****  A R R A Y S   ****
const movementsP = [20, 31, 44, -11, 34, -54, 66, 77, -88, 45, -12, -43];
console.log(movementsP);

// with for loop

for (const mov of movementsP) {
  if (mov > 0) console.log(`you are credited with ${mov}`);
  else console.log(`you are debited with ${mov}`);
}

//for loop with Object.keys
for (const mov of Object.values(movementsP)) {
  if (mov > 0) console.log(`you are credited with ${mov}`);
  else console.log(`you are debited with ${mov}`);
}

for (const [i, mov] of Object.entries(movementsP)) {
  if (mov > 0) console.log(`transaction${Number(i) + 1}:you deposited ${mov}`);
  console.log(`transction${Number(i) + 1}:you withdre
  wn ${mov} `);
}

//with forEach
movementsP.forEach(function (mov, i, arr) {
  if (mov > 0) console.log(`transaction${Number(i) + 1}:you deposited ${mov}`);
  console.log(`transction${Number(i) + 1}:you withdre
  wn ${mov} `);
});

const currencies3 = [
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
];

const currencies2 = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

console.log(currencies2);
console.log(currencies3);
currencies3.push(["DNR", "United Areb Emirates"]);
console.log(currencies3);

currencies2.forEach(function (currency, i) {
  console.log(`${i}: ${currency}`);
});
currencies3.forEach(function ([i, country]) {
  console.log(`${i}:${country}`);
});
*/
/*
//P R I M I T I E V E S and  Objects
//primitive type
let lastName = "Willioms";
let oldLastName = lastName;
lastName = "Devis";

console.log(lastName, oldLastName);

//reference type

const Jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = Jessica;
marriedJessica.lastName = "Devis";

console.log("before>>", Jessica);
console.log("after>>", marriedJessica);
// before>> { firstName: 'Jessica', lastName: 'Devis', age: 27 }
// after>> { firstName: 'Jessica', lastName: 'Devis', age: 27 }

// coping objects:

const Jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const jessica2Copy = Object.assign({}, Jessica2);
jessica2Copy.lastName = "Devis";
console.log("beforecopy", Jessica2);
console.log("aftercopy", jessica2Copy);
// beforecopy { firstName: 'Jessica', lastName: 'Williams', age: 27 }
// aftercopy { firstName: 'Jessica', lastName: 'Devis', age: 27 }
//if we assign(referncing) same object for other varible in this case if change the values of properties inside the assigned object the values wont be changed
//if we copy the objectto another variable in this case if we change the values of properties in the copied object the value will be changed

const jessica3 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};
const jessica3Copy = Object.assign({}, jessica3);
jessica3Copy.family.push("Mary");
jessica3Copy.family.push("John");

console.log("beforecopy", jessica3);
console.log("aftercopy", jessica3Copy);
// beforecopy {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: [ 'Alice', 'Bob', 'Mary', 'John' ]
// }
// aftercopy {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: [ 'Alice', 'Bob', 'Mary', 'John' ]
// }

//with Object.assign() we can add elements but if you push the elements into array they will be added for both copied object and original objects

// Destructuring Object

const { firstName, age, family } = jessica3Copy;
console.log(firstName, age, family);

//Destructuring Array
const [name1, name2, name3] = jessica3Copy.family;
console.log(name1, name2, name3);

//with spread operator
// jessica3Copy.family = [1, 2, ...others];
// console.log("spredelems", 1, 2, others);
const spreadelems = [...jessica3Copy.family];
console.log("sdlkklf", spreadelems);

//rest operator
const arr = [1, 2, [3, 4]];
const [a, b, ...other] = arr;

console.log("sss>>", a, b, other);
console.log("sss>>", a, b, ...other);

const arr1 = [1, 2, 3, 4, 5, 6, 6];
const [p, q, r, ...elem] = arr1;

console.log("ss>>>", p, q, r, elem);

//shortcircuiting
//with OR operator
console.log(12 || 0); //12
console.log(0 || 12); //12
console.log(null || undefined || "" || NaN || 1); //1

//with AND operator
console.log(12 && 0); //0
console.log(0 && 12); //0
console.log(12 && 23); //23
console.log(23 && 12); //12
console.log(null && undefined && "" && 23); //null
console.log(null && 10); //null

//NULLISH collashing operator (??)
// it works based on nullish values (Null, Undefined ,0, '')
const rest1 = {
  name1: "Copra",
  numGests: 20,
};
const rest2 = {
  name2: "Le Pizza",
  owener: "G Rossi",
};

rest1.numGests = rest1.numGests || 10;
// rest2.numGests = rest2.numGests || 15;

console.log(rest1);
console.log(rest2);
// { name1: 'Copra', numGests: 20 }
// { name2: 'Le Pizza', owener: 'G Rossi', numGests: 15 }
rest1.numGests ||= 10;
// rest2.numGests ||= 12;
console.log(rest1);
// console.log(rest2);
// { name1: 'Copra', numGests: 20 }
// { name2: 'Le Pizza', owener: 'G Rossi', numGests: 12 }

//logical NUllish assignment operator
rest1.numGests ??= 11;
rest2.numGests ??= 13;
console.log(rest1);
console.log(rest2);

// rest1.owner &&= "rams";
// rest2.numGests ??= 13;
// console.log(">>", rest1);
// >> { name1: 'Copra', numGests: 20 }

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1);
console.log(rest2);

// { name1: 'Copra', numGests: 20 }
// { name2: 'Le Pizza', owener: 'G Rossi', numGests: 13 }

const hours = {
  thu: {
    open: 11,
    close: 12,
  },
  fri: {
    open: 10,
    close: 11,
  },
};

const restaurant = {
  name: "Jonas",
  location: "Hederabad",
  catogories: ["lunch", "dinner"],
  starterMenu: ["egg", "rice", "chicken"],
  mainMenu: ["biryani", "mutton"],
  hoursOpening: hours,
};
console.log(restaurant);
restaurant.order = function (starterIndex, mainIndex) {
  return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
};
console.log(restaurant);
console.log(restaurant.order("egg", "rice")); //[ undefined, undefined ]
// console.log(restaurant.hoursOpening.monday.open); //TypeError: Cannot read properties of undefined (reading 'monday')

console.log(restaurant.hoursOpening.thu.open); //11

console.log(restaurant.hoursOpening.mon?.open); //undefined
console.log(restaurant.hoursOpening?.thu?.close); //12
console.log(restaurant.hoursOpening.thu?.close); //12

const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

for (const day of days) {
  console.log(day);
  const open = restaurant.hoursOpening[day]?.open ?? "Not Mentioned";
  console.log(`on ${day},we open at ${open}`);
}
console.log(restaurant.order(1, 0)); //[ undefined, undefined ]

//LOOPING OBJECTS

for (const item of Object.keys(restaurant)) {
  console.log(item);
}
for (const item of Object.values(restaurant)) {
  console.log(item);
}

for (const openDays of Object.keys(restaurant.hoursOpening)) {
  console.log(openDays);
}
for (const openDays of Object.values(restaurant.hoursOpening)) {
  console.log(openDays);
}

const values = Object.values(restaurant.hoursOpening);
console.log(values);

//To loop entire object we .entries()
const entries = Object.entries(restaurant.hoursOpening);
console.log("\n", entries);
const props = Object.entries(restaurant);
console.log(">>", props);

//SETS

const orderSet = new Set([
  "rice",
  "pizza",
  "pasta",
  "cream",
  "icecream",
  "cream",
  "rice",
  "pasta",
]);
console.log(orderSet);
const ordersUniqu = [...orderSet];
console.log(ordersUniqu);

//MAPS

const rest = new Map();
console.log(rest);
rest.set("name", "rameshNagella");
rest.set("open", 11);
rest.set("close", 12);
console.log(rest);
rest.hoursOpen = 10;
console.log(rest);
// Map(3) {
//   'name' => 'rameshNagella',
//   'open' => 11,
//   'close' => 12,
//   hoursOpen: 10
// }
console.log(rest.has("open")); //true
console.log(rest.size); //3

const question = new Map([
  ["question", "What is the best programming language"],
  [1, "c"],
  [2, "jave"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Tri again"],
]);
console.log(question);
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer: ${key}:${value}`);
}
// const answer = Number(prompt("Your anwser"));
// console.log(answer);
// if (answer === 3) console.log(question.get("correct"));
// else console.log(question.get(false));
// console.log(answer === 3 ? question.get("correct") : question.get(false));

// convert map into array
console.log(question);
console.log([...question]);

// const newRest = new Map(restaurant);
console.log(newRest);
// TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
*/
/*
//OOPS IN PRACTICE
//CREATING C L A S S E S

const Person = function (firstName, birthYear) {
  console.log(this);
  //Instances
  this.firstName = firstName;
  this.birthYear = birthYear;

  // //Never create a method inside constructor like this
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
  //use prototypes and prototyper inheritance
};

// new Person("Jonas", 1991);//Person {}
const jonas = new Person("Jonas", 1991);
console.log(jonas); //Person { firstName: 'Jonas', birthYear: 1991 }

// 1.New {} is created
// 2. function us called,this = {}
// 3.{} linked to prototype
//4.function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(matilda, jack);
//Person { firstName: 'Matilda', birthYear: 2017 } Person { firstName: 'Jack', birthYear: 1975 }

console.log(jonas instanceof Person); //true
*/
/*
// P R O T O T Y P E S
const Person = function (firstName, birthYear) {
  console.log(this);
  //Instances
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person("Jonas", 1991);
console.log(jonas);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person); //true

console.log(Person.prototype); //{}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype); //{ calcAge: [Function (anonymous)] }

jonas.calcAge(); //46
matilda.calcAge(); //20

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false
// .prototypeOfLinkedObject
Person.prototype.species = "Homo Sapiens";
console.log(jonas, matilda);
console.log(jonas.species, matilda.species); //Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty("firstName")); //true
console.log(jonas.hasOwnProperty("species")); //false
//
const arr = [1, 2, 3, 4, 5, 4, 3, 2, 2, 6];
console.log(arr);
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

//coding challenge
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmw = new Car("BMW", 120);
const mercedes = new Car("Maecedes", 95);

Car.prototype.accelerate = function () {
  // this.speed =speed+10;
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.brake();

// E S 6   C  L A S S E S

//class Expression
// const Personcl=class{

// }
//or

//class declearation
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }
// const jessica = new PersonCl("jessica", 1996);
// console.log(jessica);

//writing methods

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear); //-->>this method is added to the prototype of PersonCl as before not porperty of personcl
  }
}
const jessica = new PersonCl("jessica", 1996);
console.log(jessica);

jessica.calcAge(); //41

console.log(jessica.__proto__ === PersonCl.prototype); //true

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
// jessica.greet();
*/
/*
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear); //-->>this method is added to the prototype of PersonCl as before not porperty of personcl
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
const jessica = new PersonCl("jessica", 1996);
console.log(jessica);

jessica.calcAge(); //41

console.log(jessica.__proto__ === PersonCl.prototype); //true

jessica.greet();

//1.Classes are not HOISTED
//2.Classes are first-class citizens
// 3.Classes are excuted in strictMode

const account = {
  owner: "Jonas",
  movements: [200, 300, 100, 289],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest); //289
account.latest = 50;
console.log(account.movements); //50 added
*/

//classes are also have setters and getters

// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear); //-->>this method is added to the prototype of PersonCl as before not porperty of personcl
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
// }
// const jessica = new PersonCl("jessica", 1996);
// console.log(jessica);
// console.log(jessica.age);
/*
//setters and getters are very useful in data validation
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear); //-->>this method is added to the prototype of PersonCl as before not porperty of personcl
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //set property that already exist

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}
const jessica = new PersonCl("jessica Davis", 1996);
console.log(jessica);
console.log(jessica.age);
const walter = new PersonCl("Walter white", 1985);
*/
/*
//STATIC METHODS
const Person = function (firstName, birthYear) {
  console.log(this);
  //Instances
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const jonas = new Person("Jonas", 1991);
console.log(jonas);
const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

Person.hey = function () {
  console.log("Hey there");
  console.log(this);
};
Person.hey(); //-->but it is not inherited to jonas class
// jonas.hey();//TypeError: jonas.hey is not a function

//now add this static methods to class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear); //-->>this method is added to the prototype of PersonCl as before not porperty of personcl
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  //set property that already exist

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  // static methods
  static hey() {
    console.log(`hey there`);
  }
}

const jessica = new PersonCl("jessica Davis", 1996);
// console.log(jessica);
// console.log(jessica.age);
const walter = new PersonCl("Walter white", 1985);

PersonCl.hey();
PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
//{}[[Prototype]]: Object
// calcAge: ƒ calcAge()
steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge(); //35
console.log(steven);

// {name: 'Steven', birthYear: 2002}
// [[Prototype]]: Object
// calcAge: ƒ calcAge()
// init: ƒ init(firstName, birthYear)

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();
//this is manual way of creaating object

// Object.create() creates new Object and the prototype of that object will be the object that we passed in

// coding challenge

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  get speedUs() {
    console.log("get>>", this.speed);
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    console.log("setting>>>", speed);
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford);
console.log(ford.__proto__);
console.log(">>>", ford.speedUs);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(">>>", ford.speedUs);
ford.speedUs = 50;
console.log(ford);
*/
//Inheritance between classes
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  // Person(firstName,birthYear);  //>>like this if we call it doesnt work because this calling is like normal function, in normal function call this key word is undefined
  //  hence type error:connot set  property 'firstName' undefined
  // Person.call(firstName, birthYear); //this is also not work because this keyword is not defined in call method

  Person.call(this, firstName, birthYear);
  this.course = course;
};

//linking prototype
Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype;  ->>this will not work
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer science");
mike.introduce();
// mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
console.log(Person.prototype);
console.log(Student.prototype);

// Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

//CODING CHALLENGE

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at speed of ${this.speed} kmph `);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at speed of ${this.speed} kmph `);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
Ev.prototype.accelerate = function () {
  this.speed += 10;
  this.charge -= 1;
  console.log(
    `${this.make} is going at speed of ${this.speed} km/ph with charge of ${this.charge}`
  );
};

const Tesla = new Ev("Tesla", 120, 23);
Tesla.accelerate();
Tesla.chargeBattery(90);
Tesla.accelerate();
Tesla.brake();

// console.log(Car);

console.log(Tesla);
console.log(Ev.prototype);
console.log(Tesla.prototype);

console.log(Tesla instanceof Ev); //true

console.log(Ev instanceof Car); //false
console.log(Car instanceof Ev); //false
console.log(Tesla instanceof Ev); //true
console.log(Tesla instanceof Car); //true
// Tesla.accelerate();

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at speed of ${this.speed} km/ph`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at speed of ${this.speed} km/ph`);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
// Link prototype
Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at speed of ${this.speed} km/ph with charge of ${this.charge}`
  );
};

const Tesla = new Ev("Tesla", 120, 23);
Tesla.chargeBattery(90);
console.log(Tesla);
Tesla.brake();
Tesla.accelerate();
console.log(Car);

// console.log(Ev.__proto__);
// console.log(Car.__proto__);
// console.log(Car.prototype);
// console.log(Ev);
// console.log(Ev.prototype);
// console.log(Tesla.prototype);

// console.log(Tesla instanceof Ev);
// console.log(Ev instanceof Car);
// console.log(Tesla instanceof Ev);
// console.log(Tesla instanceof Car);
// Tesla.accelerate();
*/
