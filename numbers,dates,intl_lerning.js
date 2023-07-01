"use strict";
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
//
/////////////////////////////////////////////////
// Data
//
// DIFFERENT DATA! Contains movement dates, currency and locale
//
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  //
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2022-12-30T14:43:26.374Z",
    "2022-12-31T18:49:59.371Z",
    "2023-01-01T12:01:20.894Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};
//
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  //
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2022-12-30T14:43:26.374Z",
    "2022-12-31T18:49:59.371Z",
    "2023-01-01T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};
//
const accounts = [account1, account2];
//
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");
//
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
//
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");
//
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
//
/////////////////////////////////////////////////
// Functions
const formatMovementsDate = function (date, locale) {
  // console.log(date, '>>', locale);
  const calcDaysPassed = (date1, date2) =>
    // console.log(date1, date2);

    Math.round(Math.abs((date2 - date1) / (24 * 60 * 60 * 1000)));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(new Date());
  // console.log(daysPassed);
  if (daysPassed == 0) return "Today";
  if (daysPassed == 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  //else {
  // const year = `${date.getFullYear()}`;
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const day = `${date.getDate()}`.padStart(2, 0);

  // return `${day}/${month}/${year}`;
  //}

  //interantionalising transcations dates(i.e. dates writing in user language)

  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    weekDays: "long",
    year: "numeric",
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
};
//function to return internationalising currency numbers
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

// setting countDown timer in the app to check inactivity of map
const startLogoutTimer = function () {
  const tick = function () {
    //setting time in minutes and sec format
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    //padStart is defined for strings only so convert above number into string then apply padstrt
    labelTimer.textContent = `${min}:${sec}`;

    //when 0 sec appear stop timer
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log into get started";
      containerApp.style.opacity = 0;
    }
    //decrement time for evaery 1 sec
    time--;
  };
  //set time to 5 mins
  let time = 120; //-->this number in secs
  //call the timer every second
  //in each call print the remaining time to UI

  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

// displaying movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  // console.log(acc.movements);
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    //adding date
    const date = new Date(acc.movementsDates[i]);
    // console.log(date);
    //interntioonalising date and time
    const displayDate = formatMovementsDate(date, acc.locale);
    //internatonalising numbers
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    // new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
   
        <div class="movements__value">${formattedMov}</div>
      </div>

     
    `;
    //
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);
//
//creating a function to display total Balence
const diplayBalence = function (acc) {
  //inserting balnece varible into current object
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  // console.log(balence);
  // const formattedBal = new Intl.NumberFormat(acc.locale, {
  //   style: 'currency',
  //   currency: acc.currency,
  // }).format(acc.balance);
  // the above code is taken from function defined in globle scope
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
  //`${acc.balance.toFixed(2)}€`;
};
// diplayBalence(account1.movements);
//creating a function to display total INs(deposits) and OUTs(withdrawls)
const calcDisplaySummery = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  //internationalising incomes
  // const formattedIn = new Intl.NumberFormat(acc.locale, {
  //   style: 'currency',
  //   currency: acc.currency,
  // }).format(incomes);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  // `${incomes.toFixed(2)}€`;
  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  //internationalising out balance
  // const formattedOut = new Intl.NumberFormat(acc.locale, {
  //   style: 'currency',
  //   currency: acc.currency,
  // }).format(outcomes);
  labelSumOut.textContent = formatCur(outcomes, acc.locale, acc.currency);
  // `${Math.abs(outcomes.toFixed(2))}€`;
  //lets say bank is paying interest for your deposites(since interest payed only deposited money)
  //2 lets say bank pays interest if that interest is atleast one Euro
  //
  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * currentAccount.interestRate) / 100)
    .filter((mov, i, arr) => {
      // console.log(arr);
      return mov > 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  //internationalising  interesting(i.e writing inn user format)
  // const formattedIntrst = new Intl.NumberFormat(acc.locale, {
  //   style: 'currency',
  //   currency: acc.currency,
  // }).format(interest);
  //this function is using in many times this function is defined in globel then we call

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
  //  `${interest.toFixed(2)}€`;
  // console.log(incomes, outcomes, interest);
};
// calcDisplaySummery(account1.movements);
//

//creating USERNAMES for accounts
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    //inserting userName into accounts objets (acc.userName)
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserName(accounts);
console.log(accounts);
//

//
//Event handler
let currentAccount, timer;

//implementing login
btnLogin.addEventListener("click", function (e) {
  //prevent form from sumbimt

  e.preventDefault();
  //
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  //
  // (+ converts string into number)
  if (currentAccount?.pin === +inputLoginPin.value) {
    console.log("Login");
    //DISPLAY UI and Message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // console.log(currentAccount);
    //creating current date
    const now = new Date();
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day} / ${month} / ${year} ${hour}:${minutes}`;
    //creating localised date&time for user
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      weekDays: "long",
      year: "numeric",
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    //timer;
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    //updateUI
    updateUI(currentAccount);
    //clear inputFIelds
    inputLoginUsername.value = inputLoginPin.value = "";
  }
});
//
const updateUI = function (acc) {
  //DisplayMOVEMENTS
  displayMovements(acc);
  //Display balance
  diplayBalence(acc);
  //Diplay summary￼￼￼
  calcDisplaySummery(acc);
};
//
//
//
//implimenting transfers
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  // console.log(amount);
  const recieverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  // console.log(recieverAcc);
  // inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAcc &&
    recieverAcc?.userName !== currentAccount.userName
  ) {
    setTimeout(function () {
      //DOING THE TRANSFER
      currentAccount.movements.push(-amount);
      recieverAcc?.movements.push(amount);
      //add transfer Date
      currentAccount.movementsDates.push(new Date().toISOString());
      recieverAcc.movementsDates.push(new Date().toISOString());
      //updateUI
      updateUI(currentAccount);
      // console.log('HII transfer valid');
      // console.log(recieverAcc);
      //reset timer
      clearInterval(timer);
      timer = startLogoutTimer();
    }, 2500);
    inputTransferAmount.value = inputTransferTo.value = "";
  }
});
//
//closing account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // console.log('you have deleted your account');
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    console.log(index);
    //delet Account
    accounts.splice(index, 1);
    //hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  //IF I want to take a loan of 150.53 euros

  const amount = Math.floor(inputLoanAmount.value);
  console.log(amount);
  if (
    amount > 0 &&
    currentAccount.balance >= inputLoanAmount.value &&
    currentAccount.movements.some(
      (mov) => mov >= amount * (currentAccount.interestRate / 100)
    )
  ) {
    // // console.log('you can take a loan');
    // currentAccount.movements.push(amount);
    // // adding current date
    // currentAccount.movementsDates.push(new Date().toISOString());
    // //updateUI
    // updateUI(currentAccount);
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      //resetting timer
      clearInterval(timer);
      timer = startLogoutTimer(timer);
    }, 2500);
  }
  inputLoanAmount.value = "";
});
//
//calling sort function
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; //flipping this variable
});

