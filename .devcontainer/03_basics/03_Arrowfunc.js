  const user = {
    username :"Ankush ",
    price: "999",

    welcomeMessage: function(){
      console.log(`${this.username}, welcome to website`);
    //   console.log(this);
    }
  }

//   user.welcomeMessage()
//   user.username = "Sam"
//   user.welcomeMessage()

//   console.logA(this);


// function one (){
//     let username = "Ankush"
//     console.log(this.username);    // we can't use this keyword in fumction
// }
// one()


//--------Arrow Function----------


// const addtwo = (num1, num2) =>{    if you use curly braces then you can use return 
//         return num1 + num2
// }
 // const addtwo = (num1, num2) =>  num1 + num2   // this  is implicit  return
//  const addtwo = (num1, num2) => ( num1 + num2 )   //   for brackets you can't use return 
 const addtwo = (num1, num2) => ({ username:"Ankush"})   // for object you can wrap with parenthesis
console.log(addtwo(3,4));




