/*
console.log(2 + 3);
console.log(5 + 2);

//const jonas = prompt("enter a number");
//console.log(jonas);
//'use strict';
let hasDriversLicence = false;
const passTest = true;

if(passTest)hasDriversLicence = true;
if(hasDriversLicence)console.log(" I can drive");

const interface = "Audio";
console.log(interface);

const name =234;
console.log(name);

//const if ='534';

*/
/*
// FUNCTIONS //

function logger() {

	console.log('My name is Jonas');		//--> empty output fot this function if we dont write console after function

}
//console.log(logger())//output is My name is Jonas  
					//undefined

logger(); //My name is Jonas
logger();
logger();
logger();
logger();
// a FUNCTION NOT ONLY RETURNS DATA BUT IT ALSO RECIEVES DATA AND RETURNS BACK DATA

// FRUIT PROCESSOR USING FUNCTION

function fruitprocessor(apples, oranges){

	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges `;

	return juice;
}
fruitprocessor(5,0);//  5 0
//console.log(juice);// reference error:juice not defined

function fruitprocessor(apples, oranges){

	console.log(apples, oranges);
	const juice =`Juice with ${apples} apples and ${oranges} oranges ready`;

	return juice;
}

const appleJuice = fruitprocessor(5,0);
console.log(appleJuice);

const orangeJuice = fruitprocessor(0,6);
console.log(orangeJuice);

//const mixedJuice = fruitprocessor( )// undefined undefined

const mixedJuice = fruitprocessor(4, 5);
console.log(mixedJuice);//Juice with 4 apples and 5 oranges ready
//console.log(juice) //Uncaught ReferenceError: juice is not defined
// function cannot return the value on console it just hold the value in consol.log()



//function decleration

function calcAge(birhtYear){
								//		---> function decleration
	return 2037 - birhtYear;
}
//console.log(birhtYear);//Uncaught ReferenceError: birhtYear is not defined
//console.log(1991);//1991
//console.log(calcAge);//ƒ calcAge(birhtYear){

					//		return 2037 - birhtYear;
					//	}

const age1 = calcAge(1991);
console.log(age1);		//46			--> function calling


// FUNCTION EXPRESSION

const calcAge2 = function(birthYear){
	
	return 2037-birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);

console.log(age1, age2);

// DIFFERENCE BETWEEN DECLERATION AND EXPRESSION

const age1 = calcAge(1991);
console.log(age1);	

function calcAge(birhtYear){
									//-->//46  --> f decleration
	return 2037 - birhtYear;		// no error even we wrote console before initialization
}						


const age2 = calcAge2(1991);
console.log(age2);

const calcAge2 = function(birthYear){
	
	return 2037-birthYear;
}			    // ---> script2.js:113 Uncaught ReferenceError: Cannot access 'calcAge2' before initialization

// ARROW function

const calcAge2= function(birhtYear){

	return 2037- birhtYear;
}
const age2 = calcAge2(1991);
console.log(age2);


//arrow function
const calcAge2 =birthYear => 2037-birthYear;
const age2 = calcAge2(1991);
console.log(age2);

//Example

const yearsUntilRetirement = birhtYear =>{

	const age = 2037 - birhtYear;
	const retirement = 65 - age;

	return retirement;
}


// using multiple parameters
'use strict';
const yearsUntilRetirement = (birhtYear, firstName)=>{

const age = 2037 - birhtYear;
const retirement = 65 - age;

return `${firstName} has ${retirement} more years to retire`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1995, 'Bob'));


//analysis of football game to reach final
const matchesLeftToGoFinal = (matchesLoss, noOfGoals, knouckOutLoss, countryName) =>{

	const matchesToBePlayed = 5 - matchesLoss;
	const matchesWon = 3;

	if(matchesWon <= matchesToBePlayed){
	
	console.log(`${countryName} is waiting to go play knockouts with ${matchesToBePlayed} wins in group stage`);
    

    const knouckOutsToBePlay = 6;
    const knouckOutsWin  = knouckOutsToBePlay - knouckOutLoss;
    console.log(knouckOutsWin);

	if(knouckOutsWin >= 4 ||((knouckOutsWin >= 2 || knouckOutsWin <= 3) && noOfGoals >= 9)){

		return `${countryName} has reached to final by winning ${knouckOutsWin} knouckOut matches with ${noOfGoals} goals`;
	}else{

		return`${countryName} back to home with ${knouckOutsWin} knouckout wins and total of ${noOfGoals} gols`;
	}
}else {
		return `${countryName} return to home with ${matchesToBePlayed} wins`;
	}

}
console.log(matchesLeftToGoFinal(2,16,2,'Argentina'));


// FUNCTION CALLING OTHER FUNCTION

function cutFriutPieces(fruit){
	return fruit * 4;
}

function friutProcessor(apples, oranges){

	 const applePieces = cutFriutPieces(apples);
	 const orangePices = cutFriutPieces(oranges);

	 return juice =`Juice with ${applePieces} applepieces and ${orangePices} orangepieces`;
}
console.log(friutProcessor (0,4));

const calcAge = function(birthYear){

	return 2037-birthYear;
}
const yearsUntillRetirement = function(birthYear, firstName){

	const age = calcAge(birthYear);
	const retirement = 65 - age;
	if(retirement > 0){

	 return `${firstName} is retired in ${retirement} years`;
	}else {

		return `${firstName} already retired`
	}
}
console.log(yearsUntillRetirement(1991,"Jonas"));
console.log(yearsUntillRetirement(1950, "Bob"));

 const calcAvg = (a,b,c)=>(a+b+c)/3;
 

let scoreDolphins = calcAvg(44,23,71);
let scoreKoalas = calcAvg(55,114,149);

console.log(scoreDolphins,scoreKoalas);

const checkWinner = function(scoreDolphins,scoreKoalas) {

	if(scoreDolphins >= 2*scoreKoalas){
		console.log(`Dolphins wins trophy (${scoreDolphins} vs ${scoreKoalas})`);
	}else if(scoreKoalas >= 2*scoreDolphins){
		console.log(`Koalas wins trophy (${scoreKoalas} vs ${scoreDolphins})`);
	}else{
	 console.log("match was drwan");
	}
}


checkWinner (scoreDolphins,scoreKoalas);
//scoreDolphins = calcAvg(95,64,93);
//scoreKoalas = calcAvg(23,34,27);
//console.log(scoreDolphins,scoreKoalas);


//Exercise

const reverseNumber = function(number){
	const reve 

	return reverseNumber;

} 

console.log(reverseNumber(32247));

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));



const describeCountry = function('country', 'population','capitalCity'){

}

 const calcAvg = (a,b,c)=>(a+b+c)/3;
 

let scoreDolphins = calcAvg(444,623,71);
let scoreKoalas = calcAvg(55,146,149);
  scoreDolphins = calcAvg(1545,6464,193);
 
   scoreKoalas = calcAvg(233,134,27);
 
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function(scoreDolphins,scoreKoalas) {

	if(scoreDolphins >= 2*scoreKoalas){
		console.log(`Dolphins wins trophy (${scoreDolphins} vs ${scoreKoalas})`);
	}else if(scoreKoalas >= 2*scoreDolphins){
		console.log(`Koalas wins trophy (${scoreKoalas} vs ${scoreDolphins})`);
	}else{
	 console.log("match was drwan");
	}
}

 

console.log(scoreDolphins,scoreKoalas);
checkWinner (scoreDolphins,scoreKoalas);

 //var scoreDolphins = calcAvg(95,64,93);
 //var scoreKoalas = calcAvg(23,34,27);
//console.log(scoreDolphins,scoreKoalas);
//var s

//differentiating let var const

// var a=10;
// let b= 15;

// console.log("aaaaa::bbbbbbbbbbb",a,b);
function abc (){
	let a = 10;
	var b = 11;
	var b = 30;
	var b= 40;

	var ramesh;
	let hussain;
	
	const arr = [1, 2,6,7];
	arr.push(3)
	console.log(arr)
	//console.log(ramesh);
	// let a = 10;
	// const d = {
	// 	"name" : "ramesh",   
	// 	"Age" : 20
	// };

	// console.log("C:::::: first",d);
	// if(a==10){
	// 	// const d = 40;
	// 	d["gender"]="male";
	// 	let a=20;
	// 	var b=20;
	// 	console.log("C:::::: inside",d);
	// }
	// // d = 20;
	//console.log("C:::::: outside",b,a,d);
	// console.log("aaaaa::bbbbbbbbbbb >>>>>>>>>>>>>",a,b);
}

// a=a+10;
// b = 101;
abc()
// console.log("aaaaa::bbbbbbbbbbb ????????",a,b);



const calcAge2 = function (birthYear){

	return 2037-birthYear;
}


const yearsLeftToRetire = function (birthYear){

	const age = 2037 - birthYear;
	const retire = 65-age;
	return retire;
}
console.log(yearsLeftToRetire(1993));

//adding two numbers
const sum = function (a,b){
	   let a =15;
	   let b =1;
	let add = a + b;
	
	return add;
}
//let a = 23;
//let b= 31;
console.log(sum(3,4));

//finding even numbers
const evenNumbers = function(a){

	const even = a/2;

	if(even == 0 ){

		return "a is even number";
	}else {
		return 'a is odd number';
	}
	//return `a is ${even == 0?'odd':'even'} number`;
}

console.log(evenNumbers(4));

const evenNumbers = function (number){

	const even = number%2 ;

	//if(even != 0 ){
	//	return `Number is odd`;
	//}else if(even == 0){
	//	return `Number is even`;
	//}
	return `number is ${even==0 ? 'even': 'odd'}`;
}
console.log(evenNumbers(3816));

// writing even numbers

const writingEvenNumbers = function (number,number1){

      if(number < number1){  
        i=number;
		number= number1;
		number1=i;	
	}else if(number == number1){
		return `Both are equal numbers`;
	}
	

	for(i=number1; i<=number; i++){
		
		
		let even = i*2;
		if(even >= number){
			return `They are the below ${number} even numbers`;
		}
		//console.log(`The even numbers below ${number} are`);
		console.log(even);
		
	}

	//console.log(even);
	//return even;
}
console.log(writingEvenNumbers(300,140));
console.log(writingEvenNumbers(45,100));
console.log(writingEvenNumbers(100,100));


//finding Odd number

const findingOddNumber = givenNum=> {

	const odd = givenNum%2 !=0 ?'odd':'even';

	return odd;

}

const odd = 1003;
var odd = 600;//Uncaught SyntaxError: Identifier 'odd' has already been
//let odd = 300;//Uncaught SyntaxError: Identifier 'odd' has already been
 //odd = 100//Uncaught TypeError: Assignment to constant variable.


let odd =656;
odd = 468;// no error value is overreading console is even
//const odd= 331;//Uncaught SyntaxError: Identifier 'odd' has already been
//var odd = 234;//Uncaught SyntaxError: Identifier 'odd' has already been

var odd =361;
//odd =638;// no error value is overreading
//let odd =33;//Uncaught SyntaxError: Identifier 'odd' has already been declared 
const odd =638;//Uncaught SyntaxError: Identifier 'odd' has already been declared
console.log(findingOddNumber(odd));

//writing odd numbers between given numbers

const writingOddNumbers = function (number,number1){

      if(number < number1){  
         i=number;
		number= number1;
		number1=i;	
	}else if(number == number1){
		return `Both are equal numbers`;
	}
	
	for(i=number1; i<=number; i++){
	
		let odd = i%2;
		
		if(odd != 0){
		console.log(i);
	}
}
	if(i >= number){
			return `They are the odd numbers between ${number1} and ${number} `;
		}
		return writingOddNumbers;
}
console.log(writingOddNumbers(149,140));
console.log(writingOddNumbers(60,70));
console.log(writingOddNumbers(20,20));

// Reversing a number


const reverseNumber = function(giveANumber){

	var num = giveANumber;
	var rev = 0;
	var rem = 0;

	while (num != 0){

		rem = num % 10;
		num = Math.floor(num / 10);
		rev = rem + rev*10;

		// console.log("first">>>> "num",num);
	// return rev;
	}

	return rev;

	// console.log("revers number ::::::",rev)
	
}

let revN = reverseNumber(4668)
console.log("reverse of a number :::::::",revN) ;
const number = "ramesh"
console.log(typeof Number(number))
console.log(number.length);
//console.log(("reverse string using string .length function::::::::" number))
// console.log(rev)
let ramesh = "raem"
//console.log(String.reverse(ramesh))

//let just = "rameshnagella";
//console.log(just.length);
//console.log(just)

const  reversString = givernString=>{

	let string = givernString;
	let reverse = i;
	for(i = string.length - 1; i> 0 ; i--){

		console.log(reverse);
	}


}

//ARRAYS

const friend1 ='Michel';
const friend2 = 'Peter';
const friend3 = 'John';

console.log(friend1,friend2, friend3);

//const friends =['Michel','Peter',John];// Uncaught ReferenceError: Peter is not defined
//const friends =['Michel','Peter' 'John'];//Uncaught SyntaxError: Unexpected string
//const friends =[Michel Peter John];//script2.js:529 Uncaught SyntaxError: Unexpected identifier 'Peter' 
//const friends = [michel]//Uncaught ReferenceError: michel is not defined
//const friends = ['michel'];// no error

const friends =['Michel','Peter','John'];// no error

console.log(friends[1]);//Peter
console.log(friends[2]);//John
console.log(friends[0]);//Michel

console.log(friends.length);//to get length of the array
console.log(friends.length - 1);//2
console.log(friends.length - [1]);//2
console.log(friends[friends.length - 1]);//John//To get nth position element use [] (square brackets)//
console.log(friends[friends.length - 3]);// Michel
console.log(friends[friends.length - 4]);// Undefined

//friends[2]= 'Jay'; //To add element in nth place of the array
//console.log(friends);//['Michel', 'Peter', 'Jay']
//friends[4]= 'Bob';
//console.log(friends);//['Michel', 'Peter', 'Jay', empty, 'Bob']
//friends = ['bob','alan'];
//console.log(friends);// ['bob', 'alan'] if we use let or var variable in declearation
//friends = ['bob','alan'];
//console.log(friends);////Uncaught TypeError: Assignment to constant variable.


const jonas = ['Jonas', 'Shcemdthman', 2037-1991, 'Teacher','friends'];
console.log(jonas);//(5) ['Jonas', 'Shcemdthman', 46, 'Teacher', 'friends']
console.log(jonas.length);//5

//calculate age defined in arrar

const calcAge = function(birthYear) {
	return 2037 - birthYear;
}
const years =[1991,1995,2005,1987,2015];
//console.log(calcAge(years));// NaN
calcAge (years);
console.log(calcAge(years));//NaN
//console.log(years + 10);//1991,1995,2005,1987,201510

//which means on the arrayas we cant do any operations
// but we can do operations on indivual elements


const calcAge = function(birthYear) {
	return 2037 - birthYear;
}
const years =[1991,1995,2005,1987,2015];
const age1 = calcAge(years[0]);
console.log(age1)//46
const age2 = calcAge(years[1]);
console.log(age2)//42
console.log(age1, age2)//46 42

//if we want calcAge entire array at a time

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[3])];
console.log(ages);//(3)[46, 32, 50]-->[0 1 2] these are the positions of ages array not years array
console.log(ages[2]);// which reads 2nd place element of the ages array do not read years array element

const friends =['Michel','Peter','John'];
console.log(friends);

friends.push('Bob');
console.log("after push:::::>", friends);//(4) ['Michel', 'Peter', 'John', 'Bob']0: "Michel"1: "Peter"2: "John"3: "Bob"length: 4[[Prototype]]: Array(0)

console.log(friends.length);

friends.unshift('raj ');
console.log("unshift raj", friends);//(5)['raj ', 'Michel', 'Peter', 'John', 'Bob']
console.log(friends.length);

friends.shift( );
console.log("shift", friends);//(4)['Michel', 'Peter', 'John', 'Bob']
console.log("shift", friends.length);

let popped = friends.pop();
console.log("popping",friends);//(3)['Michel', 'Peter', 'John']

console.log(friends.length);

//friends.popped();//Uncaught TypeError: friends.popped is not a function
//console.log(friends.popped);//undefined
//console.log(friends.popped());//script2.js:611 Uncaught TypeError: friends.popped is not a function

console.log("pooped element is::::> ",popped);//pooped element is::::>  Bob

popped= friends.pop();
console.log("element popped again ::::::::>>", popped);
console.log("new", friends);//['Michel', 'Peter']

console.log("place of john in array>>>>>>", friends.indexOf('John'));// -1
console.log("place of Michel in array>>>>>>", friends.indexOf('Michel'));// 0
console.log("place of Bob in array>>>>>>", friends.indexOf('Bob'));// -1
console.log("place of Peter in array>>>>>>", friends.indexOf('Peter'));// 1
console.log(friends.includes("Michel"));//true
console.log("array after includes>>>>", friends);//(2) ['Michel', 'Peter']
console.log(friends.includes("John"))//false
if(friends.includes("Michel") ){
	console.log(`Michel is present in the arry`);
}else if (friends.includes("Bob")) { 
	console.log("bob is Not present");
}else{
	console.log( " not a matter");
}
friends.push("23")
console.log("after push--->>", friends);


const calcTip = entrBillValue=>{

	if(entrBillValue > 50 && entrBillValue < 300 ){
		tip = entrBillValue*0.15;
	}else{
		tip = entrBillValue*0.20;
	}

	
	const tip = entrBillValue* ((entrBillValue > 50 && entrBillValue < 300)? 0.15 : 0.20);
	return tip;
}
//console.log(calcTip(300));//60
//console.log(calcTip(100));//15
//console.log(calcTip(10));//2
let bills = [125,555,44];
console.log("bills>>>", bills);//(3)[125, 555, 44]
//console.log(calcTip(bills[0],bills[1],bills[2]));//wrong input to calculate tip for entire bills array
//console.log(calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2]));

const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ]


console.log("tips>>>", tips);//(3) [18.75, 111, 8.8]

//let totalMoney = [bills + tips];// empty output
 const totalMoney = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

for(let i = 0;i<= bills.length-1 ; i++){

	console.log("for loop total totalMoney-->", bills[i] + tips[i])
}
console.log("totalMoney>>>", totalMoney);//(3) [143.75, 666, 52.8]


const reverseNumber = function(giveANumber){

	var num = giveANumber;
	var rev = 0;
	var rem = 0;

	while (num != 0){

		rem = num % 10;
		num = Math.floor(num / 10);
		rev = rem + rev*10;

		// console.log("first">>>> "num",num);
	// return rev;
	}

	return rev;

	// console.log("revers number ::::::",rev)
	
}

let revN = reverseNumber(4668);

console.log("reverse of a number :::::::",revN) ;
const number = "ramesh"
console.log("place value::::::>", number[3]);
console.log(typeof Number(number))
console.log(number.length);
//console.log(("reverse string using string .length function::::::::" number))
// console.log(rev)
let ramesh = "raem"
//console.log(String.reverse(ramesh))
*/
//let just = "rameshnagella";
//console.log(just.length);
//console.log(just)

