// const original_ans=["Virat Kohli","INDIA","Lord's","264"]
const original_ans = {
    question1:"Virat Kohli",
    question2:"INDIA",
    question3:"Lord's",
    question4:"264"
}
const form = document.querySelector('form')

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    const data = new FormData(form)
    // const answer = Array.from(data.values());
    // const answer =data.entries(
    // console.log(answer);
    let score = 0;
    // for(let i=0;i<answer.length;i++){
    //     if(answer[i]===original_ans[i]){
    //         score+=1;
    //     }
    // }

    for(let [key,value] of data.entries()){
        if(value===original_ans[key]){
            score+=1;
        }
    }
    console.log(score);
    
    const result = document.getElementById("result")
    result.innerHTML=`${score} out of 4 is correct`
   
    
})