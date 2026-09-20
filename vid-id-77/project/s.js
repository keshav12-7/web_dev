const btn = document.querySelector("button")
btn.addEventListener('click',()=>{
    const input1=document.getElementById("first")
    let n1= input1.value ;
    n1 = Number(n1);
    const input2 = document.getElementById("second")
    if(isNaN(n1) || isNaN(n2)){
        return;
    }
    let n2 = input2.value;
    n2 = Number(n2)

    const output = n1+n2;
    const res = document.querySelector(".result");
    res.innerHTML+= output;
})