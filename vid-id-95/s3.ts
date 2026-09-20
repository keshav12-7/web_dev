function greet(a:number):number{
    console.log("hello");
    return a+4
    
}
console.log(greet(4));

function meet(msg:string){
    console.log(msg);
    
}

function neet(msg:string="keshasv"){
    console.log(msg);
    
}
neet()

function gate(person?:string){
    console.log(person||"mohan");
    
}
gate("jdeddkd")


// arrow function

const sum = (a:number,b:number):number=>{
    return a+b;
}
console.log(sum(23,3));


// callback function

function placeorder(order:number,callback:(amount:number)=>void):void{
    const amount:number=order+10;
    callback(amount);
}

placeorder(10,(amount:number)=>{
    console.log(amount);
    
})

type chill = (amount:number)=>void;

function placeorder2(order:number,callback:chill):void{
    const amt:number = order+24;
    callback(amt)
}
placeorder2(12,(amt:number)=>{
    console.log(amt+32);
    
})


// rest parameter

function total(...arr:number[]){
    let ans = 0;
    arr.forEach((val)=>ans+val);
    console.log(ans);
    
}

total(1,234,2,42,4,5,3,52,2);
total()
