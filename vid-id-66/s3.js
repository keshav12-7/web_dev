let arr = [1,2,4,5]
let obj ={
    name:"keshav",
    age:20
}

let o2 ={
    // name:"rishab",
    amount:334,
    money:50
}
console.log(o2.name);

o2.__proto__ = obj;
console.log(o2.name);
console.log(obj.amount);
console.log(obj.jhb);
console.log(obj.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__=== Object.prototype.__proto__);





