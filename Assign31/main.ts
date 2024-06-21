// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// Make a list of five or more usernames called current_users::

let current_users = ["Asher","Mubashir","Hamza","Khizer","Usman"]

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list:

let new_users = ["Haris","Kabeer","Hamza","Shoaib","Usman"]

// loop through new_user to check usernames availability:
new_users.forEach(new_one_user => {

// making a condition for username already taken and save in a variable called our_condition:
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// print different messages using IF-else statements::
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!. The person will need to enter a new username.`);
    }else{
        console.log(`This username ${new_one_user} is available.`);

    }

});

