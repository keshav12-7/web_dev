import React,{useState} from "react";
import ReactDOM from "react-dom/client";

function Counter(){
    let [count,setCount] = useState(0);


    function incrementNumber(){
        count=count+1;
        setCount(count)
        console.log(`count value is ${count} `);
        // document.querySelector("h1").innerHTML=`Count is ${count}`;
        // document.querySelector(".increase").innerHTML=`increment ${count}`
        
    }

    function decrementNumber(){
        count-=1;
        setCount(count)
        console.log(`count value is ${count}`);
        // document.querySelector("h1").innerHTML=`Count is ${count}`;
        // document.querySelector(".decrease").innerHTML=`decrement ${count}`
        
    }

    return (
        <div className="first">
        <h1>Count is: {count} </h1>
        <button className="increase" onClick={incrementNumber}>increment {count}</button>
        {/* <button onClick={()=>{
            count=count-1;
        }}>decrement</button> */}

        <button className="decrease" onClick={decrementNumber}>decrement {count}</button>
        </div>
    )
}

const reactroot = ReactDOM.createRoot(document.getElementById('root'));
reactroot.render(<Counter/>);