const array = [];
array.push("ant", "banana", "water", 4, "milk");
console.log(array); //(5) ['ant', 'banana', 'water', 4, 'milk']
array.length = 8;
console.log(array.length); //8
console.log(array); //(8) ['ant', 'banana', 'water', 4, 'milk', empty × 3]

array.push((array[7] = "apple"));
array.push((array[10] = "grapes"));
console.log(array); //(12) ['ant', 'banana', 'water', 4, 'milk', empty × 2, 'apple', 'apple', empty, 'grapes', 'grapes']
console.log(Object.values(array));
//(9) ['ant', 'banana', 'water', 4, 'milk', 'apple', 'apple', 'grapes', 'grapes']

here I am pushing(adding) the Elements within limits of lenght of the array only one time,But element is adding two times and increasing the total length of the array,Is that a error or is it   correct output?

//

const fruits = ['apple', 'banana', 'carriot'];
console.log(fruits[0]); //apple
console.log(fruits.at(0)); //apple

console.log(fruits.at[0]); //undefined

// if the length of the array doesnt known
console.log(fruits[fruits.length - 1]); //carriot
console.log(fruits[fruits.slice(-1)]); //undefined
console.log(fruits(fruits.slice(-1))[0]);//Uncaught TypeError: fruits is not a function
console.log(fruits(fruits.slice(-1))); //Uncaught TypeError: fruits is not a function



can we use closure inside IIFE?

const transactions = [200, 450, 400, -500, 100, -650, -130, 70, -200, 1300];

transactions.forEach(function (movement, i) {
    if (movement > 0) {
      let deposte = movement;
      return function () {
        console.log(`movement ${i + 1}: You withdrwan ${movement}`);
      };
    } else console.log(`movement ${i + 1}:You deposited ${Math.abs(movement)}`);
  });

  //


  const displayMovements = function (movements) {
    // containerMovements.innerHTML = '';
    movements.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposite' : 'withdraw';
      const html = `
       <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
     
      <div class="movements__value">${mov}</div>
    </div>
    `;
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };

  containerMovements.innerHTML = '';
//what is that meaning
/*
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposite" : "withdrawal";
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
   
    <div class="movements__value">${mov}EURO </div>
  </div>
    
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);
*/

//

const balence = movements.reduce(funciton(acc,cur,
  i,arr){
     return acc+cur;
},0);
console.log(balence);
// Uncaught SyntaxError: missing ) after argument list
// is the syntax for reduce method will only work for arrow funciton in javascript
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

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
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
displayMovements(account1.movements);
// displayMovements(account2.movements);
//creating a function to display total Balence
const diplayBalence = function (movements) {
  const balence = movements.reduce((acc, cur) => acc + cur, 0);
  // console.log(balence);
  labelBalance.textContent = `${balence}€`;
};
diplayBalence(account1.movements);
//creating a function to display total INs(deposits) and OUTs(withdrawls)
const calcDisplaySummery = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;
  const outcomes = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  //lets say bank is paying interest for your deposites(since interest payed only deposited money)
  //2 lets say bank pays interest if that interest is atleast one Euro
  const interestRate = 1.2 / 100;
  const interest = movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * 0.012)
    .filter((mov, i, arr) => {
      console.log(arr);
      return mov > 1;
    })
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
  // console.log(incomes, outcomes, interest);
};
calcDisplaySummery(account1.movements);

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