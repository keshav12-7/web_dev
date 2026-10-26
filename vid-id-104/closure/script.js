function greet(){
    let a = 20;
    let b = 30;
    function meet(){
        console.log(a);  
        console.log(a-b);
             
    }
    return meet()
}
let x = greet()
x();


