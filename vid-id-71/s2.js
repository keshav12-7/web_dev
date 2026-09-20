let s1 = new Set([10,20,30,40,10]);
console.log(s1);
console.log(typeof s1);
const s2 = new Set();
s1.add("keshav")
s2.add(123)
console.log(s1,s2);
console.log(s2.size);
console.log(s1.delete(220),s1);
console.log(s1.delete(10),s1)
// console.log(s1.clear(10),s1);

console.log(s1.clear(),s1)

let s3 = new Set([10,20,30,40,50])
let s4 = new Set([10,20,60,70,80,40])
let s5 = new Set([...s3,...s4])


console.log(s5);

let s6 = new Set([...s3].filter((num)=>{
    return s4.has(num);
}))

console.log(s6);

for(let x of s3){
    console.log(x);    
}
console.log("hello");

console.log(s3.forEach((value)=>console.log(value)));





