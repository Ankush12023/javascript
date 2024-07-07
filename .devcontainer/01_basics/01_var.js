const accountId = 14453
let accountEmail = "avinashkumat95@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2   not Allowed because we use variable  --const---


accountEmail = "ankushk12023@gmailcom"
accountPassword = "122222"
accountCity = "Bengluru"

/*
  Prefer not to use var
  Because of issue in block scope and functional scope

*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])