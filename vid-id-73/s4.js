// let o1 = {
//     name:"rohit",
//     greet:function(){
//         let ab = ()=>{
//         console.log(this);    
//         };

//         ab();
//    } 
// }
// console.log(o1);

// o1.greet();

class person{
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
}
let a = new person("keshav",22)
console.log(a);
