const name = "Ankush"
const repocount = 50

// console.log(name + repocount);  // this is not a good
// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);  // this way is good 


const gameName = new String('Ankush-ak')  // another way to declared String 

// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length); // it will show length
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('k'));

// const newString = gameName.substring(2, 4)   // In this we always start with positive 
// console.log(newString);

// const anotherString = gameName.slice(-8, 6)  // In this we can start with Positive or Negative both
// console.log(anotherString);

const newStringOne = "    Ankush     "
console.log(newStringOne);
console.log(newStringOne.trim());   // using trim string you can delete whitespace in string



const url = "https://ankush.com/ankush%20kumat"

console.log(url.replace('%20', '_'));    // using replace you can replace anything in url
console.log(url.includes('ankush'));     // using includes string you can check that word in my url or  not 
console.log(gameName.split('-'));