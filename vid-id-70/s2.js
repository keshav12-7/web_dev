let arr = [1,2,3,4,5,1223,53,23]
arr.forEach(function(x,y,z){
    console.log(x,y,z);
    
})
arr.forEach(x=>{
    console.log(`hello ${x}`);
    
})
let fun = function(x){
    console.log(x);
    
}
arr.forEach(fun)