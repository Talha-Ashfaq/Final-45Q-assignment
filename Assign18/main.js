"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner::
let guestlist = ["Hamza", "Shoaib", "Noman", "Haris", "Salman", "Ali"];
console.log("Unfortunately, new dinner table won't arrived , so we can invite only two guests.");
// remove guests from list::
while (guestlist.length > 2) {
    let removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you.`);
    }
}
// print a new invitation who are still in list::
guestlist.forEach(guest => {
    console.log((`Dear ${guest}, you are still invited to dinner.`));
});
