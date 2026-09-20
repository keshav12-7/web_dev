// const btn1 = document.getElementById("red")
// btn1.addEventListener("click",()=>{
//     document.body.style.backgroundColor="red"
// })
// const btn2 = document.getElementById("blue")
// btn2.addEventListener("click",()=>{
//     document.body.style.backgroundColor="blue"
// })
// const btn3 = document.getElementById("green")
// btn3.addEventListener("click",()=>{
//     document.body.style.backgroundColor="green"
// })
// const btn4 = document.getElementById("yellow")
// btn4.addEventListener("click",()=>{
//     document.body.style.backgroundColor="yellow"
// })
// const btn5 = document.getElementById("orange")
// btn5.addEventListener("click",()=>{
//     document.body.style.backgroundColor="orange"
// })

// const buttons = document.querySelectorAll("button")
// // console.log(buttons);
// buttons.forEach((btn)=>{
//     console.log(btn);
//     btn.addEventListener("click",(event)=>{
//         const id = btn.id;
//         document.body.style.backgroundColor=`${id}`;
//     })
    
// })

const root = document.querySelector(".root")
root.addEventListener("click",(event)=>{
    console.log(event.target);
    // console.log(event.currentTarget);
    console.log(event);
    
    const color = event.target.id;
    document.body.style.backgroundColor=`${color}`
    
})