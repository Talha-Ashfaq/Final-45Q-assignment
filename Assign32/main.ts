// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3::

// Store the numbers 1 through 9 in a array::

let numbers = [1,2,3,4,5,6,7,8,9]

// using for-of loop:

for (let oneNumber of numbers) {
    let ordinalNumber : string;

    if (oneNumber === 1) {
        ordinalNumber = "st"
    }
    else if (oneNumber === 2) {
        ordinalNumber = "nd"
    }
    else if (oneNumber === 3) {
        ordinalNumber = "rd"
    }
    else{
        ordinalNumber = "th"
    }

    console.log(`${oneNumber}${ordinalNumber}`);  
}


