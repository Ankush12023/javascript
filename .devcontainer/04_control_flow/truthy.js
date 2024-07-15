// falsy values
// false, 0 , -0 , BigInt 0n , "" , null, undefined, NaN

// truthy values
// "0" , 'false' , " " , [] , {} , function(){}

const userEmail = "Ank123@gmail.com"

// if (userEmail) {
//     console.log("got user Email");
// } else{
//     console.log("User not Give Email");
// }

// for array we can check it is empty or not
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// for object we can check it is empty or not
//  const emptyobj = {}
//  if (Object.keys(emptyobj).length === 0) {
//     console.log("Onject is Empty");
//  }


 // Nullish coalescing  operator (??): null undefined

let val1;
val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15  

console.log(val1);


// - terniary  operator--
// condition ? true : false

const iceTea = 100
iceTea <=80 ? console.log("less than 80") : console.log("More than 80");