let obj= {
    name:"keshav",
    age:22,
    gender:"male",
    acc_no:421
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


// let obj1 = {
//   name: "A",
//   address: { city: "Delhi" }
// };

// let obj2 = Object.assign({}, obj1);

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city);

const o1 = {
    a:1,
    b:2
}
const o2={c:3,d:4}
const o3 = Object.assign({},o1,o2)
console.log(o3,o1,o2);
o3.a=234
console.log(o1,o2,o3);


// use of spread operator(...)
const o5 = {e:5,f:6}

const o4 = {...o1,...o2,...o5}
console.log(o4);
console.log(o1,o2,o5);


