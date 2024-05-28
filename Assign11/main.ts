// using previous queetion assign no 10, create a message and send to friends individually::

let names : string[] =["Shoaib","Haris","Kabeer","Usama","Salman"];

// print a msg to them by using 3 loop methods discussed in previous assign:

// for loop:
for (let i=0; i< names.length; i++){
    console.log(`Assalamualikum ${names[i]},  Are you ready for picnic?`);
}


// for Each:

names.forEach(friendNames=>{
console.log(`Han ${friendNames}, Kia seen hai BBQ ka?`);
})


// for of:

for (let friendNames of names) {
    console.log(`${friendNames}, han jani weekend ka plan kroo yr!`);
}