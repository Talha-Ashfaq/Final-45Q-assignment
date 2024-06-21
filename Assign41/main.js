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
let great_magicians = make_great(magicians_name);
// call the function
show_magicians(great_magicians);
