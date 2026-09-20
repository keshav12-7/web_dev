const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise resolve");
    },5000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second promise")
    },3000)
})

// async function greet(){
//     const data1 = await p1;
//     // console.log("hello cp");
    
//     console.log(data1);

//     // const data2 =await p2;
//     // console.log(data2);
    
    
// }
// async function meet(){
//     const data1 = await p2;
//     console.log(data1);
    
// }
// greet();
// meet()


p1.then(value=>console.log(value));
p2.then(value=>console.log(value));