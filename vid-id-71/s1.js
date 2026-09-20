const arr = [10,20,30,40,50]
const result = arr.reduce((acc,curr)=>{
    console.log(acc,curr);
    
    acc = acc+curr;
    return acc;
},0)
console.log(result);
console.log(arr.reduce(((acc,curr)=>acc+curr),0));
const arr2 = []
console.log(arr2.reduce((acc,val)=>acc+val,0));

let a3 = ["orange","apple","banana","orange","apple","banana","orange","grapes"]
let r3 = a3.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr)){
        acc[curr]++;
    }
    else{
        acc[curr]=1
    }
    return acc;
},{})

console.log(r3);

