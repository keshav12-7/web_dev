document.querySelector('button').addEventListener('click',(event)=>{
    event.preventDefault()
    const place = document.getElementById("loc").value;

    function updatetemp(data){
        const element =  document.querySelector(".result")
        element.innerHTML=`today's temp is ${data.current.temp_c}`
    }

    const prom = fetch(`https://api.weatherapi.com/v1/current.json?key=7f1ae15d4b174e4885d75205260602&q=${place}&aqi=no`)
    prom
    .then((resp)=>{
        return resp.json();
    })
    .then((data)=>{
        updatetemp(data);
        // console.log(data);
        
    }).catch((error)=>{
        console.log("error");
        console.log(error);    
    })


})

