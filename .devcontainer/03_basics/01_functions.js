//---Functions in JS-----

function saymyname(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("U");
    console.log("S");
    console.log("H");
}

//  saymyname()

//  function addTwoNumbers(numbers1, numbers2){      // this is Parameters
//     console.log(numbers1 + numbers2);
//  }

//  addTwoNumbers(3,7)  // we can call the functions      // this is arguments




 function addTwoNumbers(numbers1, numbers2){     
    // let result = numbers1 + numbers2               // one way
    // return result                        
    return numbers1 + numbers2                       // second way
}

  const result = addTwoNumbers(3,7)  

//   console.log("result :", result);

//----------1-------------
function loginusermessage(username){
    if(username === undefined){
    //    console.log("Please Enter your username");
       return
    }
    return `${username} just logged in `
}
// console.log(loginusermessage())


//------------2----------------

function loginusermessage(username ="sam"){
    // if(username === undefined){                     ///   same meaning
        if(!username){                                 /// same meaning
    //    console.log("Please Enter your username");
       return
    }
    return `${username} just logged in `
}
// console.log(loginusermessage("Ankush"))


// function calculatecartprice(...num1){
//     return num1
// }
// console.log(calculatecartprice(200,300,400,500));

// function calculatecartprice( val1, val2, ...num1){
//     return num1
// }
// console.log(calculatecartprice(200,300,400,500));

const user = {
    name: "Ankush",
    price: 12345
}

function handleobject(anyobject){
    // console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    name:"Anku",
    price:3456
})




const myArr = [100,200,300,400,500]

function returnsecondvalue(getarray){
        return getarray[2]
}

// console.log(returnsecondvalue(myArr));
console.log(returnsecondvalue([100,200,300,400,500]));
