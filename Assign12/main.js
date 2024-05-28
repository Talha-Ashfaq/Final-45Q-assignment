"use strict";
// create an array with your favourite mode of transportation, and print the statement:
let transportationMode = ["Audi", "Rollsroyce", "Bugatti", "Mercedes"];
// print a statement by three methods:
// for loop:
for (let i = 0; i < transportationMode.length; i++) {
    console.log(`I would like to own a "${transportationMode[i]}".`);
}
// forEach:
transportationMode.forEach(mode => {
    console.log(`I would like to own a ${mode}.`);
});
// for of :
for (let cars of transportationMode) {
    console.log(`I would like to own a ${cars}`);
}
