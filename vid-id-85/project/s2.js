
const place = "London"
const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=7f1ae15d4b174e4885d75205260602&q=${place}&aqi=no
`)

prom
.then((res1)=>res1.json())
.then((res2)=>console.log(res2.current.temp_c))
    



    