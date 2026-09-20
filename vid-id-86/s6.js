const cart = ["pizza","coke","sandwich"]


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
            console.log("food is delivered");
            
        
        },2000)
        

    })
    return pr;
    
    
}


async function greet(){

    try{
        const order = await placeorder(cart);
        const fooddetails = await preparingorder(order);
        const droplocation = await pickuporder(fooddetails)
        deliverorder(droplocation)
    }
    catch(error){
        console.log(error);
        
    }
    
}


greet()
