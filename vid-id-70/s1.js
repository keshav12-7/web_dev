let o1 ={
    name:"keshav",
    age:22
}
console.log(Object.getOwnPropertyDescriptor(o1,"name"));
Object.defineProperty(o1,"name",{
    writable:false,
})
o1.name="rishab"
console.log(Object.getOwnPropertyDescriptor(o1,"name"));

let arr = [1,20,3,4]
for(let x of arr){
    console.log(x);
    
}
let str = "keshav is a good boy"
for(let x of str){
    console.log(x);
    
}

const o2 = {
    name:"keshav",
    age:22,
    gender:"male"
}
// for(let x of o2){
//     console.log(x);    
// }
let arr2 = [10,20,30,40,50]
function names(x){
    console.log("hello i am name",x);
    x()
}
function greet(){
    console.log("i am call back function");   
}
names(greet)
// greet()
names(()=>{
    console.log("hello, i am arrow function as a callback function");
    
})
let fetch_data = ()=>{
    console.log("i am fetching data");  
} 
// setInterval(fetch_data,5000)hb
arr2.forEach(function(x){
    console.log(x);    
})