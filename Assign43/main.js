"use strict";
// making a function thats accepts different items of arguments with the rest parameters::
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(...items) {
    console.log("\n Making a sandwich with a following item\n");
    items.forEach(singleItem => {
        console.log(singleItem);
    });
    console.log("\n Enjoy your sandwich\n");
}
;
// calling a function 3 times with different arguments::
makeSandwich("bread", "chicken", "egg");
makeSandwich("bread", "chicken", "butter", "cheese", "mayo");
makeSandwich("bread", "butter");
