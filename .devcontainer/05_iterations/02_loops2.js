// for of loops

// [" "," "," "," "]  // inside array there is many string
// [ {}, {}, {}, {} ] // inside array there is many objects

// for of -- array
const arr =[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}
  // for of-- string
const greeting = "Hello World"
for (const greet of greeting) { 
    // console.log(greet);
}


// map

const map = new Map()
map.set('In',"India")
map.set('AU',"Australia")
map.set('UN',"United Kingdom")
map.set('In','India')  // in Map we can't print same value in two times it is unique value


// console.log(map);

for (const [key, value] of map) {   // [key, value] using this we cant destructuring the array
    console.log(key,value);
}

//   objects are not iterating here  show it will give error
const obj = {
    'game1' : 'NFS',
    'game2' : 'FF',
    'game3' : 'PG'
}
for (const [key , value] of obj) {
    // console.log(key,space);
}


