// making a fucntion with parameters that returns a values in string

function city_country(city: string , country: string): string {
    return `${city},${country}`
}

// calling function and pritn the returned value::
console.log(city_country("Karachi","Pakistan"));

console.log(city_country("Tokyo","Japan"));

console.log(city_country("Istabul","Turkey"));


