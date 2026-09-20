let obj ={
    name:"keshav",
    age:22,
    address:{
        pincode:204101,
        city:"hathras"
    },
    arr:[1,2,3,4,5]

}
const {name}=obj
console.log(name);
// const{address}=obj
// console.log(address.pincode);

const{address:{pincode}}=obj;
console.log(pincode);
const{arr:[a]}=obj;
console.log(a);



