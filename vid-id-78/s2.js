const child = document.querySelector(".child")
child.addEventListener("click",(event)=>{
    console.log("clicked the child");
     event.stopPropagation();
    console.log(event.target)
    console.log(event.currentTarget)
    
    
},false)
const parent = document.querySelector(".parent")
parent.addEventListener("click",(event)=>{
    console.log("clicked the parent");
   
    console.log(event.target)
    console.log(event.currentTarget)
  
},false)
const gp = document.querySelector(".gp")
gp.addEventListener("click",(event)=>{
     event.stopPropagation();
    console.log("clicked the gp");
    console.log(event.target)
    console.log(event.currentTarget)
},false)
