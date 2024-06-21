// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items::



interface List {
    name: string;
    price: string;
    description: string
}


let objectContainigitems: List = {
    name: "Dell",
    price: "55000",
    description: "High performance laptop with fast processor."
}

console.log(objectContainigitems.name);