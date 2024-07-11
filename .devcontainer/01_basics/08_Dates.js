// let mydates = new Date()
// console.log(mydates.toDateString());  // Thu Jul 11 2024
// console.log(mydates.toISOString());  // 2024-07-11T06:03:49.389Z
// console.log(mydates.toJSON());       // 2024-07-11T06:03:49.389Z
// console.log(mydates.toLocaleDateString()); //  7/11/2024
// console.log(mydates.toLocaleString());    //  7/11/2024, 6:03:49 AM
// console.log(mydates.toString());       //  Thu Jul 11 2024 06:03:49 GMT+0000 (Coordinated Universal Time)
// console.log(mydates.toTimeString());    //  06:03:49 GMT+0000 (Coordinated Universal Time)
// console.log(mydates.toUTCString());    //   Thu, 11 Jul 2024 06:03:49 GMT
// console.log(mydates.getTimezoneOffset());   //   0

// console.log(typeof mydates);

// let myCreateDate = new Date(2023, 0, 25)
// let myCreateDate = new Date("2023-01-14")
// let myCreateDate = new Date("01-14-2023")

// // console.log(myCreateDate.toLocaleString());

// let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
// console.log(newdate.getDay());
// console.log(newdate.getDate());
// console.log(newdate.getFullYear());


newdate.toLocaleString('default',{
    weekday: "long"
})
console.log(newdate);
