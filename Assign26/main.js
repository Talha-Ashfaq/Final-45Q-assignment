"use strict";
// Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain:::
Object.defineProperty(exports, "__esModule", { value: true });
// version 01:
let alien_color = "green";
if (alien_color === "green") {
    console.log("(Version 01) the player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log(" the player earned 10 points.");
}
else if (alien_color === "red") {
    console.log(" the player earned 15 points.");
}
// version 02:
let alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log(" the player earned 5 points.");
}
else if (alien_color2 === "yellow") {
    console.log("(version 02) the player earned 10 points.");
}
else if (alien_color2 === "red") {
    console.log(" the player earned 15 points.");
}
// version 03:
let alien_color3 = "red";
if (alien_color3 === "green") {
    console.log(" the player earned 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log(" the player earned 10 points.");
}
else if (alien_color3 === "red") {
    console.log("(Version 03) the player earned 15 points.");
}
