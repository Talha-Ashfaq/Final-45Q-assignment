"use strict";
// large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message::
Object.defineProperty(exports, "__esModule", { value: true });
// making a function::
function make_shirt(size = "large", printMessage = "I love TypeScript") {
    console.log(`Creatign a ${size} shirt with ${printMessage} prints on it.`);
}
// calling a function by-default values:
make_shirt();
// calling a function now with medium size and defaults printMessage::
make_shirt("medium");
// calling a fucntion with different messages:
make_shirt("small", "I love JavaScript");
