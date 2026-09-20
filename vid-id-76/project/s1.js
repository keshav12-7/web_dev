
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


function generate_quote(){
    const element = document.getElementById("quote")
    // element.innerHTML="i am great"
    let index = Math.floor(Math.random()*thoughts.length)
    element.innerHTML=thoughts[index]
}
// setInterval(generate_quote,1000)
const bgColors = [
  "#c73c26",  
  "#09548a",  
  "#1d2f1e",  
  "#524227",  
  "#ab325a",  
  "#4ea0d7",  
  "#234251",  
  "#3a9841",  
  "#656026",  
  "#28c4bc"   
];



function toggle_color(){
    const body = document.querySelector(".root")
    
    let r = Math.floor(Math.random()*256)
    let g= Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    body.style.backgroundColor=`rgb(${r},${g},${b})`
}
// setInterval(toggle_color,1000)



