// for In loop

const myONject ={
    JS: 'Javascript',
    CPP:'C++',
    SQL:'Structure Query Language'
}

for (const key in myONject) {
    // console.log(myONject[key]);
    // console.log(`${key} shortcut for ${myONject[key]}`);
}

const programming = ['js','C++','C','Java']
for (const key in programming) {
   console.log(programming[key]);
}