const reversString = function (str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
let rev = prompt(`Enter any string to reverse: `);
console.log(reversString(rev));
//console.log(ramesh.length());

const jonas = [
  "Jonas",
  "Schmidthman",
  2037 - 1991,
  "teacher",
  ["peter", "michel", "john"],
];
console.log(jonas); //(5) ['Jonas', 'Schmidthman', 46, 'teacher', Array(3)]
console.log("accessing firstName-->", jonas[0]); // Jonas

const jonas1 = [
  (firstName = "Jonas"),
  (lastName = "Schmidthman"),
  (age = 2037 - 1991),
  (job = "teacher"),
  (friends = ["Michel", "Peter", "John"]),
];
console.log("in arrays", jonas1); //(5)['Jonas', 'Schmidthman', 46, 'teacher', Array(3)]

console.log("access first Element>>", jonas1[0]); //Jonas

console.log(jonas1[job]); //undefined
console.log(jonas1.job); //undefined
console.log(jonas1.firstName); //underfined

//** OBAJECTS **

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmidthman",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "John"],
};
console.log("in objects>>", jonas2); //{firstName: 'Jonas', lastName: 'Schmidthman', age: 46, job: 'teacher', friends: Array(3)}
console.log(jonas2.firstName); //Jonas
//console.log("without quotes..",jonas2[firstName]);//undefined
console.log("with quotes>>", jonas2["firstName"]); // Jonas
console.log("age", jonas2.age); // 46

