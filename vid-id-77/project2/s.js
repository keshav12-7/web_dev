document.body.addEventListener("click",(event)=>{
    const circle = document.createElement("div");
    // circle.className="circle";
    circle.setAttribute("class","circle")
    const msg = ["hii","Hello","sayonara","gn","gm","evening","hey"]
    circle.innerHTML=msg[Math.floor(Math.random()*msg.length)]
 
    const x_pos = event.clientX
    const y_pos = event.clientY

    circle.style.left=`${x_pos-25}px`
    circle.style.top=`${y_pos-25}px`

    // const bg = ["red","blue","orange","green","purple","yellow","wheat","aliceblue"]

    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    circle.style.backgroundColor=`rgb(${r},${g},${b})`
    document.body.appendChild(circle)
    setTimeout(()=>{
        circle.remove();
    },5000)
})