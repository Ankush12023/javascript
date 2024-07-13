//  var c = 300
 let a = 300 

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER:", a); 
}

// console.log(a);
// console.log(b);
// console.log(c);


//   nested Scope

function one (){
    const username = "Ankush"

    function two() {
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);    // error we can't access this (website) outside the scope 
    two()
}
// one()


if (true) {
    const username = "Ankush"
    if (username === "Ankush") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);   //   Error
}
// console.log(username);     // Error



//++++++++++++++++++Intersting++++++++++++++++


function addone(num) {
    return num + 1
}
addone(5)

//   this is not showing error  we can execute before function 

addone(5)
function addone(num) {
    return num + 1
}
addone(5)



// const addtwo = function (num) {
//     return num + 1
// }
// addtwo(5)

    // But this can give Error because when we declare variable  so we can't call function before
addtwo(5)
const addtwo = function (num) {
    return num + 1
}