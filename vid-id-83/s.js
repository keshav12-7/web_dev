// callback function

function fetchuser(callback){
    console.log("fetching the user Detail....");
    setTimeout(()=>{
        console.log("date fetched successfully");
        const name = "keshav"
        // greet();
        callback(name)
    },2000)
   
}
function greet(name){
    console.log(`hello ${name}`);
    
}
function meet(name){
    console.log(`hello ${name} , I will meet you at delhi`);
}
 
function age(name){
    console.log(`hello ${name} give your age`);
}

function edit(name){
    console.log(`hello ${name} your name is edited`);
    
}

// fetchuser(meet);
fetchuser(edit)
