"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(3 + 2);

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account1.movements);

//creating a function to display total Balence
const diplayBalence = function (acc) {
  //inserting balnece varible into current object
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  // console.log(balence);
  labelBalance.textContent = `${acc.balance}€`;
};
// diplayBalence(account1.movements);
//creating a function to display total INs(deposits) and OUTs(withdrawls)
const calcDisplaySummery = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  //lets say bank is paying interest for your deposites(since interest payed only deposited money)
  //2 lets say bank pays interest if that interest is atleast one Euro

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * currentAccount.interestRate) / 100)
    .filter((mov, i, arr) => {
      console.log(arr);
      return mov > 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
  // console.log(incomes, outcomes, interest);
};
// calcDisplaySummery(account1.movements);

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

//Event handler
let currentAccount;
//implementing login
btnLogin.addEventListener("click", function (e) {
  //prevent form from sumbimt
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("Login");
    //DISPLAY UI and Message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // console.log(currentAccount);

    //updateUI
    updateUI(currentAccount);
    //clear inputFIelds
    inputLoginUsername.value = inputLoginPin.value = "";
  }
});

const updateUI = function (acc) {
  //DisplayMOVEMENTS
  displayMovements(acc.movements);
  //Display balance
  diplayBalence(acc);
  //Diplay summary￼￼￼
  calcDisplaySummery(acc);
};

//

//implimenting transfers
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  console.log(amount);
  const recieverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  console.log(recieverAcc);
  // inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAcc &&
    recieverAcc?.userName !== currentAccount.userName
  ) {
    //DOING THE TRANSFER
    currentAccount.movements.push(-amount);
    recieverAcc?.movements.push(amount);
    //updateUI
    updateUI(currentAccount);
    console.log("HII transfer valid");
    console.log(recieverAcc);
    inputTransferAmount.value = inputTransferTo.value = "";
  }
});

//closing account
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    console.log("you have deleted your account");
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
  const amount = Number(inputLoanAmount.value);
  console.log(amount);
  if (
    amount > 0 &&
    currentAccount.balance >= inputLoanAmount.value &&
    currentAccount.movements.some(
      (mov) => mov >= amount * (currentAccount.interestRate / 100)
    )
  ) {
    console.log("you can take a loan");
    currentAccount.movements.push(amount);
    //updateUI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

//calling sort function
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted; //flipping this variable
});

