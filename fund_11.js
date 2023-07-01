"use strict";
let js = "Amazing";
if ((js = "Amazing"));

console.log(63 + 1 + 3);
console.log(4 * 3 ** 2);
console.log(3 ** 3);
console.log(4 ** 3);
console.log(3 ** 2);
console.log(4 ** (3 ** 2));
console.log(64 ** 2);
console.log(4 ** 9);

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  century = 20;
  //   year = birthYear;
} else {
  century = 21;
}
console.log(century);
// console.log(year);

const age = 18;
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
const arr = [];
// arr.push(23);
arr.push("23");
arr.push(23);

console.log(arr);
console.log(arr.includes("23"));
const tempArr = [1, 4, 2, 5, 0, 5, 6, -1, -3, "error", 7, "error2", 3];

let maxTemp = tempArr[0];
let minTemp = tempArr[0];
for (let i = 0; i <= tempArr.length; i++) {
  if (maxTemp < tempArr[i]) maxTemp = tempArr[i];
  if (minTemp > tempArr[i]) minTemp = tempArr[i];
  if (typeof tempArr[i] !== Number) continue;

  //   console.log(maxTemp);
}
console.log(maxTemp);
console.log(minTemp);

//hosting and TDZ
// console.log(me); //undefined
// console.log(job); // ReferenceError: Cannot access 'job' before initialization
// console.log(year);

var me = "jonas";
let job = "teacher";
const year = 1991;

//in functions
console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}
//TDZ work for function expression

// console.log(addExpr(3, 4));//Uncaught ReferenceError: Cannot access 'addExpr' before initialization

const addExpr = function (a, b) {
  return a + b;
};

// console.log(addArr(4, 5)); //Uncaught ReferenceError: Cannot access 'addArr' before initialization

const addArr = (a, b) => a + b;
var p = 1;
let q = 2;
const r = 4;
console.log(window);
console.log(Window);
console.log(p === window.p);
console.log(p === Window.p); //false

console.log(q === window.q); //false
console.log(q === Window.q); //false

console.log(r === window.r); //false
console.log(r === Window.r); //false

const addEcspr = function (a, b) {
  console.log(arguments); //Arguments(6) [2, 4, 4, 5, 6, 7, callee: (...), Symbol(Symbol.iterator): ƒ]
  console.log(a + b);
};
addEcspr(3, 4);
addEcspr(2, 4, 4, 5, 6, 7);

const arrArg = (a, b) => {
  //   console.log(arguments); //Uncaught ReferenceError: arguments is not defined
  console.log(a + b);
};
arrArg(2, 3);
arrArg(2, 4);

const jessica1 = {
  firstName: "Jessica",
  lastName: "Devis",
  age: 23,
};

const marriedJessica = jessica1;
marriedJessica.lastName = "williams";

console.log("11", jessica1);
console.log("22", marriedJessica);

const Jessica2 = {
  firstName: "JESSICA",
  lastName: "Williams",
  age: 24,
};
const jessicaCopy = Object.assign({}, Jessica2);
console.log(jessicaCopy);
// HOSTING and TDZ will not work for function expression and arrow function

//DESTRUCTURING ARRAYS

const arr1 = [2, 3, 4, 5];
const x = arr1[0];
const y = arr1[1];
const z = arr1[2];
const s = arr1[3];

console.log(x, y, z);
console.log(arr1);

//destructuring
const [a, b, c, d] = arr1;
console.log(a, b, c, d);

const nested = [1, 2, [5, 6]];
const [i, j, k] = nested;
console.log(i, j, k);

const [u, , [v, w]] = nested;
console.log(v, w);
//with destructing we can set the default values

const [m, n, o] = [7, 8, 9];
console.log(m, n, o);
const [f = 1, g = 2, l = 1] = [8, 9, 0];
console.log(f, g, l);

// DESTRUCTURING Ogbjects

const restaurant = {
  name: "classico Italina",
  place: "Italy",
  openingHours: {
    thu: {
      open: 12,
      close: 12,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12,
      close: 24,
    },
  },
};
// destructuring