//cahnging the color of the movements row in the bankist app

labelBalance.addEventListener("click", function () {
  // e.preventDefault();
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    //painting color to evennumber lines
    if (i % 2 === 0) row.style.backgroundColor = "green";
    else if (i % 2 === 1) row.style.backgroundColor = "yellow";
  });
});
//creating FAKE logge in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// btnSort.addEventListener('CLICK', function () {
//   document.querySelector('.summary__value').style.backgroundColor = 'red';
//   console.log('>>>>>>>>>>>>>..', 23);
//   console.log(document.querySelector('.summary__value'));
// });

//IF I want to take a loan of 150.53 euros
// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Math.floor(inputLoanAmount.value);
//   console.log(amount);
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//    N U M B E R S ,   D A T E S   I N T L   A N D   T I M E R S

//additional ways of representing data numbers and dates

//CONVERTING AND CHECKING NUMBERS
// ALL numbers are represented in javascript internally are floating point numbers.and numbers are represented in 64 base 2 format thta means numbers are always stored in binary format
/*
console.log(23 === 23.0); //true
console.log(23 == 23.0); //true

console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

console.log(2.3 + 0.5 === 2.8); //true

console.log(0.3 + 0.4); //0.7
console.log(0.3 + 0.4 === 0.7); //true
console.log(0.1 + 0.3); //0.4

//converting string into numbers

console.log(typeof '23'); //string
console.log('23'); //23
console.log(Number('23')); //23

console.log(+'23'); //23
console.log(typeof +'23'); //number

console.log(0.2 + 0.3); //0.5
console.log('0.2' 
+ '0.3'); //0.20.3
console.log(0.1 + '0.2' + '0.3'); //0.10.20.3
console.log('0.2+0.3'); //0.2+0.3

console.log(+'hii'); //NaN

//  PARSING
console.log('30px');
console.log(Number('30px')); //NaN
//parsInt converts a string into number
console.log(Number.parseInt('30px')); //30
console.log(Number.parseInt('30pxlkdasklfh')); //30

console.log(Number.parseInt('s30psdfj')); //NaN

console.log(Number.parseInt('30kjafojewpoindfnkfd')); //30
// console.log(Number.parseInt(30rem));//Uncaught SyntaxError: Invalid or unexpected token
console.log(Number.parseInt('30.5')); //30
console.log(Number.parseInt('30.54rem')); //30
console.log(Number.parseInt('30.54498794odsjrem')); //30

// console.log(Number.parseInt(30.5rem));//Uncaught SyntaxError: Invalid or unexpected token

// parseInt accepts radix (p,q) ->q is a redix, p ->string
console.log(Number.parseInt('30', 10)); //30
console.log(Number.parseInt('30rem', 10)); //30
console.log(Number.parseInt('30rem', 2)); //NaN
console.log(Number.parseInt('30rem', 16)); //48
console.log(Number.parseInt('30rem', 8)); //24
console.log(Number.parseInt('30', 2)); //NaN
console.log(Number.parseInt('30', 16)); //48

//ONLY ACCEPTS ITS OWN RADIX NOT OTHER RADIX
//A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.

console.log(Number.parseInt('30.5rem', 10)); //30
console.log(Number.parseInt('30.5rem', 2)); //NaN
console.log(Number.parseInt('30.452LJFLKJF', 10)); //30
console.log(Number.parseInt('30x', 10));
console.log(Number.parseInt('30x', 2));
console.log(Number.parseInt('30x', 16));
console.log(Number.parseInt('30x', 8));

console.log(Number.parseInt('0x30', 10)); // 0
console.log(Number.parseInt('0x30', 2)); // 0
console.log(Number.parseInt('0x30', 8)); // 0

console.log(Number.parseInt('0x30', 16)); // 48
//base 16 number is giving the value in the decimal notation
console.log(Number.parseInt('30x', 10)); //30
console.log(Number.parseInt('30x', 2)); //NaN
// console.log(Number.parseInt('30x',0x));
console.log(Number.parseInt('30x', 16)); //48
console.log(Number.parseInt('30x', 8)); //24

console.log(Number.parseInt('1ACF', 16)); //6863
console.log(Number.parseInt('1ACF', 10)); //1
console.log(Number.parseInt('1ACF', 8)); //1
console.log(Number.parseInt('1BCD', 2)); //1

console.log(Number.parseInt('ABCD', 16)); //43981
console.log(Number.parseInt('ABCD', 10)); //NaN
console.log(Number.parseInt('ABCD', 8)); //NaN
console.log(Number.parseInt('ABCD', 2)); //NaN

console.log(Number.parseInt('A1CD', 16)); //41421
console.log(Number.parseInt('A1CD', 10)); //NaN
console.log(Number.parseInt('A1CD', 2)); //NaN

console.log(Number.parseInt('A1CD.12', 16)); //41421
console.log(Number.parseInt('A1CD.12', 10)); //NaN

console.log(Number.parseInt('754', 10)); //754
console.log(Number.parseInt('754', 16)); //1896
console.log(Number.parseInt('754', 8)); //492
console.log(Number.parseInt('754', 2)); //NaN

console.log(Number.parseInt('110111', 2));
console.log(Number.parseInt('110111', 8));
console.log(Number.parseInt('110111', 10));
console.log(Number.parseInt('110111', 16));
console.log(Number.parseInt('110111', 32));

//PARSEfloat
console.log(Number.parseInt('00030.534')); //30

console.log(Number('00030.542')); //30.542
console.log(Number.parseInt('30.534')); //30
console.log(Number.parseFloat('30.534')); //30.5
console.log(Number.parseFloat('30.984329lakjflkjd')); //30.984329

console.log(Number.parseFloat('re30.3838')); //NaN

console.log(Number.parseFloat('0438.872oioifoisj')); //438.872

console.log(Number.parseFloat('0sdf342.237')); //0

console.log(Number.parseFloat('1v23422.fsa')); //1

console.log(Number.parseFloat('1v23422.24fsa4')); //1

console.log(Number.parseFloat('1v23422.24')); //1

console.log(Number.parseFloat('12.24fsa4')); //12.24
console.log(Number.parseFloat('e1v23422.24fsa4')); //NaN

//using radix
console.log(Number.parseInt('20.34', 10)); //20
console.log(Number.parseInt('20.34', 16)); //32
console.log(Number.parseInt('20.34', 8)); //16
console.log(Number.parseInt('20.34', 2)); //NaN

console.log(Number.parseFloat('20', 2)); //NaN
console.log(Number.parseFloat('20', 8)); //20
console.log(Number.parseFloat('20', 10)); //20
console.log(Number.parseFloat('20', 16)); //20

console.log(Number.parseFloat('20.34', 10)); //20.34
console.log(Number.parseFloat('20.34', 16)); //20.34
console.log(Number.parseFloat('20.34', 8)); //20.34
console.log(Number.parseFloat('20.34', 2)); //20.34

console.log(Number.parseFloat('20rem.34', 10)); //20
console.log(Number.parseFloat('20rem.34', 16)); //20
console.log(Number.parseFloat('20rem.34', 8)); //20
console.log(Number.parseFloat('20rem.34', 2)); //20

console.log(Number.parseFloat('20.34rem', 10)); //20.34
console.log(Number.parseFloat('20.34rem', 16)); //20.34
console.log(Number.parseFloat('20.34rem', 8)); //20.34
console.log(Number.parseFloat('20.34rem', 2)); //20.34

//parse float wont convert given string number into base radix notation
//parseInt can convert given string number into base redix notations

//NUMBER NAME SPACE (isNaN)(IT checks value is NaN or not);

console.log(Number.isNaN(20)); //false because 20 is a number its not a NaN
console.log(typeof +'20px'); //number
console.log(typeof '20px'); //string

console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20')); //false
console.log(Number.isNaN('20rem')); //false
console.log(Number.isNaN(+'20rem')); //true
console.log(Number.isNaN(+'20px')); //true
console.log(Number.isNaN(+'20.54')); //false
console.log(Number.isNaN(20.34)); //false
console.log(Number.isNaN(+'20.45sf')); //true

console.log(+'20'); //20
console.log(+'20px'); //NaN
console.log(Number('20px')); //NaN

console.log(Number.isNaN(Number.parseInt('20.45sf'))); //false
console.log(Number.isNaN(Number.parseFloat('20.45sf'))); //false

console.log(Number.isNaN(23 / 0)); //false
console.log(Number.isNaN('23/0')); //false
console.log(Number.isNaN('0/23')); //false
console.log(23 / 0); //Infinity

//checking if value is NUMBER IS FINIT or NOT
console.log(Number.isFinite(20)); //ture
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20')); //true
console.log(Number.isFinite(23 / 0)); //false

console.log(Number.isFinite('20PS')); //false
console.log(Number.isFinite(+'20PS')); //false
console.log(Number.isFinite(Number.parseInt('20PS'))); //ture
console.log(Number.isFinite(Number.parseFloat('20.35rhf'))); //ture

console.log(Number.isFinite(20 / 3));
console.log(Number.isFinite(2 / 3));
console.log(Number.isFinite(1 / 3));

console.log(Number.isFinite(22 / 7)); //true
console.log(Number.isFinite(Math.sqrt(2))); //true
console.log(Number.isFinite(Math.sqrt(10))); //true
console.log(Number.isFinite(Math.sqrt(19))); //true
console.log(Number.isFinite(Math.sqrt(10 / 3))); //true
console.log(Number.isFinite(Math.sqrt(19 / 0))); //false

//   *****   M A T H    a n d     R O U N D I N G ******

console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5 ->sqrt
console.log(8 ** (1 / 3)); //2  ->cubicrooot
console.log(256 ** (1 / 4)); //4 ->4throot

console.log(Math.pow(2, 2)); //4
console.log(Math.pow(2, 3)); //8
console.log(Math.pow(2, 4)); //16

console.log(Math.pow(2, 1 / 2)); //1.4142135623730951
console.log(Math.pow(8, 1 / 3)); //2
console.log(Math.pow(256, 1 / 4)); //4
console.log(Math.pow(625, 1 / 5)); //3.623898318388478
console.log(Math.pow(5, 1 / 5)); //1.379729661461215

console.log(parseFloat(10) ** 2); //100
console.log(10 ** 2); //100
console.log(100 ** (1 / 2)); //10
console.log(1000 ** (1 / 3)); //10

console.log(Math.max(5, 6, 23, 1, 7, 10)); //23
console.log(Math.max(3, 4, '23', 7, 10)); //23
console.log(Math.max(3, 4, '23', 23, 7, 10)); //23
console.log(Math.max([3, 4, 23, 7, 10])); //NaN
console.log(Math.max([3, 4, 23, 7, 10])); //NaN
console.log(Math.max(...[3, 4, 23, 7, 10])); //23
// console.log(Math.max({3,5,23,5,7,1}))//Uncaught SyntaxError: Unexpected number

console.log(Math.min(3, 4, 67, 2, 4, 22, 23)); //2
console.log(Math.min(3, 4, 67, '2', 4, 22, 23)); //2
console.log(Math.min([3, 4, 23, 7, 10])); //NaN
console.log(Math.min(...[3, 4, 23, 7, 10])); //3
console.log(Math.min(...['3', 4, 23, 7, 10])); //3

console.log(Math.PI); //3.141592653589793
console.log(Math.PI * Math.pow(Number.parseFloat('10rem'), 2));
//314.1592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793
console.log(Math.PI * 10 ** 2);
314.1592653589793;

//RANDOM FUNCTION
console.log(Math.random()); //its value vary betwwen 0 and 1 but not 0 and 1
console.log(Math.random() * 6); //its maximum value is 5
console.log(Math.trunc(Math.random() * 6)); //its value vary between 0 to 5 but not 6

//if you are rolling a dice then add 1 to above random function to vary the value from 0 to 6
console.log(Math.trunc(Math.random() * 6 + 1));

//create RANDOM INTEGER

const randomInt1 = (min, max) => Math.trunc(Math.random() * (max - min) + 1);
console.log(randomInt1(1, 6));
//this funciton displays the random numbers form 1 to 6 but wont display 6
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(2, 5)); //prints values from  2 to 5 (it can print max)but dont print 2 (min)

// console.log(Math.randomInt(2, 10));//Uncaught TypeError: Math.randomInt is not a function

//  R A N D O M   I  N T E G E R S
console.log(Math.trunc(23.3)); //23
console.log(Math.trunc(23.8)); //23
console.log(Math.trunc(23.9999)); //23

console.log(typeof Math.trunc(23.9999)); //number

//otherWays
console.log(Math.round(23.33)); //23
console.log(Math.round(23.4)); //23

console.log(Math.round(23.5)); //24
console.log(Math.round(23.6)); //24
console.log(Math.round(23.8)); //24
console.log(Math.round(23.9999)); //24

console.log(typeof Math.round(23.9999)); //number

//this round method rounded the decimal to nearest integer

//roundUP
console.log(Math.ceil(23.0)); //23
console.log(Math.ceil(23.0001)); //24
console.log(Math.ceil(23.1)); //24
console.log(Math.ceil(23.4)); //24
console.log(Math.ceil(23.5)); //24
console.log(Math.ceil(23.8)); //24
console.log(Math.ceil(23.9999)); //24
console.log(typeof Math.ceil(23.333)); //Number
//this method round th decimal number into nearest maximum integer

//roundDOWN
console.log(Math.floor(23.0)); //23
console.log(Math.floor(23.0001)); //23
console.log(Math.floor(23.1)); //23
console.log(Math.floor(23.4)); //23
console.log(Math.floor(23.5)); //23
console.log(Math.floor(23.8)); //23
console.log(Math.floor(23.9999)); //23

console.log(typeof Math.floor(23.43)); //Number
//round for negative numbers

console.log(Math.trunc(-23.005)); //-23
console.log(Math.trunc(-23.1)); //-23
console.log(Math.trunc(-23.3)); //-23
console.log(Math.trunc(-23.43)); //-23
console.log(Math.trunc(-23.5)); //-23
console.log(Math.trunc(-23.6)); //-23
console.log(Math.trunc(-23.8)); //-23
console.log(Math.trunc(-23.9)); //-23
console.log(Math.trunc(-23.9999)); //-23

console.log(typeof Math.trunc(-23.9999)); //number

// console.log(Math.ciel(-23.005)); //Uncaught TypeError: Math.ciel is not a function

console.log(Math.floor(-23.005)); //-24
console.log(Math.floor(-23.1)); //-24
console.log(Math.floor(-23.3)); //-24
console.log(Math.floor(-23.43)); //-24
console.log(Math.floor(-23.5)); //-24
console.log(Math.floor(-23.6)); //-24
console.log(Math.floor(-23.8)); //-24
console.log(Math.floor(-23.9)); //-24
console.log(Math.floor(-23.9999)); //-24

const ranDomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(ranDomInt(1, 4));
console.log(ranDomInt(0, 6));
// genreralised function to create a rondom interger btween min and max

//    R O U N D I N G   D E C I M A L S (floating point numbers)
console.log(2.7); //2.7
console.log(2 / 3); //0.666666666
console.log((2.3).toFixed(0)); //2
console.log((2).toFixed(2)); //2.00

console.log((2 / 3).toFixed(2)); //0.67
console.log(Math.PI.toFixed(4)); //3.1415
console.log((2.34233).toFixed(2)); //2.34

console.log(typeof (2.34233).toFixed(2)); //string
//  the result of the toFixed() function is string to convert it into Number use number function or + infront of ot
console.log(+(2.34353).toFixed(2)); //2.34
console.log(typeof +(2.34353).toFixed(2)); //number

//exponential representation
console.log(Math.exp()); //NaN

console.log(Math.exp(0)); //1
console.log(Math.exp(1)); //2.718281828459045
console.log(Math.exp(2)); //7.38905609893065

console.log(Math.trunc(Math.exp(1))); //7
console.log(Math.round(Math.exp(2))); //7
console.log(Math.floor(Math.exp(2))); //7
console.log(Math.ceil(Math.exp(2))); //8

console.log(Math.exp(2).toFixed(2)); //7.39

console.log(typeof Math.exp(2).toFixed(2)); //string
console.log(typeof +Math.exp(2).toFixed(2)); //number

console.log(Math.expm1(0)); //0  (e pow(x)-1)
console.log(Math.expm1(1)); //1.718281828459045
console.log(typeof Math.expm1(1)); //number

//logertemic function
console.log(Math.log(10)); //2.302585092994046
console.log(Math.log(10, 10)); //2.302585092994046 (10 is ignored)
console.log(typeof Math.log(10)); //number

console.log(Math.log(10) / Math.log(2)); //3.3219280948873626
console.log(Math.log2(10)); //3.321928094887362

// these numbers are primitives. these primitives does not have any methods to convert, so javascript do boxing which means primitieves first coverts into Number objects then call the methods onthat method,once operation fifnished it will again convert into primitive

//     R E M A I N D E R    O P E R A T O R

console.log(5 % 2); //1    --->remainder
console.log(5 / 2); //2.5 ---->Quetient

console.log(8 % 3); //2
console.log(8 / 3); //2.6666666666666665 -->8=2*3+2  2 is remainder

console.log(6 % 2); //0
console.log(6 / 3); //2  -->6=2*3+0  --..>0 is remainder

console.log(7 % 2); //1
console.log(7 / 2); //3.5  7=3*2+1 --->1 is remainder

//create a function to check a number even or not
const isEven = n => n % 2 === 0;
console.log(isEven(2)); //true
console.log(isEven(3)); //flase
console.log(isEven(532)); //true

console.log(isEven(5 / 2)); //false
console.log(isEven(9 / 11)); //false
console.log(isEven((2 / 3).toFixed(2))); //false
console.log(2 / 3); //0.6666666666666666

console.log(isEven(9 / 11)); //false

console.log([document.querySelectorAll('movements__row')]);
//[NodeList(0)]
const isOdd = n => n % 2 === 1;

console.log(isOdd(2)); //false
console.log(isOdd(3)); //true

console.log(isOdd(2 / 3)); //false
console.log(isOdd(3 / 2)); //false
console.log(isOdd(2 / 2)); //true
console.log(isOdd(6 / 2)); //true
console.log(isOdd(12 / 2)); //false

//     N U M E R I C   S  E P E R A T O R S

const diameter = 243890000000;
const dia = 234_432_000_000;
console.log(diameter); //243890000000
console.log(dia); //234432000000

const priceCents = 345_99;
console.log(priceCents); //34599

const price = 15_00;
const price2 = 150_0;

console.log(price); //1500
console.log(price2); //1500

const PI = 3.14_15;
console.log(PI); //3.1415

console.log(Number('230000'));
console.log(Number('230_000')); //NaN
//if we get number fromAPI  you should  not use underscore in that number.first we have to store it in variable

console.log(parseInt('230_000')); //230
console.log(parseFloat('230_000')); //230
console.log(parseInt('23_000')); //23
console.log(parseInt(230_000)); //230000
console.log(parseFloat(23_000)); //23000

//  WORKING WITH     B I G I N T
console.log(2 ** 3 - 1); //7
console.log(2 ** 53 - 1);
// 9007199254740991;    -->this is the biggest iteger javascript can strore safely in memory

console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
/// **** ANY NUMBER ABOVE THIS CANNOT STORE PROPERLY
console.log(2 ** 53 + 1); //9007199254740992
console.log(2 ** 53 + 2); //9007199254740994
console.log(2 ** 53 + 3); //9007199254740996
console.log(2 ** 53 + 4); //9007199254740996
console.log(2 ** 53 + 5); //9007199254740996
console.log(2 ** 53 + 6); //9007199254740998
console.log(2 ** 53 + 7); //9007199254741000
console.log(2 ** 53 + 8); //9007199254741000

// console.log(2 ** 53 + 2 ** 34); //9007216434610176
// console.log(2 ** 53 + 2 ** 344); //3.583591587484487e+103
// console.log(2 ** 432); //1.109067877648326e+130
// console.log(2 ** 321 - 1); //4.27197407184182e+96

//to prevent this problem, from ES2020 a new premitive is added which  is call BIGINT

// BIGINT it can store integers as long as it is

console.log(3898409707410974070732097307952348764876874687648764796);
//3.898409707410974e+54
console.log(
  38984097074109740705707475027047040750927094098209840984098049809809852088409280984095809580958094804884890807207572409850980485084098509840958092850980580985094805983420985098540985097508708758270980948092840957208576098509809725074085709502809828509809702947509409509342850948093470247098732097307952344564
); //3.898409707410974e+307
//THIS is the number before infinity (infinity-1)
console.log(
  389840970741097407057074750270470407509270940982098409840980498098098520884092809840958095809580948048848908072075724098509804850840985098409580928509805809850948059834209850985409850975087087582709809480928409572085760985098097250740857095028098285098097029475094095093428509480934702470987320973079523445640
); //infinity
console.log(
  389840970741097407057074750270470407509270940982098409840980498098098520884092809840958095809580948048848908072075724098509804850840985098409580928509805809850948059834209850985409850975087087582709809480928409572085760985098097250740857095028098285098097029475094095093428509480934702470987320973079523445640n
); //38984097074109740705707475027047040750927094098209…094095093428509480934702470987320973079523445640n

console.log(2345n); //2345n
console.log(typeof 2345n); //bigint
console.log(typeof 2345); //number

//n reoresent bigINT
console.log(BigInt(2345)); //2345n
console.log(BigInt(233454546544264323425566565)); //2334546544264323438477312n

//OPERATIONS
console.log(1000n + 1000n); //2000n
console.log(1000n - 1000n); //0n
console.log(100n - 99n); //1n
console.log(100n * 12n); //1200n
console.log(100n / 10n); //10n
console.log(100n % 10n); //0n

const huge = 374982497196987598798279898139875;
console.log(huge + 10); //3.749824971969876e+32
const huge1 = 8109023704207540985409854n;
console.log(huge1 + 100000n); //8109023704207540985509854n

// console.log(huge1 + 1);//Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
const num = 10;
// console.log(huge1 * num);//Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// console.log(huge1 / num);//Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

//EXCEPTIONS
console.log(20n > 15); //true
console.log(20n < 10); //false

console.log(10n > 5n); //true
console.log(10n < 5n); //true

console.log(20n == 20); //true

console.log(typeof 20n, typeof 20); //bigInt number

console.log(huge1 + 'is really big!!'); //8109023704207540985409854is really big!!
console.log(typeof huge1 + 'is really big!!'); //bigintis really big!!

console.log(Math.sqrt(16)); //4
console.log(16 ** (1 / 2)); //4

// console.log(Math.sqrt(16n));//Uncaught TypeError: Cannot convert a BigInt value to a number
// console.log(16n ** (1 / 2));//Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions


//  ****  C R E A T I N G   D A T E S

const now = new Date();
console.log(now);
console.log(new Date());
// console.log(date());//script.js:847 Uncaught ReferenceError: date is not defined
// console.log(new date());//script.js:847 Uncaught ReferenceError: date is not defined
const tell = new Date();
console.log(tell);

console.log(new Date(`Mon Jan 02 2023 10:52:22`));
console.log(new Date(`Jan 02 2023 10:52:22`));

console.log(new Date('jan 01 2023 18:05'));
console.log(new Date('aug 01 2022 '));
console.log(new Date('>>>', 'aug 01  ')); //Invalid Date

console.log(new Date('aug 2021'));
// Sun Aug 01 2021 00:00:00 GMT+0530 (India Standard Time)
console.log(new Date('2022')); //Sat Jan 01 2022 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date(2023, 0, 1, 15, 23, 5));
//Sun Jan 01 2023 15:23:05 GMT+0530 (India Standard Time)

console.log(new Date(2023, 1, 19, 15, 23, 5));
//Sun Feb 19 2023 15:23:05 GMT+0530
console.log(new Date(2023, 2, 19, 15, 23, 5));
//Sun Mar 19 2023 15:23:05 GMT+0530
console.log(new Date(2023, 1, 2));
// Thu Feb 02 2023 00:00:00 GMT+0530
// console.log(new Date(2023 1 23));
//Uncaught SyntaxError: missing ) after argument list
console.log(new Date(2023, 1, 28));
//Tue Feb 28 2023 00:00:00 GMT+0530
console.log(new Date(2023, 1, 29));
//Wed Mar 01 2023 00:00:00 GMT+0530
console.log(new Date(2023, 1, 30));
// Thu Mar 02 2023 00:00:00 GMT+0530
console.log(new Date(2023, 1, 45));
//Fri Mar 17 2023 00:00:00 GMT+0530
console.log(new Date(2023, 1, 175));
//Tue Jul 25 2023 00:00:00 GMT+0530 (India Standard Time)

//java script uses the zero index base for month. so add +1 to get requred month,
//jave script auto corrects the date i.e. if number of days represented more than present days in month then it will automatically goes to next month

console.log(new Date()); //Mon Jan 02 2023 11:23:13 GMT+0530
console.log(new Date(0)); //Thu Jan 01 1970 05:30:00 GMT+0530
console.log(new Date(1)); //Thu Jan 01 1970 05:30:00 GMT+0530
console.log(new Date(20)); //Thu Jan 01 1970 05:30:00 GMT+0530
console.log(new Date(3));

// *****converting DAY into milliseconds

console.log(new Date(1 * 24 * 60 * 60 * 1000));
// Sat Jan 03 1970 05:30:00 GMT+0530
// java script callender is start from 1970
console.log(1 * 24 * 60 * 60 * 1000); //86400000--> this is timestemp;
console.log(3 * 24 * 60 * 60 * 1000); //259200000--> this is timestemp;

// working with DATES
const future = new Date(2037, 10, 19, 15, 23, 37, 12);
console.log(future); //Thu Nov 19 2037 15:23:37 GMT+0530

console.log(future.getYear()); //137--->dont use this

console.log(future.getFullYear()); //2037
console.log(future.getMonth()); //10
console.log(future.getDate()); //19
console.log(future.getDay()); //4
console.log(future.getHours()); //15
console.log(future.getMinutes()); //23
console.log(future.getSeconds()); //37
console.log(future.getMilliseconds()); //12

console.log(future.getTime());
// 2142237217012;

//using utc

console.log(future.getUTCFullYear()); //2040
console.log(future.getUTCMonth()); //10
console.log(future.getUTCDate()); //19
console.log(future.getUTCDay()); //1
console.log(future.getUTCHours()); //9
console.log('>>>', future.getUTCMinutes()); //53
console.log(future.getUTCSeconds()); //37
console.log(future.getUTCMilliseconds()); //12

console.log(new Date(2142237217012));
console.log(19 * 15 * 23 * 37 * 24 * 60 * 60 * 1000);
console.log(2142237217012 / (24 * 60 * 60 * 15 * 23 * 37 * 1000));
console.log(Date.now()); //1672654613535
console.log(new Date(1672654613535));
console.log(new Date());
//Mon Jan 02 2023 15:46:53 GMT+0530
console.log(Date.now()); //1672654763560
//-->both results currrent time
console.log(future.getFullYear()); //2037
future.setFullYear(2040);
console.log(future); //Mon Nov 19 2040 15:23:37 GMT+0530


//    OPERATIONS  with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //Thu Nov 19 2037 15:23:00 GMT+0530
console.log(+future); //2142237180000
console.log(future.toISOString()); //2037-11-19T09:53:00.000Z
console.log(+future); //2142237180000
//+ operator converts string into number

// create a function that tales 2 dates that return no of days between these two days

const calcDays = (date1, date2) => {
  return Math.round(Math.abs(date2 - date1) / (24 * 60 * 60 * 1000));
};
const daysPased = calcDays(new Date(2023, 0, 2), new Date(2022, 11, 31));
console.log(daysPased);

const noOfdays = calcDays(
  new Date(2023, 0, 2, 18, 30),
  new Date(2022, 11, 30, 15, 45)
);
console.log(noOfdays);

//INTERNATIONALISING DATES

//experimenting API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', //2-digit
  weekDays: 'long',
  year: 'numeric', //'2-digit',
};
const locale = navigator.language;
console.log(locale); //Locale (Runtime - JavaScript) A Locale object represents a specific geographical, political, or cultural region.

// // labelDate.textContent = new Intl.DateTimeFormat('en-GB').format(now);
// let userDate = (labelDate.textContent = new Intl.DateTimeFormat('pt-PT').format(
//   now
// ));
// to add TIME use options after contry date format in format () function
// let userDate = (labelDate.textContent = new Intl.DateTimeFormat(
//   'en-US',
//   options
// ).format(now));
// console.log(userDate);
let userDate = (labelDate.textContent = new Intl.DateTimeFormat(
  locale,
  options
).format(now));
console.log(userDate);

//

// INTERNATIONALISING NUMBERS
const num = 10242048.1111;
const options1 = {
  style: 'currency', //'percent', //'unit',
  // unit: 'mile-per-hour',
  currency: 'usd',
  // useGrouping: false,
};
// const celciusopt = {
//   style: 'unit',
//   unit: 'celcius',
// };
console.log(num);
console.log('US', new Intl.NumberFormat('en-US', options1).format(num));
console.log('Germany', new Intl.NumberFormat('de-DE', options1).format(num));
console.log('india', new Intl.NumberFormat('hi-IN', options1).format(num));
console.log('Syria', new Intl.NumberFormat('ar-SY', options1).format(num));
console.log('Portugal', new Intl.NumberFormat('pt-PT', options1).format(num));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options1).format(num)
);
console.log(navigator.language); //The Navigator.language read-only property returns a string representing the preferred language of the user, usually the language of the browser UI.
*/

