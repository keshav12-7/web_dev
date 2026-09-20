const promise = fetch(`
http://api.weatherapi.com/v1/current.json?key=7f1ae15d4b174e4885d75205260602&q=London&aqi=no`)
// promise.then((response)=>{
//     console.log(response);
    
//     const promise2 = response.json();
//     promise2.then((res2)=>{
//         console.log(res2);
        
//     })
    
    
// })

// const pro2 = promise.then((response)=>{
//     return response.json()
// })
// pro2.then((res2)=>{
//     console.log(res2);
    
// })


// promise.then((res1)=>{
//     return res1.json()
// }).then((res2)=>{
//     console.log(res2);
    
// })

// promise.then(res1=>res1.json()).then(res2=>console.log(res2))

promise
.then(res1=>res1.json())
.then(res2=>console.log(res2.current.temp_c))