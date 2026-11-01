import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/Body";

function Githubprofile(){
    // header 
    // body: 10 cards 
    return(
        <>
        <Header></Header>
        <Body></Body>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Githubprofile/>)