//<which means in bracket([])notation, for strings when we are accessing string we have to write that string key in quotes otherwise it will not work
// for accessing numbers we need not to put key namen in quotes>

const nameKey = "Name";

console.log(jonas2["first" + nameKey]); //undefined
console.log(jonas2["first" + nameKey]); //Jonas
//console.log(jonas2.'first' + nameKey)//Uncaught SyntaxError: Unexpected string
//console.log(jonas2.('first' + nameKey))//Uncaught SyntaxError: Unexpected token '('
console.log(jonas2.firstName);

let interestedIn = prompt("What do you want know about jonas");
//console.log(interestedIn);
//console.log(jonas2[interestedIn]);//age   46
//console.log(jonas2.interestedIn);//age     undefined
// the above syntax for dot notation console meaning is keyName is interstedIn in jonas2 object
//but in brackeet notation intersted in is not a keyName but it is a variable name used to callling about jonas

if (jonas2[interestedIn]) {
  console.log(jonas2[interestedIn]);
} else {
  console.log(
    `'wrong request!' \n choose between firstName,lastName,age,job,friends`
  );
}
//adding elements into the OBJECT//
jonas2.location = "Portugal";
jonas2["Twitter"] = `@jonasSchnidtman`;
console.log(`inserted jonas>>`, jonas2);
console.log(jonas2.friends[0]);
//console.log(jonas2[friends[0]]);//Uncaught ReferenceError: friends is not defined
console.log(
  `${jonas2.firstName} has ${jonas2.friends.length} friends and his bestfriend called as ${jonas2.friends[0]}.`
);

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmidthman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "John"],
  hasDriversLisence: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