const { name, place, openingHours } = restaurant;
console.log(name, place, openingHours);
console.log(restaurant.name);
console.log(name); //with destructuring we can directly get(extract) the varibles of the objects

// setting default values
const { menu = [], starterMenu = [] } = restaurant;
console.log(restaurant);
console.log(menu, starterMenu);

const dfltObj = {
  sample: "ra",
  arr: [1, 3, 4],
};
console.log(dfltObj);
//creating default;
const { nam = "italy", arr12 = [] } = dfltObj;
console.log(dfltObj.nam);
//the SPREAD OPERATOR

const sprdArr = [1, 3, 5, 6, 67, 3];
console.log(...sprdArr);
const spred = [1, 2, ...sprdArr];
console.log(spred);
console.log(...spred);
//most useful when we pass array of elements in function as arguments
//useful in adding new elements into array

const spredInFirst = [...sprdArr, 4, 6];
console.log(spredInFirst);

const newArr = [...arr, ...spredInFirst, 9, 0];
console.log(newArr);

const str = "JONAS";
console.log(...str);

//REST OPERATOR

//rest operator collets multiple elements and condense them into array
//rest operator must be plased in the last elements of the array and it should be left side

const [aa, dd, vv, ...ohteres] = [2, 3, 5, 6, 6];
console.log(aa, dd, ohteres);

console.log(restaurant);
//REST ELEMENT in Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(restaurant.openingHours);
console.log(weekdays);

//IN FUNCTIONS

const addRest = function (...numbers) {
  console.log(numbers);
  return numbers;
};
addRest(3, 4, 5, 6);
addRest(...arr);

const restFor = function (...numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum = sum + i;
    console.log(sum);
  }
  console.log(sum);
};
restFor(2, 3, 4, 5, 6);
//spread operator also works on iterables(arrays ,strings ,sets,maps,but not on objects)

const checkSeat = function (seatNum) {
  const str = seatNum.slice(-1);
  if (str == "C" || str == "E") console.log("you got window seat");
  else console.log("you got middle seat");
};
checkSeat("234B");
checkSeat("432C");

console.log(new String("Jonas")); //String {'Jonas'}
console.log(typeof new String("Jonas")); //Object
console.log(typeof new String("Jonas").slice(-1)); //string

const message = "go to gate 23";
console.log(message.padStart(23, "_"));
console.log(message.length);
console.log(message.padStart(23, "_").padEnd(13, "*"));
const sliceWord = message.slice(-7);
console.log(sliceWord.padStart(13, "*"));

const maskCreditCard = function (number) {
  const str = String(number);
  // const str = number + "";
  // console.log(typeof str);
  const sliceNum = str.slice(-4);
  console.log(sliceNum);
  console.log(sliceNum.padStart(16, "*"));
};
maskCreditCard(7816387687346145);

//creating passport Number
const createNum = function (name) {
  const passport = name;
  const number = Math.trunc(Math.random() * 1000000000000);
  console.log(number);
  return {
    passangerName: passport,
    passportNumber: number,
  };
};
createNum("jonas");
const flight = "LH123";
const jonas = {
  name: "Jonas Schmedthmann",
  passport: createNum("jonas"),
};
const peter = {
  name: "Peter",
  passportNumber: createNum("Peter"),
};
console.log(jonas);
console.log(peter);

const checkInn = function (flightNum, passanger) {
  const flightNumber = flightNum;
  const name = `Mr.` + passanger.name;
  const number = createNum(name);
  console.log(number);
  if (passanger.passport === number) {
    alert("checkdIn");
    return {
      passangerName: name,
      passportNumber: passanger.passport,
      flightNumber: flightNumber,
    };
  } else {
    alert("wrong passport");
    return "You can choose another flight";
  }
};
// console.log(checkInn(flight, jonas));
// console.log(checkInn(flight, peter));

//call apply and bind mthods
const addTax = (rate, value) => value + value * rate;
const addVat = addTax.bind(null, 0.33);
console.log(addVat(100));

const sum1 = (a, b) => a + b;
console.log(sum1);
const int = (num, num2) => num + num2;
const sum = int.bind(sum1, 10);
console.log(sum(100));

