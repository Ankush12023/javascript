// Immediately Invoked Functions Expression (IIFE)

(function chai() {                   // named IIFE
    console.log(`DB connected`);
})();    // for ending in this IIFE we can use Semicolon at the last 

// ()()   this is IIFE  // Global scope ke pollution se problem hoti hain kai baar toh us global scope ke variables ya jo bhi waha decalartion h uske pollution ko htane ke liye hamne IIFE ka use kiya

( () => {                                        //Unnamed IIFE
    console.log(`DB connected `);
} ) ();


( (name) => {                                     // unnamed IIFE with Parameter (name)
    console.log(`DB connected ${name} `);
} ) ("Ankush")


// when we write  two or more IIFE  so after one IIFE and Before second IIFE you can use Semicolon ; 