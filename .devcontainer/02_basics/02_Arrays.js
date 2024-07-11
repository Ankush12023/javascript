const marvelHeros = ["thor", "Captain_America", "SpiderMan"]
const DCheros = ["Superman", "flash", "batMan"]

// marvelHeros.push(DCheros)

// console.log(marvelHeros);

// const all_heros = marvelHeros.concat(DCheros)
// console.log(all_heros);

// const all_new_heros= [...marvelHeros,...DCheros]   // spread operator means we c
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6,[7,8,9]]]
const real_another_array = another_array.flat(Infinity)  // flat 

console.log(real_another_array);



console.log(Array.isArray("Ankush"));  
console.log(Array.from("Ankush"));
console.log(Array.from({name: "Ankush"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



