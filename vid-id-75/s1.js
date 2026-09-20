function timing() {
  const timer = document.getElementById("root");
  const now = new Date();
  const indian_time = now.toLocaleTimeString();
  // timer.innerHTML="hello coder army"
  // timer.innerHTML=now
  timer.innerHTML = indian_time;
}

setInterval(timing,1000)

const timer = document.getElementById("root");
timer.style.fontSize = "150px";
timer.style.height = "100vh";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
// timer.style.backgroundColor="orange"
