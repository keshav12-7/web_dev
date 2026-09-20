// let obj ={}
// console.log(obj);
// obj.name = "keshav"
// console.log(obj);
// // writable enumerable configurable
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));

let obj ={}
Object.defineProperty(obj,'name',{
    value:"keshav",
    writable:false,
    enumerable:true,
    configurable:false
})
obj.name = "rishab"
// Object.defineProperty(obj,"name",{
//     writable:true,
// })
console.log(obj);

let o2 = {
    name:"keshav",
    age:"22",
    gender:"male"
}
o2.age=20;
Object.defineProperty(o2,"age",{
    value:22,
    writable:false
})

console.log(o2,o2.age);

let o3 = {
    name:"kes",
    age:22,
    acc_no:123,
    bal:420
}
Object.defineProperty(o3,"name",{
    enumerable:false,
})
for(let key in o3){
    console.log(key);   
}
console.log(o3);
console.log(Object.getOwnPropertyDescriptor(Object.prototype,"toString"))
Object.defineProperty(Object.prototype,"toString",{
    enumerable:true
})
for(let key in o3){
    console.log(key);
    
}