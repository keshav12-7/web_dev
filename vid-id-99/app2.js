import React from "react";
import ReactDOM from "react-dom/client";
// const element = (<div>

//         <h1>hello coders in app2</h1>
//         <h2>maja aa raha h</h2>

//             </div>)
const name = "keshav"

const obj = {
    age:23,
    gender:"male"
};

const obj2 = {
    backgroundColor:"gray",
    color:"pink",
    fontSize:"30px"
}

const element = (
    <>
    <h1  id="heading1" className="heading 1" money="23" moneyval={23}>hello coder in app2 with fragmented element</h1>

    <p id="para" style={obj2}>. </p>
    <h3>my name is {name}</h3>
    <h3>my age is {obj["age"]}</h3>
    </>
)

function Greet(){
    return <h1>aur bhai kesa h</h1>
};

const Meet = ()=>{
    return <h3>meet function</h3>
}
const newelement2=Greet();
const reactroot = ReactDOM.createRoot(document.getElementById('root'));
// reactroot.render(element)
// reactroot.render(newelement2)
// reactroot.render(<Greet/>)
reactroot.render(<>{Greet()} {Meet()}</>)