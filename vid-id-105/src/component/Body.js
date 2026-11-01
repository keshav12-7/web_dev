    import { useEffect, useState } from "react";

    function Body(){
        const [profile,setprofile]=useState([]);
        // console.log("hello");
        let [cnt,setcnt]=useState(1);
        let [inp_value,setvalue]=useState(1);
        let x = Math.floor(Math.random()*10000)+1
        let [rand,setrand]=useState(x);
        
        async function generateprofile(){
            const response = await fetch(`https://api.github.com/users?since=${rand}&per_page=${cnt}`)
            const data = await response.json();
            setprofile(data);
        }

        useEffect(()=>{
            generateprofile();

        },[cnt])

        return(
            <>
            <div className="search">
                <input type="number" value={inp_value} onChange={(e)=>{
                    setvalue(e.target.value);
                }}></input>
                <button onClick={()=>{
                    setcnt(inp_value);
                    setrand(Math.floor(Math.random()*10000)+1)
                }}>Click</button>
            </div>
            <div className="profile">
                {
                    profile.map((value)=>{
                    return( <div key={value.id} className="cards">
                            <img src={value.avatar_url}></img>
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="_blank">profile</a>
                        </div>)
                    })
                }
            </div>
            </>
        )
    }
    export default Body;
    