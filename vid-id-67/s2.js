const sum = function(...number){
    console.log(number);
    
}
sum(1,2,42,2)

let obj = {
    name:"keshav",
    age:22,
    amount:420
}
function fun(o1){
    console.log(o1.name,o1.age,o1.jkh);
    
}
fun(obj)
function fun2({name , amount}){
    console.log(name,amount);
    
}
fun2(obj)
console.log(fun.__proto__.__proto__== Object.prototype);