/////////////////////////////////////////////////
/*//ARRAY METHODS
const arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE  method:return the new array,doesnot mute the original array
console.log(arr.slice(0)); //(5) ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(2)); //(3) ['c', 'd', 'e']
console.log(arr); //(5) ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(-1)); //['e']
console.log(arr.slice(5)); //[]
console.log(arr.slice(4)); //['e']
console.log(arr.slice(-2)); //(2) ['d', 'e']
console.log(arr.slice(-5)); //(5) ['a', 'b', 'c', 'd', 'e']
console.log(arr.slice(-10)); //(5) ['a', 'b', 'c', 'd', 'e']

console.log(arr.slice(2, 4)); //['c', 'd']
console.log(arr.slice(0, 3)); //['a', 'b', 'c']
console.log(arr.slice(3, -1)); //['d']

console.log(arr.slice(0)); //(5) ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); //(5) ['a', 'b', 'c', 'd', 'e']

//SPLICE Method -->same as slice method,but it return the new array and mutates the original array
// console.log(arr.splice(2)); //(3) ['c', 'd', 'e']
// console.log(arr);//(2) ['a', 'b']
// console.log(arr.splice(3));//(2) ['d', 'e']
// console.log(arr.slice(-3));//(3) ['c', 'd', 'e']
// console.log(arr.splice(1, 3)); //(3) ['b', 'c', 'd']
//here elements from position 1 to 3 will be deleted
// console.log(arr); //(2) ['a', 'e']
// arr.splice(1, 3);
// console.log(arr); //(2) ['a', 'e']
//to delet nth positon element in the array we can use splice method
// console.log(arr.splice(1, -1)); //[] no element will b deleted with this syntax
// console.log(arr);//(5) ['a', 'b', 'c', 'd', 'e']

//

//REVERSE method-->this method mutates the original array and return new array

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //(5) ['f', 'g', 'h', 'i', 'j']
console.log(arr2); //(5) ['f', 'g', 'h', 'i', 'j']
// console.log(arr2.reverse());//(5) ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse(3));//(5) ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse(4))// ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse(1));//(5) ['j', 'i', 'h', 'g', 'f']
// console.log(arr2[1]); //g
// console.log(arr2[-1]); //undefined
// console.log(arr2.reverse(2, 4)); //(5) ['j', 'i', 'h', 'g', 'f']
//

//by using reverse array method we cant reverses the specific position element

//CONCAT Method-->this method doesnt mutate the original array
const letters = arr.concat(arr2);
console.log(letters);
//(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]);
//(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([arr, arr2]);
//(2) [Array(5), Array(5)]
console.log(...arr); //a b c d e
console.log(...arr, ...arr2); //a b c d e f g h i j
console.log(arr2);
(5)[('f', 'g', 'h', 'i', 'j')];
console.log(...arr.concat(arr2)); //a b c d e f g h i j
console.log(arr.concat(...arr2)); //(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

//JOIN Method
console.log(letters); //(10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

console.log(letters.join()); //a,b,c,d,e,f,g,h,i,j
console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j
console.log(letters.join('')); //abcdefghij
console.log(letters.join(111)); //a111b111c111d111e111f111g111h111i111j
console.log(letters.join(' @'));
//a @b @c @d @e @f @g @h @i @j
console.log(letters.join(' >>>', '#')); //a >>>b >>>c >>>d >>>e >>>f >>>g >>>h >>>i >>>j
console.log(arr);
console.log(arr[0]);
console.log(arr['0']);
console.log(arr['0']);
console.log(arr['0'] == arr['0']);
console.log(arr['0'] !== arr['0']);

//

const numbers = [];
console.log(numbers.length); //0
// numbers.push(arr);
// console.log(numbers);//(5) ['a', 'b', 'c', 'd', 'e']

// we can increase the length of the Array
//Type 1
numbers.push(1, 2, 3, 4, 5);
console.log(numbers); //(5) [1, 2, 3, 4, 5]
//type 2
numbers.length = 10;
console.log(numbers.length); //10
console.log(numbers); //(10) [1, 2, 3, 4, 5, empty × 5]
numbers[7] = 7;
numbers[9] = 9;
console.log(numbers); //(10) [1, 2, 3, 4, 5, empty × 2, 7, empty, 9]

numbers[15] = 15;
console.log(numbers); //(16) [1, 2, 3, 4, 5, empty × 2, 7, empty, 9, empty × 5, 15]
console.log(numbers.length); //16
console.log(Object.keys(numbers)); //(8) ['0', '1', '2', '3', '4', '7', '9', '15']-->only existing Elements
console.log(Object.entries(numbers));
//[(2) ['0', 1],['1',2],['2',3],['3',4],
//['4', 5], ['7', 7],['9', 9],['15', 15]]
console.log(Object.values(numbers)); //(8) [1, 2, 3, 4, 5, 7, 9, 15]
console.log(numbers.length); //16

// The above three keys will gives the existed elements to the console whatever the length of the arry with index

numbers.push((numbers[10] = 'apple'));
numbers.push((numbers[11] = 'banana'));
console.log(numbers); //(18) [1, 2, 3, 4, 5, empty × 2, 7, empty, 9, 'apple', 'banana', empty × 3, 15, 'apple', 'banana']
console.log(Object.values(numbers)); //(12) [1, 2, 3, 4, 5, 7, 9, 'apple', 'banana', 15, 'apple', 'banana']
console.log(numbers.length); //18

const array = [];
array.push('ant', 'banana', 'water', 4, 'milk');
console.log(array); //(5) ['ant', 'banana', 'water', 4, 'milk']
array.length = 8;
console.log(array.length); //8
console.log(array); //(8) ['ant', 'banana', 'water', 4, 'milk', empty × 3]

array.push((array[7] = 'apple'));
array.push((array[10] = 'grapes'));
console.log(array); //(12) ['ant', 'banana', 'water', 4, 'milk', empty × 2, 'apple', 'apple', empty, 'grapes', 'grapes']
console.log(Object.values(array));
//(9) ['ant', 'banana', 'water', 4, 'milk', 'apple', 'apple', 'grapes', 'grapes']
array[6] = 'mango';
array[1] = 1;
array[0] = 0;
console.log(array); //(12) [0, 1, 'water', 4, 'milk', empty, 'mango', 'apple', 'apple', empty, 'grapes', 'grapes']
// in the arrays we can overwrite the array elements

//We can DECREASE the length of the array
array.length = 5;
console.log(array); //(5) [0, 1, 'water', 4, 'milk']
console.log(array[9]); //undefined
console.log(array[7]); //undefined

//

//    ******THE NEW    "AT"   METHOD******
const fruits = ['apple', 'banana', 'carriot'];
console.log(fruits[0]); //apple
console.log(fruits.at(0)); //apple

console.log(fruits.at[0]); //undefined

// if the length of the array doesnt known
console.log(fruits[fruits.length - 1]); //carriot
// console.log(fruits(fruits.slice(-1))); //Uncaught TypeError: fruits is not a function
// console.log(fruits[fruits.slice(-1)]); //undefined
// console.log(fruits(fruits.slice(-1)[0]));//Uncaught TypeError: fruits is not a function

// consol.log(fruits.slice(-1));//Uncaught ReferenceError: consol is not defined

//with new AT method
console.log(fruits[-11]); //undefined
console.log(fruits.at(-1)); //carriot
console.log(fruits.at(1)); //banana
console.log(fruits.at(7)); //undefined
console.log(fruits.at(-4)); //undefined
fruits.length = 10;
console.log(fruits.length); //10
console.log(fruits.at(8)); //undefined
console.log(fruits.at(2)); //carriot

//NEW AT METHOD ALSO WORKS FOR STRINGS
console.log('jonas'.at(0)); //j
console.log('jonas'.at(1)); //o
console.log('jonas'.at(4 - 2)); //n
console.log('jonas'.at(1 - 3)); //a
console.log('jonas'.at(-1)); //s

//

//   ***L O O P I N G   A R R A Y S ***

//   ********FOR EACH (forEach loop);

const transactions = [200, 450, 400, -500, 100, -650, -130, 70, -200, 1300];
// for[const item of transactions]{
//   console.log(item);            //-->Uncaught SyntaxError: Unexpected token '[
// }
for (const movement of transactions) {
  if (movement > 0) console.log(`you deposited ${movement}`);
  else console.log(`you withdwan ${movement}`);
}

console.log('*****with Object.values*****');
for (const item of Object.values(transactions)) {
  // console.log(typeof item);//number
  if (item > 0) console.log(`you deposited ${item}`);
  else console.log(`you withdwan ${item}`);
}

console.log('~~~~~~~~with Object.entries()~~~~~~');

for (const [i, movement] of Object.entries(transactions)) {
  // console.log(typeof i, typeof movement); //string number
  if (movement > 0)
    console.log(`movement ${Number(i) + 1}:you deposited ${movement}`);
  else console.log(`movement ${Number(i) + 1}: you withdrwan ${movement}`);
}
console.log('++++++with forEach+++++');

// transactions.forEach('movement');
// console.log('movement');//Uncaught TypeError: movement is not a function

// forEach is a heigher order function which requires a call back function.
// forEach is used to loop over the array and in each iteration it will excute the callback function.
// this forEach method calls the callback function in each iteration it will pass the current element of the array as argument for callback function
transactions.forEach(function (movement) {
  if (movement > 0) console.log(`you deposited ${movement}`);
  else console.log(`you withdrawn ${movement}`);
  // console.log(
  //   `you ${movement > 0?"deposited" ${movement}:"withdrawn ${movement}}`
  // );
});

// transactions.function(200); //Uncaught TypeError: transactions.function is not a function

transactions.forEach(function (movement, i) {
  if (movement > 0) console.log(`movement ${i + 1}: You withdrwan ${movement}`);
  else console.log(`movement ${i + 1}:You deposited ${Math.abs(movement)}`);
});
console.log(fruits);
fruits.forEach(function (fruit, i) {
  console.log(`${i + 1}:you can eat this ${fruit}`);
});
console.log(array);
array.forEach(function (fruit, i) {
  if (typeof fruit == 'string') {
    console.log(`${i + 1}:you can eat this ${fruit}`);
  } else console.log(`${fruit} is a number`);
});

// transactions.forEach(function (movement, i) {
//   if (movement > 0) {
//     let deposte = movement;
//     return function () {
//       console.log(`movement ${i + 1}: You withdrwan ${movement}`);
//     };
//   } else console.log(`movement ${i + 1}:You deposited ${Math.abs(movement)}`);
//   // transaction.function();
// });
// // transactioin.forEach();
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);
currencies.forEach(function (currency, i) {
  console.log(`${i}: ${currency}`);
});

// fruits =new Map(['apple', 'banana', 'carriot', empty × 7]);//Uncaught SyntaxError: Invalid or unexpected token

// ******  forEach with MAPs
const fruity = new Map([
  [1, 'apple'],
  [2, 'banana'],
  [3, 'carriot'],
]);
console.log(fruity);
fruity.forEach(function (fruit, key, fruity) {
  // console.log(fruit.length);
  {
    if (fruit.length < 6) {
      console.log(`${key}: ${fruit} is a 5 lettered fruit`);
    } else if (fruit.length > 5) {
      console.log(` ${fruit}`);
    }
  }
});

//@@@@@@@@   S E T s
const currensiesUnique = new Set([
  'usd',
  1,
  'apple',
  2,
  'banana',
  3,
  'carriot',
  'euro',
  'dinar',
  'gbp',
  'euro',
  'usd',
  'gbp',
  [1, 'apple'],
  [2, 'banana'],
  [3, 'carriot'],
  'dinar',
]);
currensiesUnique.forEach(function (value, key) {
  console.log(`${key}:${value}`);
});
currensiesUnique.forEach(function (value) {
  console.log(`:${value}`);
});

// console.log(new Map(array));
// mapArray = new Map(array);
// console.log(mapArray);


//CODING CHALLENGE #1

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJulia1 = [9, 16, 6, 8, 3];
const dogsKeta1 = [10, 5, 6, 1, 4];
// console.log(dogsJulia.shift().splice(3));//Uncaught TypeError: dogsJulia.shift(...).splice is not a function
// dogsJulia.splice(3);
// dogsJulia.shift();
// console.log(dogsJulia);

// const checkDogs = function (dogsAges) {
//   dogsAges.forEach(function (age, i) {
//     const type = age >= 3 ? 'adult' : 'puppy';
//     if (age >= 3)
//       console.log(`Dog number ${i + 1} is an ${type},and its ${age}years old `);
//     else console.log(`Dog number ${i + 1} is still ${type} and its age ${age}`);
//     // const type = age >= 3 ? 'adult' : 'puppy';
//     // console.log(`Dog number ${i + 1} is an ${type},and its ${age}years old `);
//   });
// };
// checkDogs(dogsJulia);
// checkDogs(dogsKate);
// console.log('******data2*****');
// checkDogs(dogsJulia1);
// checkDogs(dogsKeta1);
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(-2);
  dogsJuliaCorrected.splice(0, 1);
  console.log(dogsJuliaCorrected);
  //adding two arrays with concat() function just two raun two arrays at a time
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function (age, i) {
    const type = age >= 3 ? 'adult' : 'puppy';
    if (age >= 3)
      console.log(`Dog number ${i + 1} is an ${type},and its ${age}years old `);
    else console.log(`Dog number ${i + 1} is still ${type} and its age ${age}`);
  });
};
checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia1, dogsKeta1);
//   D A T A   T R A N S F P R M A T I O N S

//

//  *****    M A P S:
// IT is used to loop over the array ,same as fo(8) [200, 450, -400, 3000, -650, -130, 70, 1300]rEach method but its creaates the new array
// It creates the new array but doesnot mutate the original array
// and in each iteration it applies a callback function that we specified in the code through the current elelment as its argument
console.log(movements); //(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
const eurToUSD = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});
// console.log(movements);(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementsUSD); //(8) [220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002]
//with arrow function
const movementsUSD1 = movements.map((mov) => mov * eurToUSD);
console.log(movementsUSD1);

//with for of loop
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUSD);
}
console.log(movementsUSDfor);
//with forEach
movements.forEach(function (mov) {
  console.log(mov * eurToUSD);
});

const priceInmUSD = [43, 30, 27, 19, 14, 10];

const usdToRup = 82.76;

const indianRupeeInMillion = priceInmUSD.map(function (mov) {
  return mov * usdToRup;
});
console.log(indianRupeeInMillion); //(6) [3558.6800000000003, 2482.8, 2234.52, 1572.44, 1158.64, 827.6]
// computing USERNAEMS
const user = "Steven THOMAS WIlLIams";
const userName1 = [];
const name = user.toLowerCase().split(" ");
for (const item of name) {
  userName1.push(item[0]);
}
console.log(userName1.join("")); //stw

const userName = user
  .toLowerCase()
  .split(" ")
  .map(function (name) {
    return name[0];
  });
console.log(userName.join("")); //stw

//using a function to store this entire code

const createUserName = function (name) {
  const userName = name
    .toLowerCase()
    .split(" ")
    .map((nam) => nam[0])
    .join("");
  return userName;
};

console.log(createUserName(account1.owner)); //js
console.log(createUserName(account2.owner)); //jd
console.log(createUserName(account3.owner)); //stw
console.log(createUserName(account4.owner)); //ss


//

// *****  F I L T E R   M E T H O D(it returns the new array(doesnot mutate the original array)
// it is used to filter the array elements which satisfyies the certain conditions)

console.log(movements);
const deposites = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposites); //(5) [200, 450, 3000, 70, 1300]
//with arrow function
const deposites1 = movements.filter((mov) => mov > 0);
console.log(deposites);
// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(Math.abs(withdrawals));//Nam
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals); //(3) [-400, -650, -130]
const onCondition = movements.filter((mov) => 2 * mov > 500);
console.log(onCondition); //(3)[(450, 3000, 1300)];

//using for of loop
const deposited = [];
const withdrawn = [];
for (const mov of movements) {
  if (mov > 0) deposited.push(mov);
  else withdrawn.push(mov); //(5) [200, 450, 3000, 70, 1300]
} //(3) [-400, -650, -130]
console.log(deposited, withdrawn);

//

//  *** T H E   R E D U C E   M E T H O D
// this method dooesnot mutate the original array but it return the alue(donot return the array ) after calculation with accumulator ,it calls the callback function and in each iteration takes the arguments do the operation with accumulator
// here we have to set the accumulator value at desired value
// console.log(movements);
//accumulator is  like a SNOWBALL
// const balence = movements.reduce(funciton(acc,cur,
//   i,arr){
//      return acc+cur;
// },0);
// console.log(balence);
// Uncaught SyntaxError: missing ) after argument list
const balence = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balence); //3840

//with for of loop
let balenceFor = 0;
for (const mov of movements) {
  balenceFor += mov;
  // console.log(balenceFor);
}
console.log(balenceFor);

console.log(account2.movements);

const balence2 = account2.movements.reduce((acc, mov) => acc + mov);
console.log(balence2);

//
//creating function
const balence3 = function (balence) {
  const total = balence.reduce((acc, cur) => acc + cur);
  return total;
};
console.log(balence3(account3.movements));
console.log(account3.movements);

// getting the maximum value of the array
console.log(movements);
const max = movements.reduce((acc, mov, i, arr) => {
  // console.log(arr, i);
  // console.log(typeof acc, mov);
  // console.log(acc + mov);
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

//CODING CHALLENGE #2
const calcAverageHumanaAge = function (dogAges) {
  const adults = [];
  const child = [];
  dogAges.forEach(function (item) {
    if (item > 2) adults.push(item);
    else child.push(item);
  });
  console.log(adults, child);
  const ageOfAdults = adults.map((age) => 16 + age * 4);
  const ageOfChild = child.map((age) => 2 * age);
  console.log(ageOfAdults, ageOfChild);
  const sumOfAges = ageOfAdults.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const average = sumOfAges / ageOfAdults.length;
  return average;
};
console.log(calcAverageHumanaAge([5, 2, 4, 1, 15, 8, 3]));
//using map re [i, item] of Object.entries(totalTranscs)) {
//   console.log(i, item);
// }duce and filteer only
const calcAverageOfHumanAge = function (dogAges) {
  const humanAge = dogAges.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAge.filter((age) => age > 18);
  console.log(adults);
  const average =
    adults.reduce((acc, cur, i, arr) => acc + cur, 0) / adults.length;

  return average;
};
const age1 = calcAverageOfHumanAge([5, 2, 4, 1, 15, 8, 3]);
const age2 = calcAverageOfHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(age1, age2);

//THE MAGIC OF CHAINING METHODS

// ******  P I P E L I N E  ************
//adding the movements of account1
const totalMovements = account1.movements.reduce((acc, mov) => acc + mov, 0);
const totalDeposites = account1.movements
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
const totalWithdrawals = account1.movements
  .filter((mov) => mov < 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalMovements, totalDeposites, `${Math.abs(totalWithdrawals)}`);

// creating a function to calculate the sum movements,deposites,and withdrawls
const totalMovs = [
  account1.movements,
  account2.movements,
  account3.movements,
  account4.movements,
];
const totalTransactions = function (movements) {
  console.log(movements);
  const totalTranscs = [];
  const moves = movements.forEach(function (transactions) {
    const totalMovements = transactions.reduce((acc, cur) => acc + cur, 0);
    const totalDeposites = transactions
      .filter((mov) => mov > 0)
      .reduce((acc, cur) => acc + cur, 0);
    const totalWithdrawals = transactions
      .filter((mov) => mov < 0)
      .reduce((acc, cur) => acc + cur, 0);
    totalTranscs.push(totalMovements);
    totalTranscs.push(totalDeposites);
    totalTranscs.push(totalWithdrawals);
  });
  // for (const [i, item] of Object.entries(totalTranscs)) {
  //   console.log(i, item);
  // }
  return totalTranscs;
};
const totals = totalTransactions(totalMovs);
console.log(totals);

//chinging euro to USD

const eroToUSD = 1.1;
const totalDepositesInUSD = movements
  .map((mov) => mov * eroToUSD)
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositesInUSD);
const totalWithdrawalsInUSD = movements
  .filter((mov) => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eroToUSD;
  })
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalWithdrawalsInUSD);

//coding challenge3
// rewrite above challenge using arrow and chining methods
const calcAverageOfHumanAge1 = function (dogAges) {
  const humanAge = dogAges
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, cur, i, arr) => {
      return acc + cur / arr.length;
    }, 0);

  // const adults = humanAge.filter((age) => age > 18);
  // console.log(adults);
  // const average =
  //   adults.reduce((acc, cur, i, arr) => acc + cur, 0) / adults.length;

  // return humanAge;
};
const age12 = calcAverageOfHumanAge1([5, 2, 4, 1, 15, 8, 3]);
const age22 = calcAverageOfHumanAge1([16, 6, 10, 5, 6, 1, 4]);

console.log(age1, age2);

//

//
//    **********THE F I N D  METHOD(used to retrive the one elememnt of the array based on certain condition,retruns only THE FIRST ONE elmentwhich satisfyies the conditon  not array)
console.log(movements);
console.log(movements.find((mov) => mov > 0)); //200
console.log(movements.find((mov) => mov < 0)); //-400
console.log(movements.find((mov) => (mov = 0))); //undefined
console.log(movements.find((mov) => mov > 3000)); //undefined
console.log(movements.find((mov) => mov > 1500)); //3000
console.log(movements.find((mov) => mov > 5000)); //undefined
console.log(movements.find((mov) => mov > 1300)); //3000
console.log(movements.find((mov) => mov >= 1300)); //3000

const firstWithDrawal = movements.find((mov) => mov < 0);
console.log(firstWithDrawal); //-400

console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
console.log(accounts[1]); //both are same
//implimenting above function using for of loop
// for (const acc of accounts) {
//   const account = acc.find((acc) => acc.owner === "Sarah Smith");
//   console.log(account);
// }
// SOME ANd EVERY METHOD

console.log(movements);
console.log(movements.includes(-400)); //tuer
console.log(movements.includes(400)); //false

const anyDeposite = movements.some((mov) => mov > 0);
console.log(anyDeposite); //true
const anyDeposite1 = movements.some((mov) => mov < 0);
console.log(anyDeposite1); //true;

console.log(movements.some((mov) => mov > 1500)); //true
console.log(movements.some((mov) => mov > 3000)); //false
console.log(movements.some((mov) => mov < 1000)); //true
console.log(movements.some((mov) => mov < -100)); //true
console.log(movements.some((mov) => mov < -300)); //true
console.log(movements.some((mov) => mov < -700)); //false

console.log(movements.find((mov) => mov < -100)); //-400
console.log(movements.find((mov) => mov < -500)); //-650
console.log(movements.find((mov) => mov < -700)); //undefined

console.log(movements.some((mov) => mov === -130)); //true
console.log(movements.includes(-130)); //true
//some method is used to know wether user has atleast one wualiy specified by some company or bank (to know atleast 10% interest on his deposite)

// E V E R Y METHOD
// (it returns true or false if all of the elemnts should present if sepcified condition is exist)

console.log(movements.every((mov) => mov > 0)); //false
console.log(movements.every((mov) => mov < 0)); //false
console.log(movements.every((mov) => (mov = 0))); //false
console.log(account4.movements.every((mov) => mov > 0));
//true

//seperate call back function
const deposite = (mov) => mov > 0;
console.log(movements.some(deposite)); //true
console.log(movements.every(deposite)); //false
console.log(movements.filter(deposite)); //(5) [200, 450, 3000, 70, 1300]

//FLAT and FLATMap Method
const arr = [[1, 2], 3, [4, 5, 6], 7, 8];
console.log(arr); //(5) [Array(2), 3, Array(3), 7, 8]
console.log(arr.flat()); //(8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.flat(1)); //(8) [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[1, 2], 3, 4, [5, [6, 7, 8]]];
console.log(arrDeep.flat()); //(6) [1, 2, 3, 4, 5, Array(3)]
console.log(arrDeep.flat(1)); //(6) [1, 2, 3, 4, 5, Array(3)]
console.log(arrDeep.flat(2)); //(8) [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arrDeep.flat(3));
(8)[(1, 2, 3, 4, 5, 6, 7, 8)];
const innerArr = [1, 2, [3, 4, [5, 6, [8, 9], 10]], 11];
console.log(innerArr.flat(3)); //(10) [1, 2, 3, 4, 5, 6, 8, 9, 10, 11]
console.log(innerArr.flat(4));
console.log(innerArr.flat(2)); //(9) [1, 2, 3, 4, 5, 6, Array(2), 10, 11]
console.log(innerArr.flat(1)); //(6) [1, 2, 3, 4, Array(4), 11]

//practical example
//lets say bank needs to calculate the sum of the money present in the all the bank accounts
console.log(accounts);
const accountMovements = accounts.map((acc) => acc.movements);
const allMovements = accountMovements.flat(2);
const ovarallBalence = allMovements.reduce((acc, cur) => acc + cur, 0);

console.log(accountMovements);
console.log(allMovements);
console.log(ovarallBalence); //17840

//using optional chaining
const totalBalence = accounts
  .map((acc) => acc.movements)
  .flat(1)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalBalence); //17840

//FLATMAP method;

console.log(arrDeep.flat(2));
console.log(arrDeep.flatMap((arr) => arr.mov)); //(4) [undefined, undefined, undefined, undefined]
const overallBalence2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalence2); //17840
//flatMap method goes deeper only for one level(onenested arr),if more onelevel nested array present then we have to use map method only;
console.log(innerArr);

//

//   ******  S O R T I N G   A R R A Y S **********
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners);
// (4) ['Jonas', 'Zach', 'Adam', 'Martha']
// console.log(owners.sort());
// (4)[("Adam", "Jonas", "Martha", "Zach")];
console.log(owners);
// (4) ['Adam', 'Jonas', 'Martha', 'Zach']
//This method mutates the origianl array
console.log(movements);
//(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort());
//(8) [-130, -400, -650, 1300, 200, 3000, 450, 70]
//sort method does soring based on strings

//return<0 A,B(keep order);
//return >0 B,A(switch order);

//ASSENDING Order
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);
// //(8) [-650, -400, -130, 70, 200, 450, 1300, 3000]

//DESCENDING ORDER
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);
//(8) [3000, 1300, 450, 200, 70, -130, -400, -650]

//this is using for strings

console.log(owners);
owners.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(owners);
//(4) ['Adam', 'Jonas', 'Martha', 'Zach']
owners.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(owners);
//(4) ['Zach', 'Martha', 'Jonas', 'Adam']

//MORE WAYS OF CREATING and FILLING ARRAYS
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
//(7) [1, 2, 3, 4, 5, 6, 7]

console.log(new Array(1, 2)); //(2) [1, 2]
console.log(new Array(2)); //(2) [empty × 2]

// console.log(Array); //ƒ Array() { [native code] }

//multiple ways of constructing array
const p = new Array(7);
console.log(p); //(7) [empty × 7]

console.log(p.map(() => 1)); //(7) [empty × 7]
//nothing happened ,we can fill the array with new array methods
p.fill(1);
console.log(p); //(7) [1, 1, 1, 1, 1, 1, 1]
console.log(p.fill(2, 3)); //(7) [1, 1, 1, 2, 2, 2, 2]
console.log(p.fill(3, 5)); //(7) [1, 1, 1, 2, 2, 3, 3]
//first parameter is the value of element to be inserted
//second parameter id the index position of the element from which value to be added
//third parameter is index position of element upto which elelment is added
console.log(p.fill(9, 3, 6));
// (7) [1, 1, 1, 9, 9, 9, 3]
//fill method mutates the original array,thismethod can also applicable for filled arrays not only for empty arrays

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
arr2.fill(3, 2, 6);
console.log(arr2);
//(10) [1, 2, 3, 3, 3, 3, 7, 8, 9, 0]
// console.log(arr2.sort());
//(10) [0, 1, 2, 3, 3, 3, 3, 7, 8, 9]

//constructing arr2 programatically

// for that we can use .form() method
//Array.form();
Array.from({ length: 7 }, () => 1);
console.log(Array.from({ length: 7 }, () => 1));
//(7) [1, 1, 1, 1, 1, 1, 1]
// console.log(arr2.form({ lenght: 8 }, () => 2));
//Uncaught TypeError: arr2.form is not a function
console.log(Array.from({ length: 7 }, () => (1, 2)));
// (7) [2, 2, 2, 2, 2, 2, 2]
console.log(Array.from({ length: 7 }, () => (1, 2, 3)));
// (7)[(3, 3, 3, 3, 3, 3, 3)];
console.log(Array.from({ length: 7 }, () => (1, 2, 3, 4)));
// (7)[(4, 4, 4, 4, 4, 4, 4)];

// console.log(Array.from({ length: 7 }, (1) => (1, 2,6)));
//Uncaught SyntaxError: Invalid destructuring assignment target

let y = Array.from({ length: 7 }, () => 1);
console.log(y); //(7) [1, 1, 1, 1, 1, 1, 1]
y = Array.from({ lenght: 5 }, () => 2);
console.log(y); //[]
//so we could not be used for filled arrays
// arr2 = Array.from({ length: 7 }, () => 3);
const z = Array.from({ length: 7 }, (cur, i) => 1);
console.log(z); //(7) [1, 1, 1, 1, 1, 1, 1]
const q = Array.from({ length: 5 }, (cur, i) => i + 1);
console.log(q); //(5) [1, 2, 3, 4, 5]

// const movementsUI1 = Array.from(document.querySelectorAll(".movements__value"));
// console.log(movementsUI1); //(2) [div.movements__value, div.movements__value]
labelBalance.addEventListener("click", function (e) {
  e.preventDefault();
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );
  console.log(movementsUI);
  //((8) [1300, 70, -130, -650, 3000, -400, 450, 200]
  //using map method
  // console.log(
  //   Array.from(
  //     document
  //       .querySelectorAll(".movements__value"))
  //       .map((el) => el.textContent.replace("€", ""))

  // ); //(8) ['1300', '70', '-130', '-650', '3000', '-400', '450', '200']
  const movementsUI2 = [...document.querySelectorAll("movements-value")];
  console.log(movementsUI2);
});

// labelBalance.addEventListener("click", function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll(".movement__value"),
//     (el) => Number(el.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);
//   const movementsUI2 = [...document.querySelectorAll("movement__value")];
//   console.log(movementsUI2);
// });

// //with map method
// console.log(movementsUI1.map((el) => el.textContent.replace("€", "")));

// const movementsUI = Array.from(
//   document.querySelectorAll("movements-value"),
//   (el) => Number(el.textContent.replace("€", ""))
// );
// console.log(movementsUI);

// const movementsUI2 = [...document.querySelectorAll("movements-value")];
// console.log(movementsUI2);

//  *****  A R R A Y   M E T H O D S  PRACTICE ******

//calculate all deposites in bank from all accounts
const bankDeposites = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur);
console.log(bankDeposites); //25180
const bankWithdrawls = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov < 0)
  .reduce((acc, cur) => acc + cur);
console.log(bankWithdrawls); //-7340
//total moneyPRESENT IN THE BANK
const bankAmount = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => acc + cur);
console.log(bankAmount); //17840

//2. How many deposites are there in the bank with atleast 1000 euro
const numDeposites1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposites1000); //6
// const account11 = accounts.map((acc) => acc.account1.movements);
// console.log(account1);
// Uncaught TypeError: Cannot read properties of undefined (reading 'movements')
const account11 = accounts.map((acc) => acc.account1);
// .filter((mov) => mov > 0).length;

console.log(account11); //(4) [undefined, undefined, undefined, undefined] because account1 is object as map doesnot return object you will get undefined

//other method( using advance case of reduce method)
const numDepositesAbove1000 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDepositesAbove1000); //6
//using prefixed ++
const above1000Deposites = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
// .reduce((acc, mov) => (acc > 1000 ? acc++ : acc), 0);
console.log(above1000Deposites); //6

//prefixed ++
let a = 10;
console.log(a++); //10
console.log(a); //11
let b = 10;
console.log(++b); //11
console.log(b); //11

//create a object which contains deposites and withdrwals
// console.log(`{Deposites:${bankDeposites},withdrawls:${bankWithdrawls}}`); //{Deposites:25180,withdrawls:-7340}

// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (acc, cur) => {
//       cur > 0 ? (acc.deposites += cur) : (acc.withdrawals += cur);
//       return acc;
//     },
//     { deposites: 0, withdrawals: 0 }
//   );
// console.log(sums); //{deposites: 25180, withdrawals: -7340}
// cur > 0 ? acc + cur : acc + cur; its not be useful
const sumOftrans = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? "deposites" : "withdrawals"] += cur;
      return sums;
    },
    { deposites: 0, withdrawals: 0 }
  );
console.log(sumOftrans); //{deposites: 25180, withdrawals: -7340}
*/
//
//  **********************

