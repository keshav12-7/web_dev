 const obj = fetch(`http://api.wedwedeatherapi.com/v1/current.json?key=7f1ae15d4b174e423ejkl23e32885d75205260602&q=London&aqi=nowrfkmnlkrf`)

//  console.log(obj);
//  setTimeout(()=>{
//     console.log(obj);
    
//  },2000)
//  console.log(2*2);

obj.then((data)=>{
    console.log("data");
    
    console.log(data);
    
}).catch((error)=>{
    console.log("error");
    
    console.log(error);
    
})
 