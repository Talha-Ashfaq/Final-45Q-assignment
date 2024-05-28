// In the continuation of assign 14, inform the great news to guest for bigger table, and add more three person to invite the dinner::

let guestlist : string[] = ["Shoaib","Haris","Salman"];

console.log("Great News buddies! we have found bigger table for dinner.");

// add a new member in the beginning::

guestlist.unshift("Hamza");

console.log(guestlist);

// add a new member in the middle::

guestlist.splice(2,0,"Noman");

console.log(guestlist);


// add one more member in the end::

guestlist.push("Ali");

console.log(guestlist);


// now print a invitation to new sete of guests::

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});