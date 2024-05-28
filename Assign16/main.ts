// shrinking guest list, you can invite only two people because new dinner table won't arrived::

let guestlist : string[]=["Hamza", "Shoaib","Noman","Haris","Salman","Ali"];

console.log("Unfortunately, new dinner table won't arrived , so we can invite only two guests.");

// remove guests from list::

while (guestlist.length > 2 ) {
    let removedGuest:string | undefined = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry, ${removedGuest}, we can't invite you.`);
    }

}

// print a new invitation who are still in list::

guestlist.forEach(guest => {
   console.log((`Dear ${guest}, you are still invited to dinner.`));
});


// remove last two names also, and print updated empty list::

guestlist.splice(0,guestlist.length);

// print updated empty list::

console.log("updated empty list:", guestlist);

