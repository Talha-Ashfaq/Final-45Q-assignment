// No Users: Add an if test to Exercise 29 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!

//Remove all of the usernames from your array, and make sure the correct message is printed.


// define an array:

let userName = ["Shoaib","Salman","Admin","Haris","Kabeer"];

// Remove all of the usernames from your array, and make sure the correct message is printed::

userName = []

// If statement for checking length, is our array is empty
if (userName.length === 0) {
    console.log("your array is empty. We need to find some users!");
}else{
    userName.forEach(user => {
        if (user === "Admin") {
            console.log(`Hello ${user}, would you like to see a status report?`);
        }else{
            console.log(`Hello ${user}, thank you for logging in again.`)
        }
    });
}


