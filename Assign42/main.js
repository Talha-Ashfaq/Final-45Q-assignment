"use strict";
// Creating a fucntion to show magicians names in an list
function show_magicians(magicians) {
    magicians.forEach(name => {
        console.log(name);
    });
}
// make another function to modify through .map() function :::
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
// make an array
let magicians_name = ["Talha", "Shoaib", "Salman"];
// making a copy of original array magicians name array thorugh slice()::
let copy_names = magicians_name.slice();
// modify the copied array include "The Great" with their names::
let copied_greatmagicians = make_great(copy_names);
// calling both function arrys , original and copied::
console.log("Original array\n");
show_magicians(magicians_name);
console.log("\nCopied array\n");
show_magicians(copied_greatmagicians);
