// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal::

// define an array
let petAnimals = ["cat","dog","rabbit"]

// using forOf loop::
for (const onePet of petAnimals) {
    console.log(onePet);
}


// modify loop:
for (const onePet of petAnimals) {
    console.log(`A ${onePet} would make a great pet.`);
    
}

// print a message outside from loop:
console.log("Any of these animals would make a great pet!");
