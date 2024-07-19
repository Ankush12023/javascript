const coding = ["JS", "Java", "Ruby","CPP"]

//------1------------
// coding.forEach(function(valu){
//     console.log(valu);
// })


  //-----------2------------
// coding.forEach((valu)=>{
//     console.log(valu);
// })

// 
//-----------3----------
// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme)

///---------------4----------------

// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
// })
  // in Array we can take object values
const myCoding =[
    {
        languageName:"Javascript",
        languageFileName:"JS"
    },
    {
        languageName:"C++",
        languageFileName:"CPP"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    }
]

myCoding.forEach((item)=>{
    // console.log(item.languageFileName);
    // console.log(item.languageName);
})