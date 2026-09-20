"use strict";
// console.log(global);
// // console.log(window); window is only applicable in browser
// console.log(globalThis.Math.random());

// console.log(this);
// console.log(window===this);
// function greet(){
//     console.log(this);
    
// }
// greet()
// console.log(globalThis);

// "use strict"

// x = 10;
// console.log(x);


// "use strict"
// let obj = {
//     name:10
// }
// Object.freeze(obj)
// obj.name=111
// console.log(obj);


function greet(){
    console.log(this);
    
}
greet()
// globalThis.greet()