
const cart = ["pizza","coke","sandwich"]


// function placeorder(cart,callback){
//     console.log("order is placing");
//     setTimeout(()=>{
//         console.log("order placed");
//         const order = {orderid:221,items:cart,restro:"Dominos",location:"kamla bazaar"}
//         callback(order)
        
//     },2000)
    
// }

// function preparingorder(order,callback){
//     console.log("order is preparing");
//     setTimeout(()=>{
//         console.log("order prepared");
//         const fooddetails = {token:112,restautant:order.restro,location:order.location};
//         callback(fooddetails)
        
//     },5000)
    
// }

// function pickuporder(fooddetails,callback){
//     console.log("delivery boy assigned ");
//     setTimeout(()=>{
//         const droplocation = fooddetails.location;
//         console.log("order pickuped by delivery man");
//         callback(droplocation)
//     },2000)
    
// }
// function deliverorder(droplocation){
//     console.log("order is delivering");
//     setTimeout(()=>{
//         console.log("order delivered");
        
//     },2000)
    
// }



// placeorder(cart,(order)=>{
//     preparingorder(order,(fooddetails)=>{
//         pickuporder(fooddetails,(droplocation)=>{
//             deliverorder(droplocation);
//         })
//     })
// })
function placeorder(cart){
    console.log("order is placing");
    const pr = new Promise(function(resolve,reject){
            setTimeout(()=>{
            const food_available=true;
                if(food_available==true){
                    console.log("order placed");
                    const order = {orderid:221,items:cart,restro:"Dominos",location:"kamla bazaar"}
                    resolve(order)
                }
                else{
                    reject("out of stock")
                }
            
            
            },2000)
        })
    return pr;  
}

function preparingorder(order){

    console.log("order is preparing");

    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
        console.log("order prepared");
        const fooddetails = {token:112,restautant:order.restro,location:order.location};
        resolve(fooddetails)
        
        },5000)
    })
    return pr;   
}
function pickuporder(fooddetails){
    console.log("delivery boy assigned ");
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
        const droplocation = fooddetails.location;
        
        console.log("order pickuped by delivery man");
        resolve(droplocation)
        },2000)
    })
    return pr;
    
}
function deliverorder(droplocation){
    console.log("order is delivering");
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const food_b=false;
            if(food_b==true){
                resolve("food delivered")
            }
            else{
                reject("order is not pickuped by delivery partner");
                
            }
        
        
        },2000)
        

    })
    return pr;
    
    
}


placeorder(cart)
.then(order=>preparingorder(order))
.then(fooddetails=>pickuporder(fooddetails))
.then(droplocation=>deliverorder(droplocation))
.catch(error=>console.log(error));

