// if

// if condition is true then only internal code will execute  between scope {}
if (true){

}
// if condition is false then your internal code will not execute between scope { }

if(false){

}
//  <, >, <=, >=, ==, !=, === (value ke sath type bhi check karta h), !==
// const temperature = 51
// if (temperature === 41) {
//     console.log("temperature is less then 41");
// }
// else{
//     console.log("temperatur is greater than 50");
// }

// when you are using const then it will give error because const, let is global if you are using var then it will run 

// const score = 200
//  if (score >100) {
//     // const power = "fly"
//     // let power = "fly"
//     var power = "fly"
//     console.log(`use power:${power}`);
//  }
//  console.log(`use power:${power}`);

 //-------short hand notation---------
//  const balance = 1000 
// //  if (balance > 500) console.log("test"); // without scope you can write in one line code not more than one line 

// //----------nested loop------------

// if (balance <500) {
//     console.log("Less than 500");
// } else if (balance < 700) {
//     console.log("Less than 700");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else{
//     console.log("Less than 1200");
// }

//----For Multiple Condition

const userLoggedIn = true
const DebitCard = true 
const userLoggedInGoogle = false
const userLoggedInEmail = true

if (userLoggedIn && DebitCard) {     // && and operator
    console.log("Allow to buy course");
}

if (userLoggedInGoogle || userLoggedInEmail) {   // || or operator
    console.log("user Login");
}

