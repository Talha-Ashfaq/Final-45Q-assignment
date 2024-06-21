"use strict";
// define a fucntion to create a car object wtih optional options using rest parameters::
Object.defineProperty(exports, "__esModule", { value: true });
function create_Car(manuf, model, ...otherInfo) {
    // initialize a car object with manufacturer and model::
    let car = {
        Manufacturer: manuf,
        Model: model
    };
    //  add additional options to the car object::
    otherInfo.forEach(others => {
        let [key, value] = others.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
// calling the function to create car object::
let my_car = create_Car("Toyota", "Corolla", "Color:Blue", "Sunroof: True ", "Year:2024");
// print the variable to ensue all the infomation is stored correctly in the car object:
console.log(my_car);
