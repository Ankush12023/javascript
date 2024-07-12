// Objects we can declare in two types:
// 1-Literal and  2-constructors


// Singleton
// Object.create 


// Object Literal 
const mySym = Symbol("key1")  // Decalre a Symbol
const jsuser = {
    name: "Ankush",
    "full name": "Ankush Kumar",
    [mySym]: "myKey1",   // symbol syntax  this show in output it is a symbol  but if you are using without [___] then output will comes as a object 
   // mySym: "mykey1"
    age: 18,
    location: "Punjab",
    email: "avinashkumat95@gmail.com",
    isloggedIn: false,
    lastLoginDay: ["Monday","Saturday"]
}
//   console.log(jsuser.email);
//   console.log(jsuser["email"]);
//   console.log(jsuser["full name"]);
//   console.log(jsuser[mySym]);


  jsuser.email = "Ankushk12023@gmail.com"
//   Object.freeze(jsuser)   // after freeze there will be No changes in the pbject 
  jsuser.email = "A12023@gmail.com"
// console.log(jsuser);



jsuser.greeting = function(){
    // console.log("Hello JS user");
}
jsuser.greetingtwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
}
// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());


// we can access a value in two ways  one is dot -->console.log(jsuser.email) -->  second is square brackets -->console.log(jsuser[mySym])

//--Destructuring in Objects 

const course = {
     courcename: "Javascript",
     price: "999",
     courseInstructor: "Ankush Kumar"
    }
            
    const {courseInstructor} = course    // there is two to call destructuring in object this is first one
    console.log(courseInstructor);

    const {courseInstructor: Instructor} = course   // This is second one
    console.log(Instructor);

