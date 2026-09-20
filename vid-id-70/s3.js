let arr = [10,22,23,41,50]
const result = arr.filter((num,index,array)=>{
    return num%2==0;
})
console.log(result);
const arr2 = arr.filter(num => num%2==0)
console.log(arr2);
console.log(arr);

const students = [
    
    {name:"keshav",age:22,marks:97},
    {name:"rishab",age:21,marks:56},
    {name:"ishan",age:19,marks:80},
    {name:"akhil",age:23,marks:70},
    {name:"mohit",age:26,marks:90}    
]

const result2 = students.filter((obj)=>{
    return obj.marks>=70
})
console.log(result2);
const r3 = students.filter(({marks})=> marks>=70)
console.log(r3);
