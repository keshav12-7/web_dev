let o1 = {a:1,b:2}
let o2 = {c:3,d:4,e:{f:56}}
let o3 = Object.assign({},o1,o2)
console.log(o3);
o3.d=5;
console.log(o2.d,o3.d);
o3.e.f=66;
console.log(o2.e.f,o3.e.f);


const user = {
    name:"rohit",
    bal:420,
    address:{
        pincode:204101,
        city:"hathras"
    }
}
const user2 = Object.assign({},user)
user2.bal=1000000;
user2.address.pincode= 201015
console.log(user,"\n",user2);


// destructuring 
let o7 ={
    name:"keshav",
    money:23134,
    bal:420,
    age:22,
    aadhar:"234jhbjh"
}
// const{name,bal}=o7;
// console.log(name,bal);
// console.log(o7);

// const{name:user_name,bal:amount,age:umar}=o7;
// console.log(o7);
// console.log(user_name,amount);

// use of rest operator with destructuring

const{name:f_name,age:umar,...o8}=o7;
console.log(o8,"\n",o7);