//TIMERS: S E T T I M E O U T   and S E T I N T E R V E L
// SetTimeOut(() => console.log('Here is your Pizza'), 1000);
//Uncaught ReferenceError: SetTimeOut is not defined
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");

setTimeout(() => {
  console.log("Here your pizza");
}, 2000);

setTimeout(() => {
  console.log("this string will print aftr 3 seconds");
}, 3000);
console.log("Waiting.........");

//passing arguments into settime out function
setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your Pizza with ${ing1} and ${ing2}`);
  },
  3000,
  "olives",
  "spinach"
);
// funciton arguments are called from within the function
// console.log(displayMovements(account1.movements));
setTimeout(
  (a, b) => {
    const sum = a + b;
    console.log(sum);
  },
  4000,
  10,
  1
);
setTimeout(
  (a, b) => {
    let count = a + b;
    console.log(count);
  },
  5000,
  10,
  1
);
console.log(account2.movements);
// console.log(calcDisplaySummery(account2.movements));
setTimeout(
  (mov) => {
    mov.forEach(function (amount) {
      if (amount > 0) console.log(`You deposited ${amount}`);
      if (amount < 0) console.log(`You withdrwan ${amount}`);
    });
  },
  3000,
  account2.movements
);

//   **************************
const value = setTimeout(
  (mov) => {
    // console.log(mov);
    mov
      .filter((mov) => mov > 0)
      .reduce((acc, cur) => {
        console.log(cur);
        console.log(acc + cur);
      }, 0);
  },
  6000,
  account2.movements
);
console.log(value); //8

console.log(account2.movements);
console.log(
  account2.movements.filter((mov) => mov > 0).reduce((acc, cur) => acc + cur, 0)
); //169000
const ingredients = ["olives", "spinach"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);
console.log(`waiting....`);

const count = new Date();
console.log(typeof +count);
const timeOver = setTimeout((time) => console.log(time++), 3000, +count);

//     S E T   I N T E R V A L
//if we want to run call back function over and over again use setInterval

setInterval(function () {
  const now = new Date();
  // console.log(now.toISOString());
}, 1000);
const stopInc = setInterval(
  function (time) {
    time++;
    // console.log(count);
    // console.log(typeof time);
  },
  1000,
  10
);
console.log(stopInc);

//    *******************
const stopTime = setInterval(
  (time) => {
    // let time = time + 1;
    time++;
    console.log(time);
  },
  1000,
  10
);
const inncrement = function (time) {
  return time++;
};
const interval = setInterval(() => {
  inncrement(10);
}, 1000);
//how to increament time in each interval
//create a function that displays clock in hour and nimut with sec incrementing
/*

const titleCase = function (str) {
  str = str.trim();
  const exceptions = [
    'a',
    'an',
    'the',
    'on',
    'but',
    'or',
    'in',
    'with',
    'for',
    'is',
    'and',
  ];
  // const title = str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word) =>
  //     exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
  //   )
  //   .join(" ");
  // console.log('sting now :::::: ', str[0]);
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const title = str
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  // return title;
  return capitalize(title);
};
console.log(titleCase('this is a nice title '));
console.log(titleCase('this is a LONG tITLe but NOt tOO lOng'));
console.log(titleCase('and here IS another title'));

// const array = [];
// array.push('ant', 'banana', 'water', 4, 'milk');
// console.log(array); //(5) ['ant', 'banana', 'water', 4, 'milk']
// array.length = 8;
// console.log(array.length); //8
// console.log(array); //(8) ['ant', 'banana', 'water', 4, 'milk', empty × 3]
// array[6] = 99;
// array.push((array[7] = 'apple'));
// array.push((array[10] = 'grapes'));
// console.log(array); //(12) ['ant', 'banana', 'water', 4, 'milk', empty × 2, 'apple', 'apple', empty, 'grapes', 'grapes']
// console.log(Object.values(array));
// //(9) ['ant', 'banana', 'water', 4, 'milk', 'apple', 'apple', 'grapes', 'grapes']

const flight = 'LH1234';
const Jonas = {
  name: 'Jonas ScmedthMann',
  passport: 1234567890,
  flight: 34,
};
const checkIn = function (
  flightNum = flightNum || Jonas.flight,
  passenger = passenger || Jonas.name
) {
  console.log(flightNum);
  flightNum = 'LH999';
  console.log(passenger);
  console.log('>>>>>>', passenger.passport);
  passenger.name = 'Mr.' + passenger.name;
  // console.log('****', Math.trunc(Math.random() * 10000000000));
  if (
    passenger.passport === console.log(Math.trunc(Math.random() * 10000000000))
  ) {
    alert('checked In');
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, Jonas);

//

// const newPassport = function (person) {
//   console.log(person);
//   person.passport = Math.trunc(Math.random() * 10000000000);
//   console.log('>>>>>>', person.passport);
// };
// newPassport(Jonas);
// console.log(Jonas);

// checkIn(flight, Jonas);
// here to passport numbers are same but output is coming like "wrong passport"
*/
