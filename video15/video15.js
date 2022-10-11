console.log("Hello world from HTML")

// let arr = [1,2,3,4,5,6,7,8,9,10]
let arr = [
    { name: "Tan", age : 30},
    { name: "Hoa", age : 18},
    { name: "Hue", age : 39},
    { name: "Hoai", age : 21},
    { name: "An", age : 30},
]

// filter and find
//take a last five numbers

let filter = arr.filter((a, b) => a.age ===30);


let Find_element = arr.find((a, b) => a.age ===30);

console.log(filter);
console.log(Find_element);
