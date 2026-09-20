// "use strict";
// console.log(20);
// // console.log(globalThis);
// console.log(this);
// console.log(globalThis===this);

// // console.log(this===window);
// console.log(window===this);
// function greet(){
//     console.log(this);
    
// }
// greet()

// "use strict"
// function meet(){
//     console.log(this);
    
// }
// meet()

const o2 = {
    name:"keshav",
    preet:function(){
        console.log(this);  
    }
}
// console.log(o2);
// o2.preet()
function greet(){
    console.log(this);
    
}
greet()
console.log(Object.greet())

