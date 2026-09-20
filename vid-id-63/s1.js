console.log(12=="jhb");
const arr=[2,3,5,1,2,9,"keshav",true]
console.log(arr.at(2));
const a2=arr
console.log(a2);
console.log(a2===arr);
const a3=structuredClone(arr)
console.log(a3,a3==arr);

delete arr[1]
console.log(arr,a2,a3);

console.log(arr.indexOf(9),arr.lastIndexOf(9));

console.log(a3.slice(3,6),a3);

// console.log(a3.splice(2,5),a3);
console.log(a3.splice(2,3,"money",34),a3)
console.log(a3.splice(2,0,12),a3);

let a4=[1,2,6,3,5]
console.log(a4.toString(),a4.join("*"));

let a5 = [2,34,12,456]
// console.log(a4.concat(a5),a4,a5)
a4=a4.concat(a5,a3)
console.log(a4,a5);

let a6 = [12,2,3,[1,2,4],5,6,[7,8]]
let a7=a6.flat()
console.log(a6,"\n",a7);

let a8 = [1,2,3,4,5]
console.log(typeof a8,Array.isArray(a8))

let a9=new Array(true)
console.log(a9,a9.length);

let f=function(){
    console.log("hello");
    
}
console.log(typeof f);