//create array
let deposites;
let withdrawals;
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (acc, cur) => {
      cur > 0 ? (acc.deposites += cur) : (acc.withdrawals += cur);
      return acc;
    },
    [(deposites = 0), (withdrawals = 0)]
  );
console.log(sums); //(2) [0, 0, deposites: NaN, withdrawals: NaN]

//4. create simple function to convert any string to TITLE CASE (Convert to Title Case )
const titleCase = function (str) {
  const exceptions = [
    "a",
    "an",
    "the",
    "on",
    "but",
    "or",
    "in",
    "with",
    "for",
    "is",
    "and",
  ];
  // const title = str
  //   .toLowerCase()
  //   .split(" ")
  //   .map((word) =>
  //     exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
  //   )
  //   .join(" ");
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const title = str
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
    .join(" ");

  // return title;
  return capitalize(title);
};
console.log(titleCase("this is a nice title"));
console.log(titleCase("this is a LONG tITLe but NOt tOO lOng"));
console.log(titleCase("and here IS another title"));
//Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')// in function calling we should not give spaces after end of the string(titleCase("this is a nice title *HERE*");)

//CODING CHALLENGE#4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).current > (recommended * 0.90) && current < (recommended *
//   1.10)
//.Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28.
dogs.forEach(
  //inserting variable into object (dog.recommendedFood)
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

//2.Find Sarah's dog and log to the console whether it's eating too much or toolittle
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahDog); //{weight: 13, curFood: 275, owners: Array(2), recommendedFood: 191}
console.log(
  `sarah dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? "much" : "little"
  }`
);
const BobDog = dogs.find((dog) => dog.owners.includes("Bob"));
console.log(BobDog);

