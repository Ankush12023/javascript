// For Loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best element");
    }
    // console.log(element);  
}

for (let i = 0; i <=10; i++) {
    // console.log(`outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`inner loop: ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = '  + i*j);
        
    }
    
}
let myArray = ["Ankush","Abhishek","Ashwin","Abdullah"]
//  console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);   
}

//---------- break and continue

// for (let i = 1; i <=20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${i}`);
    
// }

for (let i = 1; i <=20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
    
}