console.log(jonas2.calcAge(1998));
//console.log(jonas2["calcAge"](1991));
console.log("function>>>", jonas2);

var jonas = {
  firstName: "Jonas",
  lastName: "Schemdtman",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michel", "Peter", "Steven"],
  hasDriversLisence: true,
  //calcAge : function(){
  //	return 2037 - this.birthYear ;
  //}
  calcAge: function () {
    //console.log("inside function--->", this);
    return 2037 - this.birthYear;
  },
};

console.log("outside", jonas.job);

console.log("age into function>>>>", jonas.calcAge()); //38
//console.log("out>>>>", jonas["calcAge"])

//console.log("age outside>>", jonas["calcAge"]);

console.log(
  `${jonas.firstName + " " + jonas.lastName} is a ${jonas.calcAge()} year old ${
    jonas.job
  },and he has ${"DriversLisence"}`
);

// CODING CHALLENGE

const markMiller = {
  fullName: "Mark Miller",
  height: 1.69,
  weight: 78,
  calcBMI: function () {
    markBMI = this.weight / this.height ** 2;
    return markBMI;
  },
};

const johnSmith = {
  fullName: "John Smith",
  height: 1.95,
  weight: 92,
  calcBMI: function () {
    johnBMI = this.weight / this.height ** 2;

    return johnBMI;
  },
};
console.log(markMiller, johnSmith);
console.log(markMiller.calcBMI(), johnSmith.calcBMI());
if (markMiller.calcBMI() > johnSmith.calcBMI())
  console.log(
    `Mark's BMI(${markMiller.calcBMI()} ) is heigher than John's BMI(${johnSmith.calcBMI()})!`
  );