const MichaelDog = dogs.find((dog) => dog.owners.includes("Michael"));
console.log(MichaelDog);
//create a funcion to return person dog and log to the console wether it is eating too much or too little
// const personDog = function (personName) {
//   // for (const item of Object.values(personName)) {
//   //   console.log(">>>>>>>", item);
//   console.log(
//     ">>>>>>>>>>",
//     personName.forEach((dog) => dog.weight ** 2)
//   );
//   const sarahDog = personName.find((dog) => dog.owners.includes("Sarah"));
//   console.log(sarahDog);
// };
// personDog(dogs);

//3.Create an array containing all owners of dogs who eat too much('ownersEatTooMuch') and an array with all owners of dogs who eat too little('ownersEatTooLittle').
// const ownerName = dogs.flatMap((owner) => owner.owners);
// console.log(ownerName);
// const names = [];
// for (const name of ownerName) {
//   const foodWeightage = dogs.map((dog) =>
//     dog.owners.includes(`${name}`) && dog.curFood > dog.recommendedFood
//       ? "tooMuch"
//       : "toolittle"      //wrong approch first find
//   );               //wich dog is tto much from that
//   );               //wich dog is tto much from that find name of owner

//   names.push(foodWeightage);
// }
// console.log(names);
const ownersEatTooMuch = dogs
  .filter((food) => food.curFood > food.recommendedFood)
  .flatMap((name) => name.owners);
