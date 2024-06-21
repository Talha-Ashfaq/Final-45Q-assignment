"use strict";
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:::::
Object.defineProperty(exports, "__esModule", { value: true });
let personAge = 25;
if (personAge < 2) {
    console.log("The person is a baby.");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("The person is a toddler.");
}
else if (personAge >= 4 && personAge < 13) {
    console.log("The person is a kid.");
}
else if (personAge >= 13 && personAge < 20) {
    console.log("Teh person is a teenager.");
}
else if (personAge >= 20 && personAge < 65) {
    console.log("The person is an adult.");
}
else if (personAge >= 65) {
    console.log("the person is an elder.");
}
