let obj = {
    name:"keshav",
    age:22,
    gender:"male",
    city:"delhi"
}
for(let a in obj){
    console.log(a,obj[a]);
    
}
let obj2 = Object.create(obj)
obj2.amount = 420;
obj2.id = "kes"
console.log(Object.keys(obj2));
for(let a in obj2){
    console.log(a);
    
}
