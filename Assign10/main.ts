//  store the name of feww friends in array called names:


let names: string[]= ["Shoaib","Haris","Kabeer","Usama","Salman"];

// print each persosn name in a list:
// By three methods: for Loop , forEach, for of loop:::


// for loop:

for (let i=0; i<names.length; i++){
    console.log(names[i]);
}


// for Each:

names.forEach(friendNames => {
    console.log(friendNames);
    
});


// for of :

for (let friendNames of names) {
    console.log(friendNames);
    
}