"use strict";
console.log(2);
console.log(3 + 4);

//FUNCTIONS
// const bookings = [];
/*
const createBooking = function (
  flightName,
  num,
  numPassengers,
  price = 199 * numPassengers
  //ES5
  //numPassengers = numPassengers || 1, // tor=e error :cannot read properties of undefined bofore initialization
  //price = price || 199const createBooking = function (
) {
  const booking = {
    flightName,
    num,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", 1, 100, 5000); //{flightName: 'LH123', num: 1, numPassengers: 100, price: 5000}
console.log(bookings); //[{…}]0: flightName: "LH123"num: 123 numPassengers: 100 price: 5000[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)

//CREATING DEFAULT VALUE
createBooking("LH123", 2); //{flightName: 'LH123', num: 2, numPassengers: undefined, price: NaN}

createBooking("LH123", 3, 10); //{flightName: 'LH123', num: 3, numPassengers: 10, price: 1990}
createBooking("LH123", 4, " ", 100); //{flightName: 'LH123', num: 4, numPassengers: ' ', price: 100}

//HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE
//(passing objects into the function)
const flight = "LH1234";
const Jonas = {
  name: "Jonas ScmedthMann",
  passport: 1234567890,
  flight: 34,
};
const checkIn = function (
  flightNum = flightNum || Jonas.flight,
  passenger = passenger || Jonas.name
) {
  console.log(flightNum);
  flightNum = "LH999";
  console.log(passenger);
  console.log(">>>>>>", passenger.passport);
  passenger.name = "Mr." + passenger.name;
  //  if (passenger.passport === Math.trunc(Math.random() * 10000000000))
  if (passenger.passport === 1234567890) {
    alert("checked In");
  } else {
    alert("wrong passport");
  }
};
// // checkIn(flight, Jonas);
// checkIn(flight); //Uncaught ReferenceError: Cannot access 'passenger' before initialization
// checkIn(Jonas);//script.js:42 Uncaught ReferenceError: Cannot access 'passenger' before initialization
//when we passing object in to the function it just like coping object

// practical Examplle
const newPassport = function (person) {
  console.log(person);
  person.passport = Math.trunc(Math.random() * 10000000000); // here we are assinging new passport number for passport present in the jonas object
  console.log(person.passport);
};
newPassport(Jonas);
console.log(Jonas); // here new passport number is creating for the jonas object using newPassport function and old is getting deleted
// checkIn(flight, Jonas); // so after we check the passport number we will wrong passport


//Two term are used in programming to pass arguments
//1. Passing by value
//2. Passing by reference
//JavaScript works on  passing by reference

//FIRST- CLASS  and HEIGHER ORDER functions

// const greet = () => console.log('Hey Jonas');
// btnClose.addEventListener('click', greet);
// addEventListener is a heigher order function
// greet is callback function
//functions that returns new functions
function count(num) {
  let counter = num; //---> heigher order function

  return function () {
    counter++; //--->returned function
  };
}
count(23);

//passing one function into other function

const oneWord = function (strName) {
  return strName.replace(/ /g, " ").toLowerCase();
};
const upperFirstWord = function (str1) {
  console.log(str1);
  const [first, ...others] = str1.toLowerCase().split("");
  console.log(">>>>>>", [first, ...others]);

  return [first.toUpperCase(), ...others].join("");
};
console.log(oneWord("rAMesh"));
console.log(upperFirstWord(oneWord("RAMESHNAGELLA")));

//creating higher order functions
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer(`JavaSript is the bESt!`, upperFirstWord);
//calling from other function
transformer(`JavaSript is the best!`, oneWord);
//ex
const addition = function (num1, num2 = num2 || 21) {
  let sum = num1 + num2;
  const added =
    sum <= 100
      ? `sum is ${sum} entred numbers are too small`
      : `sum is ${sum} and entered numbers are high`;
  console.log("100");
  return added;
};
console.log(addition(3, 2));
console.log(addition(23, 24));

const multiplication = (num1, num2) => {
  const multi = num1 * num2;
  const product =
    multi < 500
      ? `product is ${multi} entred numbers are small`
      : `product is ${multi} you can enter big numbers`;
  return product;
};

const mathOperation = function (num1, num2, fn) {
  console.log(`Original numbers: ${num1}, ${num2}`);
  console.log(`result is: ${fn(num1, num2)}`);
  console.log(`name of operated function:${fn.name}`);
};
mathOperation(200, 103, addition);
mathOperation(200, 103, multiplication);
// HERE we have to call the function which one shold be used

const high5 = function () {
  console.log("hii");
};
document.body.addEventListener("click", high5);
["Jonas", "marth", "adam"].forEach(high5); //3 hii
//multiplication(3, 5).forEach(high5);//Uncaught TypeError: multiplication(...).forEach is not a function
["joans", "jon"].forEach(high5); //2 hii
document.body.addEventListener("click", addition); // on clicking on webpage addition value will print
// document.body.addEventListener('click', addition(3, 2)); //Uncaught TypeError: Failed to execute 'addEventListener' on 'EventTarget': parameter 2 is not of type 'Object'.
//FUNCTION RETURNING THE FUNCTION
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetHey = greet("Hey");
greetHey("jonas"); //Hey jonas
greet("hii")("john"); //hii john

greet("123")("your score"); //123 your score

//using ARROW function
const greet1 = (greeting1) => (name1) => console.log(`${greeting1} ${name1}`);
greet1("Hii jonas:")(addition(2, 4)); //Hii jonas: sum is 6 entred numbers are too small
greet1("hii jonas:")(transformer(`JavaSript is the bESt!`, upperFirstWord));
// in the above two examples insde function argument is higher order function

//THE CALL AND APPLY METHOD
const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  //book: function () {
  book: function (flightNum, name2) {
    console.log(
      `${name2} has booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode} ${flightNum}`, name2 });
  },
  // console.log(...bookings);//syntax error
};
// lufthansa.book(239, "jonas");
// lufthansa.book(635, "steven");
// lufthansa.book(238, "williams");
// console.log(lufthansa.bookings);
// console.log(lufthansa);
//lets say lufhansa created new group of airline
const euroWings = {
  airline: "eurowings",
  iataCode: "EW",
  bookings: [],
  // const book=lufhtansa.book,//Uncaught SyntaxError: Unexpected token 'const'
  // book_1:lufthansa.book,
};
const book = lufthansa.book;
// book(23, 'sarah Williams');// Uncaught TypeError: Cannot read properties of undefined (reading 'airline')because it just regular function call,as we didnot defined book function in eurowings object we will get error
// euroWings.book(23, 'sarah Willams');//Uncaught TypeError: euroWings.book is not a function
// then how we need to tell to javascript to book a ticket in eurowings or in lufthansa
// we need to tell explicitely there  are  3 methods in java script
//CALL METHOD
book.call(euroWings, 23, "Sarah Williams");
console.log(euroWings);
book.call(lufthansa, 43, "rameshNagella");
console.log(lufthansa);

//creating ohter airline object
const swiss = {
  airline: "Swiss Airlines",
  iataCode: "LS",
  bookings: [],
};
book.call(swiss, 12, "Jordan");
console.log(swiss);

//example
const indigo = {
  airlineName: "Indigo",
  iataCode: "IGS",
  bookings: [],
  book: function (flightNum, name) {
    console.log(">>>>>>>", flightNum, name);
    const [fName, lName] = name.split(" ");
    console.log(fName, lName);
    const passengerName = `${fName[0].toUpperCase()}${fName
      .slice(1)
      .toLowerCase()} ${lName[0].toUpperCase()}${lName.slice(1).toLowerCase()}`;
    console.log(passengerName);
    console.log(
      `${passengerName} has booked seat on ${this.airlineName} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      Name: `${passengerName}`,
    });
  },
};
indigo.book(10, "ramesh nagella");
indigo.book(15, "jonas schmedthamann");
// // indigo.book(
//   Number(prompt('enter flight number: ')),
//   prompt('enter your name: ')
// // );
console.log("#####", indigo.bookings);
// console.log(indigo);

//APPLY METHOD (it is same as call method only difference is that it takes the arguments in array format);

//example
const flightData = [581, "stephen hockings"];

book.apply(indigo, flightData);
book.apply(swiss, flightData);
book.apply(lufthansa, flightData);
book.apply(euroWings, flightData);
// book.apply(swiss, ...flightData); //Uncaught TypeError: CreateListFromArrayLike called on non-object
//in apply method first we will declare the detalis then we call eith apply method, the no of arguments must be equal to  smae no of book function arguments

console.log(indigo);

//BIND METHOD(bind method doesnot call the immediate function,insted it returns a new function the this keyword bound it sets whatever value into bind)
const bookEW = book.bind(euroWings);
bookEW(23, "stephen williams");
console.log(euroWings);

const bookIGI = book.bind(indigo);
bookIGI(34, "johns lawrence");

//this bind method used to book for specific fflght
const bookLS = book.bind(lufthansa);
bookLS(33, "cooper");
bookLS(24, "lio messy");
bookLS(45, "john");

// to book a ticket in specific flightNUMBER WE CAN USE BIND METHOD

//BOOKING IN EUROWINGS FLIGHT NUMBER '23'
const bookEW23 = book.bind(euroWings, 23);
bookEW23("jonas Schmedthmann");
bookEW23("mary cooper");
bookEW23("BOB marley");

// here book function need two arguments but we are giving only one argument another argument(23 is the flightNUMber) is already declared in decleration
// const bookOnlyForOne = book.bind(lufthansa, 23, 'jonas');
// console.log('/////22///', bookOnlyForOne);

//with EventListeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane); //NaN because the this keyword present in the function referese to button element not to lufthansa object because its present in th event listeners function, so here we need to pass a function we can use BIND method(becus it return the function) if we  use call method its calls the function
// document
// .querySelector(".buy")
// .addEventListener("click", lufthansa.buyPlane.bind(lufthansa)); //onclicking buyneaplane button

//PARTIAL APPICATION (means we can preset the parameters.for this we use Bind method
//ex 1
const addTax = (value, rate) => value + value * rate;
// console.log(addTax(0.1, 200)); //220
const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); //123
console.log(addVAT(0.2, 10000)); //0.24600000000000002
//inplace o null we have to specify the this keyword,we are not specified beacuse no function is defined in addTax
//with above example we can preset the rate value i.e we are redefining the argument value
//ex 2
const interest = function (rate, principle) {
  console.log(">>>>>>>>", principle, rate); // 100 0.5
  const total = principle + rate * principle;
  return total;
};
// console.log(interest(0.1, 100)); //1110
// const compoundIntrest = interest.bind(2000000, 0.5);
// console.log(compoundIntrest(100)); //110
// console.log(compoundIntrest(0.3, 20000)); //0.329999999
// console.log(compoundIsntrest); // console is interest function. here on binding interest function for compund interest, entire function will automatically assigned to compoundInterest function
// that means binding will return the entire function for bounded function

//creating alternate syntax for ex 1

const addTax1 = function (rate, value) {
  const tax = value + value * rate;
  console.log(tax);
  return function (value) {
    console.log(`${tax}`);
  };
};
// console.log(addTax1(0.1, 100));
const addVAT1 = addTax1.bind(null, 100);
console.log(addVAT1(10, 20));
// console.log(addVAT1(300));
/*
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
// const addVAT2 = addtaxRate(0.23);
// console.log(addVT2(100)); //Uncaught ReferenceError: addtaxRate is not defined
console.log(addTaxRate(0.2)(100)); //120
*/
//IMMEDIATELU INVOKED FUNCTION EXPRESSION

