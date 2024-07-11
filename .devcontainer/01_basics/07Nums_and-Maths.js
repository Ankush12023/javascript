const score = 400
// console.log(score);

const Balance = new Number(100)
// console.log(Balance);

// console.log(Balance.toString().length);
// console.log(Balance.toFixed(2));


const othervalue = 123.7889
// console.log(othervalue.toPrecision(3));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   // en-IN--Indian Standards Numbers



//------------------------------Maths---------------------------------

// Math--Math ek default value h aur vo object bhi hain

console.log(Math);

// console.log(Math.abs(-4));  // Math.abs we can change negative value in positive but we can't change positive value to negative it's only change the negative values
// console.log(Math.round(4.5));  // round will give a value like if we take 4.5 then it will give output 5 that is round-off value
// console.log(Math.ceil(4.5));   // ceil means Top mtlb agar thoda sa bhi 4 se jada to value 5 output dega ceiling me
// console.log(Math.floor(4.5));  // floor means Down kitna bhi 4 se uppar ye 4 hi output lega chahe 4.9 hi kyu na input ho
// console.log(Math.min(4,4,5,3,6,3,8,5));//  minimun value 
// console.log(Math.max(4,7,4,9,4,8));
console.log(Math.random());  // ouput me zero or one ke bich ki value hi aayegi hamesha
console.log((Math.random() * 10)+ 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min); // Always value will come between 10 to 20   