(function () {
  console.log("This will never run again");
  const isPrivate1 = "23";
})();
// console.log(isPrivate1);//Uncaught ReferenceError: isPrivate1 is not defined
console.log("hii");
// function(){
//   console.log('this will never run again')
// }
{
  const isPrivate = 1;
  var isNotPrivate = 2;
}
console.log(isNotPrivate);
// console.log(isPrivate);
// (let and const are block scope and var is globel scope)

const addition = function (a, b) {
  let sum = a + b;
  console.log(sum);
  return function () {
    sum++;

    console.log(`${sum} addition`);
  };
};
const summer = addition(1, 0);
summer();
summer();
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();

let as;
const gs = function () {
  const a = 23;
  as = function () {
    console.log(a * 2);
  };
};
gs();
as();
// as();
// gs();
// as();

const fh = function () {
  const b = 77;
  as = function () {
    console.log(b * 2);
  };
};
gs();
as();
console.dir(as);
fh();
as();
console.dir(as);

const trans = [1, -2, 3, 4, -5, 6, 7, -8, 9, -10, 12];

// for of loop

for (const movement of trans) {
  if (movement > 0) console.log(`You Deposited ${movement}`);
  else console.log(`you withdrwan ${movement}`);
}

//forEach loop
trans.forEach(function (mov) {
  if (mov > 0) console.log(`You Deposited ${mov}`);
  else console.log(`you withdrwan ${mov}`);
});

trans.forEach(function (mov, i, arr) {
  if (mov > 0) console.log(`mov ${i + 1}:deposite ${mov}`);
  // if (mov < 0) console.log(`mov${i + 1}:withdrwan ${mov}`);
});

// forEach with maps and sets
const currencies = new Map([
  ["usd", "united states of america"],
  ["eur", "euro"],
  ["gbr", "pound sterling"],
]);
console.log(currencies);
currencies.forEach(function (mov, i, map) {
  console.log(`${i} : ${mov}`);
});
const set = new Set([1, 3, 4, 5, 64, 3, 2.24, 44, 2, 3, 5, 6, 98]);
console.log(set);
// const ObjSet = new Set({
//   name: "ran",
//   time: "12",
//   name: "ran",
//   name: "ras",
//   village: "hyd",
// });
// console.log(ObjSet);
set.forEach(function (mov, i, arr) {
  console.log(`${i} : ${mov}`);
});

//MAP FILTER REDUCE methods

const user = `steven Thomos Williams`;
//create user name stw
const userName = user
  .toLowerCase()
  .split(" ")
  .map((word) => word[0])
  .join("");
console.log(userName);
console.log(user);

//filter
const depoistes = trans.filter((mov) => mov > 0);
console.log(depoistes);
//reduce
const totalDeposites = trans
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDeposites);

console.log(trans);
const intrst = trans
  .filter((mov) => mov > 0)
  .map((mov) => (mov * 1.2) / 100)
  .filter((mov) => mov > 0.05)
  .reduce((acc, cur) => acc + cur, 0);
console.log(intrst);

const firstWithdrawl = trans.find((mov) => mov > 0);
console.log(firstWithdrawl);
// some and every
// they are like statments they will give either true or flse

const abovTen = trans.some((mov) => mov > 10);
console.log(abovTen);
const isAllAboveTen = trans.every((mov) => mov > 10);
console.log(isAllAboveTen);

console.log(trans.sort());
const ascend = trans.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(ascend);
//constructing new array

const newARR = new Array(5);
console.log(newARR);
//filling array with elemnts
// newARR.fill(1);
console.log(newARR);
// newARR.fill(2, 3);
newARR.fill(2, 3, 4);

console.log(newARR);

const changArrElem = [1, 3, 4, 5, 6, 7, 8, 88];
console.log(changArrElem.fill(32, 3, 7));

