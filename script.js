"use strict";
// const axios = require("axios");

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
/*
const getCountryAndNeighbour = function (country) {
  //   AJAX CALL Counrty1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener("load", function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //renderCounrty1
    renderCountry(data);

    //get neighbourcounty2
    const [neighbour] = data.borders;
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, "neighbour");
    });
  });
};
getCountryAndNeighbour("portugal");
getCountryAndNeighbour("usa");
// getCountryData("india");
//callback hell
setTimeout(() => {
  console.log("1 secondpassed");
  setTimeout(() => {
    console.log("2 secondpassed");
    setTimeout(() => {
      console.log("3 secondpassed");
      setTimeout(() => {
        console.log("4 secondpassed");
        setTimeout(() => {
          console.log("5 secondpassed");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/
// THESE CALLBACK HELL CAN OVERCOME BY USINIG PROMISES

//PROMISES and fertch API

// // modern way of calling ajax calls
// const request = fetch("https://restcountries.com/v2/name/portugal");
// console.log(request);
/*
const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}peopel</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
  </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  //   countriesContainer.style.opacity = 1;
};
*/
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)     //this will return response  to read this use then method
//     .then(function (response) {
//       console.log(response);
//       return response.json();                //==>>this then method always returns promise
//     })
//     .then(function (data) {
//       console.log(data);                  //==>>to read promises we need use then() method
//       renderCountry(data[0]);
//     });
// };
// getCountryData("portugal");
//above can be written as below
/*
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  //   countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errMsg = "Somthing went wrong") {
  return fetch(url).then((response) => {
    console.log(response);

    if (!response.ok) throw new Error(`${errMsg} (${response.status})`);

    return response.json();
  });
};
*/
/*
const getCountryData = function (country) {
  //country1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found(${response.status})`);

      return response.json();
    })
    .then((data) => {
      //==>>this fetch returns promise//==>>this fetch returns promise
      renderCountry(data[0]);
      //   const neighbour = data[0].borders?.[0];
      const neighbour = "dlfjlk";

      //country 2                                                               //this entire then method returns promise
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found(${response.status})`);

      response.json();
    }) // --->>this returns fullfilled valu//==>>this fetch returns promisese of promise
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err}>>>>`);
      renderError(`Somthing went wrong@@@'${err.message}.Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", function () {
  getCountryData("portugal");
});
// getCountryData("dfkjdf");
*/
/*
const getCountryData = function (country) {
  //country1
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error("No neighbour found");

      //country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err}>>>>`);
      renderError(`Somthing went wrong@@@'${err.message}.Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener("click", function () {
  getCountryData("portugal");
});
// getCountryData("australia");
getCountryData("china");
*/

//THE EVENT LOOP IN PRACTICE

// console.log("Test start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// console.log("Test end");

// //globel scope elements will excute first
// //promises having special queue so they will be excuted before callback queues excuted
/*
console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 10000000; i++) {}
  console.log(res);
});
console.log("Test end");
*/
//the setTimeOut call back will not excute exactly after one second because this callback will have to wait for Promise excution

//BUILDING A simple PROMISE

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve("You WIN");
//   } else {
//     reject("You lost your money");
//   }
// });
//consuming promise
// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

//simulate the promise
/*
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN");
    } else {
      reject("You lost your money");
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
//Promisefying means converting the  callback based asynchronous bahavior into promise based behavior

//Promisefying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2).then(res=>console.log(res)) ;//>>> no need mention res because in promise we are not passing any argument
wait(1)
  .then(() => {
    console.log("1 secondpassed");
    return wait(1);
  })
  .then(() => {
    console.log("2 seconds passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 seconds passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 seconds passed");
    return wait(1);
  })
  .then(() => {
    console.log("5 seconds passed");
  });
//both are same

//callback hell
// setTimeout(() => {
//     console.log("1 secondpassed");
//     setTimeout(() => {
//       console.log("2 secondpassed");
//       setTimeout(() => {
//         console.log("3 secondpassed");
//         setTimeout(() => {
//           console.log("4 secondpassed");
//           setTimeout(() => {
//             console.log("5 secondpassed");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);

//both are same

Promise.resolve("abc").then((z) => console.log(z));
// Promise.reject(new Error("problem!")).catch((z) => console.error(z));
*/
//Promisifying geolocation api
// navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (err) => console.error(err)
// );
// console.log("Getting positon");
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );                              //both are same
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      console.log(pos.coords);
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://restcountries.com/v2/name/${lat},${lng}?geoit=json`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status} `);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city},${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message}`));
};

btn.addEventListener("click", whereAmI);
*/
/*
//coding challenge 3
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};
let currentImg;
createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.opacity = "none";
    return createImage("img/img-3.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.opacity = "none";
  })
  .catch((err) => console.error(err));
*/

//CONSUMING PROMISES WITH A S Y N C /   A W A I T

// const whereAmI = async function (country) {
//   //   fetch(`https://restcountries.com/v2/name/${country}`).then((res) => {
//   //     console.log(res);            //both are same
//   //   });
//   const res = await fetch(`https://restcountries.com/v2/name/${country}`);
//   const data = await res.json(); //-->>this will give promise
//   console.log(data);
//   renderCountry(data[1]);
// };
// whereAmI("India");
// console.log("First");
//this is gettinng location of user using async/await (without using then() method)
/*
//now using async/await on geolocation api

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  //reverse geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.country}`
  );
  const data = await res.json(); //-->>this will give promise
  console.log(data);
  renderCountry(data[1]);
};
whereAmI();
console.log("First");
*/
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    //geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (!resGeo.ok) throw new Error("problem getting location data");

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");

    const data = await res.json(); //-->>this will give promise
    console.log(data);
    renderCountry(data[1]);
  } catch (err) {
    renderError(`@ ${err.message}`);
  }
};
console.log("1: will get location");
whereAmI();

console.log("3: fisnished gettting location");
*/

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  try {
    //geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (!resGeo.ok) throw new Error("problem getting location data");

    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");

    const data = await res.json(); //-->>this will give promise
    console.log(data);
    renderCountry(data[1]);

    return `you are in ${dataGeo.city},${dataGeo.country}`;
  } catch (err) {
    renderError(`@ ${err.message}`);

    //reject promise returned from async function
    throw err;
  }
};
console.log("1: will get location");
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.message} ##`))
//   .finally(() => {
//     console.log("3: fisnished gettting location");
//   });

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2:${city}`);
  } catch (err) {
    console.error(`2:${err.message}`);
  }
  console.log("3: fisnished gettting location");
})();
