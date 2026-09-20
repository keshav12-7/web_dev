import React from "react";
import ReactDOM from "react-dom/client"
import { readBuilderProgram } from "typescript";

const element1 = <h1>Hello coder army</h1>

let obj ={
    name:"keshav",
    age:23,
}
function greet(name){
    return <h2> ram ram bhaiya ji {1*2*9}</h2>
    // return <h2>ram ram {x=2}</h2>
    // return <h2>{obj}</h2>
    // return <h2>{obj.name}</h2>
    // return <h2>{"keshavverma"}</h2>
    // return <h2>{123}</h2>
    // return <h2>{[1,2,"keshav",true,false,{1:"kes",2:"hav"}]}</h2>

    
 }

const reactroot = ReactDOM.createRoot(document.getElementById('root'));
reactroot.render(greet("rohit"));

