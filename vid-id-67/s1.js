// function greet(){
//     console.log("hello");

    
// }
// greet()
// console.log(greet(),typeof greet);
// function sum(n1,n2){
//     console.log(n1+n2);
    
// }
// sum(1,2)

function mul(n1,n2){
    console.log(n1);
    
    return n1*n2
    console.log(n2);
    
}

console.log(mul(1,5))
mul(3,2)
console.log(mul(45,43));

const fun = function(){
    console.log("hello");
    
}
fun()
console.log(fun());

const f2 = ()=>{
    console.log("hellokjn");
    
}

f2()
const sum = (n1,n2)=>{
    console.log(n1+n2);
    
    return n1+n2
}
sum(1,2)
console.log("ekjn","\n",sum(2,3),typeof sum);

console.log(typeof mul());

const f3 = (n1,n2)=> n1*n2;
console.log(f3(2,4));

const f4 = (n1,n2)=> ("hello")
f4()
console.log(f4());
