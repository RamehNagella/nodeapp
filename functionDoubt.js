/creating passport Number
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
console.log(checkInn(flight, jonas));
console.log(checkInn(flight, peter));


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
  if (passenger.passport === Math.trunc(Math.random() * 10000000000)) {
    alert("checked In");
  } else {
    alert("wrong passport");
  }
};
const newPassport = function (person) {
  console.log(person);
  person.passport = Math.trunc(Math.random() * 10000000000);
  console.log(">>>>>>", person.passport);
};
newPassport(Jonas);
console.log(Jonas);

checkIn(flight, Jonas);
// here to passport numbers are same but output is coming like "wrong passport"

const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],
  book: function (flightNum, name2) {
    console.log(
      `${name2} has booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode} ${flightNum}`, name2 });
  },
};
lufthansa.book(239, "jonas");
lufthansa.book(635, "steven");

//lets say lufhansa created new group of airline
const euroWings = {
  name: "eurowings",
  iataCode: "EW",
  bookings: [],
};
const book = lufthansa.book;
book.call(euroWings, 23, "Sarah Williams");
console.log(euroWings);
book.call(lufthansa, 43, "rameshNagella");
console.log(lufthansa);
// error code error is undefined inplace of flightname and name also didnot changed
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
    ),
      this.bookings.push({
        flight: `${this.iataCode}${flightNum}`,
        Name: `${passengerName}`,
      });
  },
};
indigo.book(10, "ramesh nagella");
// Ramesh Nagella has booked seat on Indigo flight IGS 10
// for this no error(book method used)
const flightData = [581, "stephen hockings"];

book.apply(indigo, flightData);
//stephen hockings has booked a seat on undefined flight IGS 581
// but for this iam getting undefined inplace of flight name(apply method used)

//incresing no of planes
const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH",
  bookings: [],

  book: function (flightNum, name2) {
    console.log(
      `${name2} has booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: ` ${this.iataCode} ${flightNum}`, name2 });
  },
};
//with EventListeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
