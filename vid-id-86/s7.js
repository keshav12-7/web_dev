// console.log("Start");

// let data = JSON.parse("invalid json"); 

// console.log("End"); // This will NOT run


console.log("Start");

try {
    let data = JSON.parse("invalid json");
    console.log(data);
    
} catch (error) {
    console.log("Something went wrong!");
    console.log(error.message);
}

console.log("End");
