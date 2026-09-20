
let b = 20;

function greet(){
    let a=10;
    console.log(a);   
    console.log(b);

    function meet(){
        console.log(a, "inside meet");
        console.log("hello");
        
        
    }
    return meet;
     
}

// console.log(a);
// you can not print a outside its scope
// console.log(b);


const num = greet()
console.log(num);
// console.log("hey");

num()




