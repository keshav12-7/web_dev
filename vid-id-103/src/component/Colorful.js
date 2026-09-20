import React,{useState,useEffect} from "react";
import ReactDom from "react-dom/client";

function Colorful(){
    let [color,setcolor] = useState("white");
    


    // this is without useeffect hook 

    // document.body.style.backgroundColor=color;

    // useEffect(useCallback,dependency)

    
    
    

    useEffect(()=>{
        
        
        document.getElementById("screen").style.backgroundColor=color;
    },[color])

    console.log("second");
    
    
    return (
        <>
        <div className="container" style={{backgroundColor:"gray"}}>
       
        <h1>background color changer</h1>
        <div className="but">
            <button onClick={()=>setcolor("red")}>red</button>
            <button onClick={()=>setcolor("green")}>green</button>
            <button onClick={()=>setcolor("violet")}>violet</button>
            <button onClick={()=>setcolor("blue")}>blue</button>
            <button onClick={()=>setcolor("orange")}>orange</button>
            <button onClick={()=>setcolor("yellow")}>yellow</button>
            <button onClick={()=>setcolor("skyblue")}>skyblue</button>
            
        </div>
        </div>
        </>

        
    )
}

export default React.memo(Colorful);