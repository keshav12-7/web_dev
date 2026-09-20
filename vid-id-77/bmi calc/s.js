let btn = document.querySelector("button")
btn.addEventListener("click",()=>{
    let height = document.getElementById("h")
    let h_value=height.value 
    h_value=Number(h_value)
    let weight = document.getElementById('w')
    let w_value = weight.value
    w_value=Number(w_value)
    const ans = (w_value/(h_value*h_value))*10000;
    const bmi = document.querySelector(".result")
    bmi.innerHTML+=ans;
})