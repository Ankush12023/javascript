//array


const myArr = [0,1,2,3,4,5,]
// const myArr2 = new Array(1,2,3,4,5,6)
// console.log(myArr2[0]);

//-------- Array Method----------

// myArr.push(6)  // New element to add to the array
// myArr.push(7)  // New element to add to the array
// myArr.pop()   // Remove the last value from the arrays

// myArr.unshift(9)  // Add the element in the Zero(first)Index in the array
// myArr.shift    // remove the first element in array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()  //  using join- we have to Bind the Array and also we convert array into string
// console.log(myArr);
// console.log(newArr);


//------ slice, ----- splice--------

console.log("A", myArr);

const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);


const myn2= myArr.splice(1,3)
console.log("C", myArr);
 console.log(myn2);