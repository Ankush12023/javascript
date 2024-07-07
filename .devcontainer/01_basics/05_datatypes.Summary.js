//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",    // inside {} is Object
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);


//*****************Stack and Heap Memory*******************/

// Stack -- Primitive Datatype
// Heap -- Non Primitive datatype

let myName = "Ankush_Kumar"
let anotherName = myName
anotherName = "Avinash_kumat"

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "avinashkumat95244@gmail.com",
    upi: "234567876@ybl"
}

let userTwo = userOne
userTwo.email = "ankushk1234@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);