//creating array progrmmatically
const y1 = Array.from({ length: 7 }, () => 2);
console.log(y1);
/*
      let firstName = 'Jonas';
      console.log(firstName);//prints the value of the variable//
      console.log('firstName');//prints firstName not a value because we added quotes it treated as a string 
      console.log("firstName");//string
      console.log(typeof "firstName");// string
      console.log(typeof 'firstName');//string
      console.log(typeof firstName);// returns the value of firstName
      let 3years =2;  -> Uncaught SyntaxError: Invalid or unexpected token 
      console.log(3years); 

      let jonas&mark ='JM';  ->Uncaught SyntaxError: Unexpected token '&'
      console.log(jonas&mark);
      let jonas_mark = 'JM'; //--> no error which means JS allows only $ and  
      let jonas$mark = 'JM'; //     and _(underscore)symbol  in declaring the variable 
      console.log(jonas_mark, jonas$mark);
      
      let new = 23;  //Uncaught SyntaxError: Unexpected token 'new'

      console.log(new);// because new is predefined variable in JS so it cannnot be written as value of variable

      let function ="Jonas";//Uncaught SyntaxError: Unexpected token 'function'
      consol.log(function);

      //but they can be named as value of variable by adding $ and _ symbols

      let _function = "Jonas";
      console.log(_function);
      
      let $new = 36;
      console.log($new);

      let Person = 'Jonas"; //Uncaught SyntaxError: Invalid or unexpected token
      console.log(Person); //because one '(single quortes) and other side "(double quotes)
        

      let Person = "Jonas";
      console.log(Person);  
      let Person = 'Jonas';
      console.log(Person);
      let Person = Jonas;  //Uncaught ReferenceError: Jonas is not defined
      console.log(Person); // because string must written in quotes
      
      let person = 'jonas';
      console.log(person);
      let person = "3.1415";
      console.log(person);  // this time person is string since number is written in quotes
      console.log(typeof person); 

      let person = 3.1415;  // this time person in number, since we removed quotes
      console.log(person);
      console.log(typeof person); 

      let person = 3.1415; 
      console.log(typeof person);//number
      console.log(person);  // 3.1415  i.e JS excutes code inorder like first line to last line 
        

      let javaSriptIsFun = "Yes";
      javaScriptIsFun = 'YA Ya!';

      console.log(javaSriptIsFun);
      console.log(typeof javaSriptIsFun);
      
      let year;
      console.log(year); // here console is undefined
      console.log(typeof year);//undefined 

      let year;
      year = 2019;  //redefineing the variable value for undefined variable
      console.log(year); //  here console is 2019
      console.log(typeof year);//            number

      console.log(typeof null);// console is object it is undefined its value is also undefined
        
    
    // LET, CONST,VAR //
    let age = 30;
    console.log(age);
    let year = 1990;
    year = 1991; // redefining the variable value
    console.log(year);// 1991

    const month = 12;
    console.log(month);
    const week = 7;
    week = 12; //Uncaught TypeError: Assignment to constant variable.
     console.log(week)// we cant change the value of const varible its only read-only variable

     var myName = 'Jonas';
     myName = 'Mark';
     console.log(myName);// console is:Mark

     //we can redefine the value of let and var varibles but cant change the value of const varible
    
    // ARITHEMATIC OPERATORS//
    const ageJonas = 2037-1991;
    console.log(ageJonas);

    const ageSarah = 2037-2018;
    console.log(ageSarah, ageJonas);
    
    const now = 2037;
    const ageSarah = now - 2018;
    console.log(ageSarah)

    const firstName = "Jonas";
    const lastName = 'Bob';
    
    console.log(firstName + lastName);// JonasBob
    console.log(firstName +   lastName);// JonasBob
    console.log(firstName + ' ' + lastName);// Jonas Bob  
    
    //ASSIGNMENT OPERATORS/
    
    let y = 10+5;
    console.log(y);// 15

    y += 10;  // 15+10=25
    console.log(y);

    y *=10; //25*10
    console.log(y);//250

    y /=100;    //250/100
    console.log(y)// 2.5

    y++; // y= y+1=2.5+1
    console.log(y);//3.5

    let p =10
    p =+10;// no change will occure
    console.log(p);//10

    q =+10;
    console.log(q);//10

  //  r =*10;//Uncaught SyntaxError: Unexpected token '*'
   // console.log(r);

    s =/10; //Uncaught SyntaxError: Invalid regular expression: missing /
    console.log(s);
    //which means after = operator whatever we will put it doesnt change the value but
    //if you put any operatorafter = operator we can get change in the result according to operatoe
    
    const ageJonas = 47;
    const ageSarah = 19;
    const now = 2037;
    console.log(ageJonas > ageSarah);// true
    console.log(ageSarah > 18);//true
    const isFullAge = ageSarah >= 18;// here we are checking condition not assigning
    console.log(isFullAge);//true    // which means after = OPEARATOR also we can do opearations 

    console.log(now-1991 > now-2018); // true

    let y,z;
    y=z=25-10-5;
    console.log(y,z);

   // const avgAge = ageSarah+ageJonas/2;// this is false indication of avg
    //console.log(avgAge);//19+47/2 =19+23.5 =42.5


    const avgAge = (ageSarah+ageJonas)/2;// use brackets in the formulas to get accurate values
    console.log(avgAge);//(19+47)/2 =66/2 =33 ans;
    
  
//CODING CHALLENGE#1//
 
  const massMark = 78;
  const massJohn = 92;
  const heightMark = 1.69;
  const heightJohn = 1.95;

  const marksBMI = massMark/(heightMark*heightMark);
  const johnsBMI = massJohn/(heightJohn**2);

  console.log(marksBMI, johnsBMI);

  console.log(marksBMI > johnsBMI);

  const massMark = 70;
  const massJohn = 85;
  const heightMark = 1.88;
  const heightJohn = 1.96;

  const marksBMI = massMark/(heightMark*heightMark);
  const johnsBMI = massJohn/(heightJohn**2);

  const marksHigherBMI = marksBMI > johnsBMI;

  console.log(marksBMI,johnsBMI);

  console.log(marksHigherBMI);
  
  let wtOfMark = 78;
  let wtOfJohn = 92;
  let htOfMark = 1.69;
  let htOfJohn = 1.76; 

  let mass1 = 78;
  let mass2 = 92;
  let height1 = 1.69;
  let height2 = 1.76;

  const BMIOfMark = mass1/(height1**2);
  const BMIOfJohn = mass2/(height2**2);
  console.log(BMIOfMark, BMIOfJohn);

  let markHigherBMI = BMIOfMark > BMIOfJohn;

  console.log(markHigherBMI);

// String and Template literals//
 const firstName ='Jonas';
 const job = 'teacher';
 const birthYear = 1995;
 const year = 2037;

 const printName ="I'm + firstName, a + (year - birhtYear) +years old+ job" ;
 console.log(printName);

 const jonasNew =`I'm ${firstName} a ${year - birthYear} years old ${job}.`;
 console.log(jonasNew);

 console.log(`just a regular string`);
 console.log(`string with\nmultiple\nlines`);
 console.log(`string has
              multiple
              lines`);
              
  //IF and ELSE IF statement//

const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough){
  console.log('Sarah can start Driving licence');
}
const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough){
  console.log('Sarah can start Driving licence');
}else{
const yearsLeft = 18 - age;
console.log(`Sarah is too young wait another ${yearsLeft} years`);

}

const birthYear = 1998;
let century;

if(birthYear <= 2000){
  century = 20;
}else{
  century = 21;
}
console.log(century)
//CODING CHALLENGE #2

  const massMark = 78;
  const massJohn = 92;
  const heightMark = 1.69;
  const heightJohn = 1.95;

  const marksBMI = massMark/(heightMark*heightMark);
  const johnsBMI = massJohn/(heightJohn**2);

  console.log(marksBMI, johnsBMI);

  if(marksBMI > johnsBMI){
    console.log(`marks BMI(${marksBMI}) is more than Johns BMI(${johnsBMI})`)
  }else {
    console.log(`Johns BMI(${johnsBMI} is more than marks BMI (${marksBMI}`)
  }

  const mass_Mark = 92;
  const mass_John = 82;
  const height_Mark = 1.69;
  const height_John = 1.55;

  const marks_BMI = mass_Mark/(height_Mark*height_Mark);
  const johns_BMI = mass_John/(height_John**2);
  
  console.log(marks_BMI, johns_BMI);

  if(marks_BMI > johns_BMI){
    console.log(`marks BMI(${marks_BMI}) is more than Johns BMI(${johns_BMI})`)
  }else {
    console.log(`Johns BMI(${johns_BMI} is more than marks BMI (${marks_BMI}`)
  }
  
//Type conversion and corcion
// Type conversion
 const inputYear ='1991';
 console.log(inputYear + 10); //19910 because iput year is
 console.log(typeof inputYear)// string beacuse 1991 is quoted with single quotes
 console.log('inputYear' +10); //inpiutYear10 because we quoted inputYear in single or double quotes its treated as 
 console.log(typeof 'inputYear');// string
 
 console.log("inputYear" + 10);// inputYear10
 console.log(inputYear - 10); // 1981

 const outputYear = 1991;
 console.log(outputYear +10);// 2001
 console.log(typeof outputYear); //Number since 1991 witten without single or double quotes
 
 console.log('outputYear' + 10);//outputYear
 console.log(typeof 'outputYear');//string quotes added
 console.log("outputYear" + 10); // outputYear10  since quotes added
 console.log(typeof "outputYear");// string

 // to conver numbered string('1991') into number use Number Function

 
 console.log(Number(inputYear), inputYear);// 1991, '1991'
 console.log(Number(inputYear) + 10);//2001
 console.log(typeof Number(inputYear));// number

 console.log(Number('Jonas'));// NaN 
 console.log(typeof NaN); // number but doesnt have valid value

 console.log(String(23));
 console.log(String(23),23);//23 23
 console.log(typeof String(23));// string
 console.log(String(23) + 5);//235
 console.log(String(23) - 5);//18 for subtraction it works but addition it will be treated as a string
 console.log(String(23)+10, 23+10);//2310 33
 console.log('I am' + 23 + 'years old');
 console.log('I am' + ' ' + 23 + ' ' +'years' + " " + "old");
 console.log(`I am 23 years old`);
 console.log('I am 23 years old');

console.log('23' + '10' + 3);//23103
console.log(`23` +`10` - 3);//2307
console.log(`23 + 10 -3`);//23 + 10 -3
console.log('23 + 10 - 3');//23 +10 - 3
console.log(23 + 10 +3);//36
console.log(`23` - `10` - `3`);//10

console.log(23+2);//25
console.log(23-2);//21
console.log(23*2);//46
console.log(23/2);//11.5

console.log('23' + '2');//232
console.log('23' - '2');//21
console.log('23'*'2');//46
console.log('23'/'2');//11.5

console.log(`23 + 2`);//23 + 2
console.log(`23 - 2`);//23 - 2

let n = '1'+1;//11
    n = n - 1;//11-1
console.log(n);//10
var m = '2'- 1 +'0'+ '0' -1 +10+1;//100-1+11=110
   m = m - 10+ "0";//110-10+"0"=100+"0"
console.log(m);//1000

 //console.log(stirng(23));//Uncaught ReferenceError: stirng is not defined S should be capital letter

//TRUTHY and FALSY values//
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(' '));

const money = 0;
if(money){
  console.log("Don't spend it all");
}else{
  console.log("You should get a job!");
}


let height = 1;
if(height){
  console.log('YAY! height is defined');
}else{
  console.log('Height is undefined');
}
//Type corcion is always done by JS in two times when 
// Using logical operators ang using logical content

//EQUALITY OPERATOR

const age = 18;
console.log(age);//18
console.log(typeof age);//number

if(age == 18) console.log("loose"); //18=18
if(age === 18) console.log("strict");//18=18

const year = '2022';
console.log(year);//403
console.log(typeof year);//string

if(year === 2022){    // must be equal to strictly // here string is not equal to number2022
 console.log('strict');// so this will not print
}else{
  console.log('not equal'); 
}
// console is not equal

if(year == 2022) {
  console.log('loose'); // here it is not mandatory to strictly equal
}else{                      
  console.log('not equal');
}

const favorite = prompt("whats your favorite number: ");
console.log(favorite);
console.log(typeof favorite);// string
   
if (favorite == 23){
  console.log('cool! 23 is a amzing number');
} else{
  console.log('number is not equal to 23');
}
if(favorite === 23){
  console.log('both equal to same family');
}else{
  console.log('they are different from each other');
}
const favorite = prompt('what is your favorite number');
console.log(Number(favorite));
console.log(typeof favorite);
if(favorite === 23){
  console.log('23 is amazing number');
}else if(favorite === 7){
  console.log('7 is also amazing number');
}else if (favorite === 9){
  console.log('9 is a number');
}else{
  console.log('numbers are not 23,7 and 9');
}if(favorite !== 23)console.log('why not 23!')

const hasDriversLicence = true;
const hasGoodVision = true;
const isTired = false;
console.log(hasDriversLicence && hasGoodVision && !isTired);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);
console.log(!isTired);

if(hasDriversLicence && hasGoodVision && !isTired) console.log(`Sarah is able to drive`);
else console.log(`Someone else should drive`); 

// CODING challenge #3

let score1 = 91;
let score2 = 110;
let score3 = 110;

let scoreK_1 = 110;
let scoreK_2 = 91;
let scoreK_3 = 110;

const avgDolphin = (score1+score2+score3)/3;
const avgKolas = (scoreK_1 + scoreK_2 + scoreK_3)/3;

console.log(avgDolphin, avgKolas);
if(avgDolphin > avgKolas){
  console.log('Dolphins has higher score than Kolas');
}else if(avgKolas > avgDolphin){
  console.log(`Kolas has higher score than Dolphins`);
}else console.log(`Both have equal score(${avgDolphin})`);


//another way 
const dolphinScore = (97+109+130)/3;
const kolasScore =(109+97+130)/3;

console.log(dolphinScore, kolasScore);
if(dolphinScore > kolasScore)console.log(`Dolphins has higher score(${dolphinScore}) than Kolas`);
else if(dolphinScore < kolasScore)console.log(`Kolas has higher score(${kolasScore}) than Dolphins`);
else console.log(`Both have equal score i.e ${dolphinScore}`);

if(dolphinScore>kolasScore && dolphinScore>=100){
  console.log(`Dolphins will win the Trophy`);
}else if(dolphinScore<kolasScore && kolasScore>=100){
 console.log(`Kolas will win the Trophy`);

}else if(dolphinScore === kolasScore && kolasScore>=100 && dolphinScore>=100){
  console.log(`Both teams have equal score(${kolasScore}. Both teams will share the trophy`);
}else{
 console.log(`Both teams have score less than 100. Hence no one win the trophy`);
} 


// switch statment
const day = "Sunday";

switch(day){
case 'Monday':
  console.log(`plan course structure`);
  console.log(`Go to coding meetup`);
  break;

case 'Tuesday':
  console.log(`Prepare theory vedios`);
  break;
case 'Wednesday':
case 'Thursday':
  console.log(`Write code examples`);
  break;
case 'Friday':
  console.log(`Record vedios`);
  break;
case 'Saturday':
case 'Sunday':
  console.log(`Enjoy the weekend`);
  break;
default:
  console.log('Not a valid day');
} 


// THE CONDITIONAL or TERNIRARY OPERATOR//

const age = prompt(`Enter your age: `);
//if (age >= 23){
 // console.log(`I like to drink wine`);
//}

age >= 18?console.log(`I like to drink wine`):
  console.log(`I like to drink water`);
  const drink = age >=18 ? 'wine' : 'water';
  console.log(drink);

  console.log(`I like to drink ${age>=18 ? 'wine' : 'water'}`);
  //console.log(`${age <= 0 ? 'invalid input': ' '} `);
  

//CODING CHALLENGE

const billValue = 433 ;

if(billValue >= 50 && billValue <=300){
  

  const tipValue = (billValue/100)*15;
  console.log(tipValue);
  console.log(`The bill was ${billValue}, the tip was ${tipValue} and the total value is ${billValue + tipValue}`);

}else {

  const tipValue =(billValue/100)*20;
  console.log(tipValue);
  console.log(`The bill was ${billValue}, the tip was ${tipValue} and the total value is ${billValue + tipValue}`);


}

const bill=433;

console.log(`The bill is ${bill}, the tip is ${ tip = bill>50 && bill<= 300 ? bill*0.15 : bill*0.20} and the total value is ${bill + tip}`);
*/
