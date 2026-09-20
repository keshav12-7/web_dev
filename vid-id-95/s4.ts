// rest parameter

function total(...arr:number[]){
    let ans:number = 0;
    arr.forEach((val)=>{
        ans = ans+val
    });
    console.log(ans);
    
}

total(1,234,2,42,4,5,3,52,2);
total(1,2,3)


// extends keyword 

interface human{
    name:string;
    age:number
}

interface teacher extends human{
    salary:number,
    subject:string
}
const obj:teacher={
    name:"ekta pandey",
    age:34,
    salary:100000,
    subject:"maths",
    

}