else
  console.log(
    `John's BMI(${johnSmith.calcBMI()}) is heigher than Mark's BMI(${markMiller.calcBMI()})!`
  );

//  * * L O O P S * *

const jonas = [
  "jonas",
  "Schimdthman",
  2037 - 1991,
  "Teacher",
  ["Michel", "Peter", "Steven"],
];
//console.log("length-->", jonas.length);

for (let i = 0; i <= jonas.length - 1; i++) {
  console.log(jonas[i]);
}

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let i = 0; i <= jonas.length - 1; i++) {
  console.log(jonas[i], "--->>", typeof jonas[i]);
}

// * * P R I N T I N G   O N L Y   S T R I N G * *
for (let i = 0; i <= jonas.length - 1; i++) {
  if (typeof jonas[i] != "string") continue;

  console.log(jonas[i], "--->>", typeof jonas[i]);
}

// * * P R I N T I N G   O N L Y   N U M B E R S * *

for (let i = 0; i <= jonas.length - 1; i++) {
  if (typeof jonas[i] == "string" && typeof jonas[i] != Array) continue;
  console.log(typeof jonas[i], " --->>>", jonas[i]);
}

//  * * *L O O P   I N S I D E   L O O P * * *  //
for (let e = 1; e <= 5; e++) {
  console.log(`\n ...do....exercise....day...${e}`);

  for (let rep = 1; rep < 5; rep++) {
    if (rep <= 3) {
      console.log(`exercise ${e}: lifting weight repetition ${rep}`);
    } else {
      for (j = 1; j <= 3; j++) {
        console.log(`exercise ${e}: ...jumping...${j}\n`);
      }
    }
  }
}
/*
const rev1 = "Hello World";
console.log("hello World length>>>", rev1.length);

let str1 = "";
for (let i = rev1.length - 1; i >= 0; i--) {
  str1 += rev[i];
  //console.log(str)
}
console.log(str1);

const reversString1 = function (str) {
  //let rev = givenString;
  let str1 = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    str1 += str[i];

    //console.log(str1)
  }
  return str1;
};
let rev12 = "rameshnagella";
console.log(reversString(rev));

const reversString2 = function (str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
let rev = prompt(`Enter any string to reverse: `);
console.log(reversString2(rev));
//console.log(ramesh.length());

let str = "Hello!";
console.log(str.length);
let i = str.length;

console.log(i);
while (i <= 0) {
  let newString = "";
  newString += str[i];
  i--;
  console.log(newString);
}

let rep = 1;
while (rep <= 10) {
  console.log(`lifting weight ${rep}`);
  rep++;
}
*/
