// js is a single threaded synchronous language

// js behaviour is also asynchronous

console.log(10);

const timer = Date.now()
// console.log(timer);

// setTimeout(()=>{
//     console.log(20);
    
// },1000)
// console.log(20);

while(Date.now()-timer<2000){

}
console.log(20);


console.log(30);