console.log(ownersEatTooMuch); //(3) ['Matilda', 'Sarah', 'John']
const ownersEatTooLittle = dogs
  .filter((food) => food.curFood < food.recommendedFood)
  .flatMap((owner) => owner.owners);
console.log(ownersEatTooLittle); //(3) ['Alice', 'Bob', 'Michael']
//4.Log a string to the console for each array created in 3., like this: "Matilda andAlice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(
  `${ownersEatTooMuch.slice(1).join(" and ")} and ${ownersEatTooLittle.slice(
    2
  )} 's dogs eat too little`
);
console.log(
  `${ownersEatTooMuch[0]} and ${ownersEatTooLittle
    .slice(0, 2)
    .join(" and ")}'s dogs eat too much!!`
);

//5..Log to the console whether there is any dog eating an okay amount of food(just true or false) (just true or false)(current > (recommended * 0.90) && current < (recommended *1.10))
const okeyFood = dogs.some(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okeyFood); //true // for map =>(4) [false, false, false, true]

//6 Log to the console whether there is any dog eating exactly the amount of food that is recommended

const exactFood = dogs.some((dog) => dog.recommendedFood === dog.curFood);
console.log(exactFood); //false

//7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 5
const okeyFoodDogs = dogs.filter(
  (dog) =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(okeyFoodDogs);
//5.
const checkEatingOkayFood = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkayFood)); //true

//7.
console.log(dogs.filter(checkEatingOkayFood));

//8.Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
const ascendingOrder = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(ascendingOrder);

const descendingOrder = dogs
  .slice()
  .sort((a, b) => b.recommendedFood - a.recommendedFood);
console.log(descendingOrder);

const cond = (a, b) => a.curFood - b.curFood;
const assendCurFood = dogs.slice().sort(cond);
console.log(assendCurFood);

const descendCurFood = dogs.slice().sort((a, b) => b.curFood - a.curFood);
console.log(descendCurFood);
