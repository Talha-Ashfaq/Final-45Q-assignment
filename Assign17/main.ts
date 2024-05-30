// Think of at least five places in the world you’d like to visit and make an array and make sure the array is not in alphabetical order::


// Print your array in its original order::
let placeToVisit : string []= ["Makkah","Switzerland","Norway","Turkey","Italy"];

console.log("Original Order:", placeToVisit);

// Print your array in alphabetical order without modifying the actual list::

console.log("\n Alphabetical order:", placeToVisit.slice().sort());

//  Show that your array is still in its original order by printing it::

console.log("Original Order:", placeToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list::

console.log("\n reversed Alphabetical order:", placeToVisit.slice().sort().reverse());

// Show that your array is still in its original order by printing it again::

console.log("Origianl order:", placeToVisit);


// Reverse the order of your list. Print the array to show that its order has changed::

console.log("List in reversed order:", placeToVisit);


// Reverse the order of your list again. Print the list to show it’s back to its original order::

console.log("again list in reversed order:", placeToVisit);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed::

console.log("\n Alphabetical order again:", placeToVisit.slice().sort());


//  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed::

console.log("\n reversed alphabetical order again:", placeToVisit.slice().sort().reverse());
