const arr = [1,2,3,4,5]
console.log(arr.map(function(num){
    return num*num;
}))
console.log(arr);
console.log(arr.map(num=>num*num))

const result2 = arr.forEach((x)=>{
    console.log(x*x);
    return x;
    
})

console.log(result2);
console.log(arr.map((num)=>{
    console.log("hello");
    return num*num
    // console.log("hekllo");
    
   
}));
arr.forEach((x)=>{
    console.log(x*3)
    
})

const a = [1,2,3,4,5,6]
let r3 = a.filter((x)=>{
    return x%2==0
})
console.log(r3);
r3 = r3.map((x)=>{
   return x*3
})
console.log(r3,a);
console.log((a.filter((x)=>{
    return x%2==0;
})).map((x)=>{
    return x*4
}));

