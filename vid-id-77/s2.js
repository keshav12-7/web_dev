const thoughts = [
  "Small progress is still progress.",
  "Consistency beats motivation every time.",
  "Believe in yourself even when it’s hard.",
  "Every day is a new chance to improve.",
  "Your efforts will pay off — don’t quit.",
  "Stay focused on your goals, not distractions.",
  "Hard work today builds a better tomorrow.",
  "Learn from mistakes, don’t fear them.",
  "Growth happens outside your comfort zone.",
  "Keep going — you’re closer than you think.",
  "Discipline creates success.",
  "One step at a time is enough.",
  "Be proud of how far you’ve come.",
  "Stay patient and trust the process.",
  "Success is built daily, not overnight.",
  "You are capable of more than you imagine.",
  "Challenges make you stronger.",
  "Stay positive, work hard, make it happen.",
  "Focus on progress, not perfection.",
  "Never stop learning and improving."
];

// mouse event

const btn1 = document.querySelector('button')
btn1.addEventListener("click",(event)=>{
    console.log(event);
    
    const text = document.getElementById("quote")
    let index = Math.floor(Math.random()*thoughts.length)
    text.innerHTML=thoughts[index]
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
    
    
    
    
})

// keyboard event
// document.addEventListener("keydown",(event)=>{
//     console.log(event.key);
//     if(event.key==="Enter"){
//         const text = document.getElementById("quote");
//         let index = Math.floor(Math.random()*thoughts.length)
//         text.textContent=thoughts[index]
//     }
    
// })




// document.addEventListener("click",(event)=>{
//     console.log(event);
    
//  })