"use strict";
// make a list in an array of your at least three friends , and invite them to dinner ::
let guestlist = ["Shoaib", "Haris", "Usama"];
// print a message to each person to invite them to dinner::
// by forEach::
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordially invited to dinner.`);
});
// map():
// invite guest:
let invitation = guestlist.map(guest => `Dear ${guest}, you are cordially invited to dinner.`);
console.log(invitation);
