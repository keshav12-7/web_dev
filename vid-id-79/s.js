const form = document.querySelector("form");
// form.addEventListener('reset',(event)=>{
//     // console.log(event.target.value);
//     console.log(event.target.value);
//     console.log("form reset");

// })

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  console.log(data);
  for(let ent of data){
    console.log(ent);
    
  }
//   console.log(Array.from(data.keys()));
//   console.log(Array.from(data.values()));
//   console.log(Array.from(data.entries()));

  // const first = document.getElementById("first");
  // console.log(first.value);
  // const second = document.getElementById("second");
  // console.log(second.value);
  // const third = document.getElementById("third");
  // console.log(third.value);
});
