// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:


// Tests for equality and inequality with strings::

let string1 : string = "Hello";
let string2 : string = "World";

console.log(string1 == string2);
console.log(string1 != string2);



// Tests using the lower case function::

let upperCase : string = "HELLO";
let lowerCase : string = "hello";

console.log("\n",upperCase.toLowerCase() == lowerCase);



// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:::

const number1 : number = 10;
const number2 : number =20;

console.log("\n",number1 == number2);
console.log(number1 != number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);



//  Tests using "and" and "or" operators::


let x : number = 5;
let y : number = 10;
let z : number =15;

console.log("\n",x < y && y > z);
console.log(x > y || y < z);


// Test whether an item is in a array::

const array1 : number[] = [1,2,3,4,5];
const itemToFind : number = 3;

console.log("\n", array1.indexOf(itemToFind) !== -1 );



// Test whether an item is not in a array:::

console.log(array1.indexOf(6) === -1);