// (if we want to excute the function only once i.e. after one excution function should not work)
const runOnce = function () {
  console.log("111111", `This will never run again!`);
};
runOnce(); //This will never run again!
runOnce(); //This will never run again!

// function(){
//   console.log(`this will never run agian!`);
// };
//Uncaught SyntaxError: Function statements require a function name
(function () {
  console.log(`this will never run again!`);
})(); //this will also never run again
runOnce();
() => console.log("?????????", `this will ALSO never run again!`)(); // empty output
(() => console.log("@@@@", `this will also never run again`))(); //@@@@ this will also never run again

//console.log(())://Uncaught SyntaxError: Unexpected token ')'//that means it excutes automatically and whenever we want we cant get we have do create for next time,we cant access forther
//example
(function () {
  console.log("!!!!!!!!11", `this will never run again!`);
  const isPrivate = 23;
})();
// console.log(isPrivate); //Uncaught ReferenceError: isPrivate is not defined
//as we said we cant access anything inside that block

//but if we declare a varible with VAR key we can get because it wont create any block but const and let keywords creates their own block if we define inside a funcrtion
(function () {
  console.log(
    "with var declaration we can access the properties values outside the block but NOT with const and let"
  );
  // const isPivate = 23;
  var notPrivate = 46;
})();
// console.log(isPrivate);//Uncaught ReferenceError: isPrivate is not defined
console.log(notPrivate); //Uncaught ReferenceError: notPrivate is not defined
// var also defined inside a block() so we cant access
{
  const isPivate = 23;
  var notPrivate = 46;
}
console.log(notPrivate); //46
/*
//coding vhallenge #1;
const poll = {
  question: "What is favourite proagramming language?",
  options: [`0: Java Script`, `1:Python`, `2:Rust`, `3:c++`],
  //this geverates [0,0,0,0]. More in the next section
  answers: new Array(4).fill(0),

  //get answer from user
  registerNewAnswer: function () {
    // const answers = this.options.join('\r\n');
    // console.log(answers);
    const answer = Number(
      prompt(`${this.question}\n${this.options.join("\n")}
      \n (Enter your answer)`)
    );

    console.log(answer, typeof answer);
    //register answer
    typeof answer === "number" && answer < this.answers.length && 1;

    this.answers[answer]++;
    // console.log(this.answers);
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if ((type = "string")) {
      //"Poll results are 13, 2, 4, 1".
      console.log(`Poll results are ${this.answers.join(",")}`);
    }
  },
};

// poll.registerNewAnswer();
// console.log(poll.question);
poll.displayResults(); //(4) [0, 0, 0, 0]
// poll.displayResults('string');//Poll results are 0,0,0,0
// if we call outsude object no change will occure even by clicking the button
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer);
//Uncaught TypeError: Cannot read properties of undefined (reading 'join')
//at HTMLButtonElement.registerNewAnswer //this keyword in the function method referse to butoon element present in html not to poll object
//to fix this use bind method
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
// Use the 'displayResults' method to display the 2 arrays in the test data
// Test data for bonus:
const Data = [5, 2, 3];
// §Data 2: [1, 5, 3, 9, 6, 1]
// console.log(poll.displayResults(Data)); //undefined
poll.displayResults.call({ answers: [5, 2, 3] }, "string"); //(3) [5, 2, 3]
poll.displayResults.call({ answers: Data }, "string");
//if we use bind method
poll.displayResults.bind({ answers: Data });
poll.displayResults.bind({ answers: [1, 5, 3, 9, 6, 1] });
//no output is coming because bind is return the function
//call method calls the function
poll.displayResults.apply({ answers: Data }); //(3) [5, 2, 3]
poll.displayResults.apply({ answers: [1, 5, 3, 9, 6, 1] }); //(6) [1, 5, 3, 9, 6, 1]
// poll.displayResults.apply({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); //Uncaught TypeError: CreateListFromArrayLike called on non-object
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string"); //Poll results are 1,5,3,9,6,1

//  ******* C L O S U R E S   ***********

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
console.log(secureBooking()); //ƒ () {
//    passengerCount++;
// console.log(`${passengerCount} passenger`);
// }
const booker = secureBooking();

booker(); //1 passenger
booker(); //2 passenger
booker(); //3 passenger

//any function has the access tok the variable environment of excution cantact(EC)in which function was created
console.dir(booker);
//read console
//ex 1
const powerOfn = function (p, n) {
  console.log(p, n);
  let sum = Math.pow(2, 3);
  console.log(sum);
  return function () {
    sum = Math.pow(sum, 3);
    console.log(`${sum} p(powerofpowerof)n`);
    // return function () {
    //   console.log((sum += sum));
    //   console.log(`${sum} p(powerof)n`);
    // };
  };
};

const power = powerOfn(2, 3);
power();
console.dir(power);
//ex2
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f(); //46
console.dir(f);

const p = function () {
  const c = 32;
  f = function () {
    console.log(c / 4);
  };
};
p(); //8
f();
let i;
const h = function () {
  const b = 777;
  i = function () {
    console.log(b * 2);
  };
};
h();
i(); //1554

f(); //8

g(); //no output
f(); //46

i(); //1554
f(); //46

p();
f(); //8
i(); //1554

f(); //8

g();
f(); //46

f(); //46
console.dir(f);
p();
f(); //8
//if we write a function inside function ,the varibles declared in the parent are used in the inside function then it is called closure

//ex 2(setting Timer)
const boardPassengers = function (n, wait) {
  const perGroup = n / wait;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are ${wait} groups,each with ${perGroup} pasengers`);
    console.log(wait * 1000);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds`);
};
boardPassengers(180, 6);

//const perGroup = 1000; //there are 6 groups,each with 1000 pasengers
boardPassengers(180, 12);
// closure does not loose scope chain it uses the variables from parent function if inside of it not define,if varibles are in the parent function also not declared then
// it looks for outside of the function.(same name should be define as in the closure)
//but priority should be given to parent function even  vaaribles are declared in outside function
//CODING challenge

(function () {
  const header = document.querySelector("h1");
  console.log(header);
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "yellow";
  });
  document.querySelector("button").addEventListener("click", function () {
    button.style.color = "green";
  });
})();
*/
