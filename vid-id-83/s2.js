// callback hell
function placeorder(callback){
    console.log("talking with domino's");
    setTimeout(()=>{
        console.log("order placed successfully");
        callback()
    },2000)
    // setTimeout(()=>{
    //     callback()

    // },1000)
    
}
// placeorder()
function preparingorder(callback){
    console.log("pizza preparation started...");
    setTimeout(()=>{
        console.log("pizza preparation done");
        callback()
        
    },5000)
    
}
// preparingorder();
function pickuporder(){
    console.log("reaching restaurant for picking order");
    setTimeout(()=>{
        console.log("order pickuped by delivery boy");
        
    },3000)
    
}
function deliverorder(){
    console.log("delivery boy on the way");
    setTimeout(()=>{
        console.log("order delivered successfully");
        
    },5000)
    
}
// placeorder()
// preparingorder()

// placeorder(preparingorder)

placeorder(()=>{
    // preparingorder(pickuporder);
    preparingorder(()=>{
        pickuporder(()=>{
            deliverorder()
        })
    })

})


