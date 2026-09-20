import ts = require("typescript");

console.log("hello");
let tuple:[number,string,string?] =[12,"keshav"] 
let points:readonly[number,number]=[12,23]
// points[0]=111

let obj1 = {
    name:"keshav",
    age:22,
    isadult:true
}
let obj2:{name:string,age:number}={
    name:"22",
    age:22,
    // isadult:true
}

let person:{name:string,age:number,isadult:boolean}
person={
    name:"keshav",
    age:22,
    isadult:true
}


type customer = {
    name:string,
    age:number,
    id:number
}
let c1 : customer={
    name:"kes",
    age:22,
    id:223344
}

interface admin{
    name:string,
    age:number,
    position:string
}
let obj4:admin={
    name:"keshav",
    age:22,
    position:"sde3"

}
  
