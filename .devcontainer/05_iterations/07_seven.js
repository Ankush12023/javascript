const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//  const newNum  =  myNumbers.map((num) => num + 10)

//----------chaining---------------  in chaining we can use two or more method like map().map().filter() like this
  const newNum = myNumbers.map((num) => num*10).map((num)=>num + 1).filter((num) => num >= 40) // this is chaining

 console.log(newNum);