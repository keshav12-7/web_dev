    import { useEffect, useState } from "react";

    function Body(){
        const [profile,setprofile]=useState([]);
        // console.log("hello");
        let [cnt,setcnt]=useState(5);
        let [value,setvalue]=useState(0);
        
        async function generateprofile(){
            const response = await fetch(`https://api.github.com/users?per_page=${cnt}`)
            const data = await response.json();
            setprofile(data);
        }

        useEffect(()=>{
            generateprofile();

        },[cnt])

        return(
            <>
            <div className="search">
                <input type="number" onChange={(e)=>{
                    setvalue(e.target.value);
                }}></input>
                <button onClick={()=>{
                    setcnt(value);
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
    