// in the continuation of assign 13,  your one guest cannot make dinner, so remove that person from your list and make a set of invitation with that person you will come after.


let guestlist: string []=["Shoaib", "Haris", "Usama"];

// print that person who can't make the dinner::

let unableAttend: string[] = guestlist.splice(2,1);

console.log(`${unableAttend}, not invited to dinner.`);

// add new person you are inviting by push method::

guestlist.push("Salman");

console.log(guestlist);


// make a new set of invitation::

guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});