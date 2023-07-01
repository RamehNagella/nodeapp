
console.log(Number.parseInt('30', 10)); //30
console.log(Number.parseInt('30rem', 10)); //30
console.log(Number.parseInt('30rem', 2)); //NaN
console.log(Number.parseInt('30rem', 16)); //48
console.log(Number.parseInt('30rem', 8)); //24
console.log(Number.parseInt('30', 2)); //NaN
console.log(Number.parseInt('30', 16)); //48

// ONLY ACCEPTS ITS OWN RADIX NOT OTHER RADIX
// if its accepting base 2  radix then y not accepting hexa and octa decimal radix

const isEven = n => n % 2 === 0;
console.log(isEven(5 / 2)); //false
console.log(isEven(9 / 11)); //false
console.log(isEven((2 / 3).toFixed(2))); //false
console.log(2 / 3);//0.6666666666666666

console.log(isEven(9 / 11)); //false

console.log(typeof +'20px'); //number
console.log(typeof '20px'); //string
console.log(Number.isNaN(+'20rem')); //true
console.log(Number.isNaN(+'20px')); //true
console.log(Number.isNaN('20rem')); //false

// as +'20rem' is a number but it is giving +'20rem is a not a number(NaN)'
const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  //
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2022-12-30T14:43:26.374Z',
    '2022-12-31T18:49:59.371Z',
    '2023-01-01T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};
console.log(
    account2.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0)
  );//169000-->thus output is correct

  const value = setTimeout(
    mov => {
      // console.log(mov);
      mov
        .filter(mov => mov > 0)
        .reduce((acc, cur) => {
        //   console.log(cur);
          console.log(acc + cur);//NaN
          return acc+cur;
        }, 0);
    },
    6000,
    account2.movements
  );
  console.log(value);//8 
  why this output is coming 8 and in setTimeout function acc+cur value is NaN?
  