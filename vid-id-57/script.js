const { StrictMode } = require("react");

let arr = [10,20,30,true,"mohit",'rohit']
console.log(arr,typeof arr);
// object

let obj = {
    user_name:"keshav",
    acc_no: 123445,
    balance:12234455
}
console.log(obj,typeof obj);

// function
let fun = function(){
    console.log("hello");
    return 10;
    
}
fun();
console.log(typeof fun);
console.log(fun());

//  type conversion
let acc_bal="100"
let num = Number(acc_bal)
console.log(acc_bal,typeof acc_bal,num,typeof num);
let x = true
console.log(x,Number(x),typeof x,typeof Number(x));

let y = "123dhdb"
console.log(Number(y));
let z = null
console.log(Number(z));
console.log(Number(undefined));

// to string
// let ab = 20
// console.log(ab);





