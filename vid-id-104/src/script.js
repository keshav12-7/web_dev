import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){
    const [password, setpassword]= useState("");
    const [length,setlength]=useState(10);
    const [numberchanged,setnumberchanged]=useState(false);
    const [Characterchanged,setcharacterchanged]=useState(false);

    const generatepassword = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(numberchanged){
            str+="0123456789";
        }
        if(Characterchanged){
            str+="!@#$%%^&*()_+="
        }
        let pass="";
        for(let i=0;i<length;i++){
          pass+=str[Math.floor(Math.random()*str.length)]
        }

        setpassword(pass);
    },[length,Characterchanged,numberchanged])

    

    // generatepassword()
    // it will create infinite re-render loop 

    useEffect(()=>{
        generatepassword();
    },[length,numberchanged,Characterchanged])

    return(
        <>
        <h1>Password is: {password}</h1>
        <div id="form">
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <label>Length is: {length}</label>

            <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setnumberchanged(!numberchanged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={Characterchanged} onChange={()=>setcharacterchanged(!Characterchanged)}></input>
            <label>Character</label>
        </div>
        </>
    )
}

const reactroot = ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);