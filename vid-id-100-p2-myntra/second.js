import React from "react";
import ReactDOM from "react-dom/client"

const element = <h1>hello second file</h1>
function greet(name){
    return <h1>hello {name}</h1>
}
function Meet(){
    return <h2>hello</h2>
}

function Weet(props){
    return <h3>hello {props.name} bhai of age {props.age}</h3>
}

// function Weet(props,nationality){
//     return <h3>hello {props.name} bhai of age {props.age} {props.props.nationality}</h3>
// }

const element2 = greet("mohan");
const element3 = greet();
const element4 = <greet/>
const e5 = <Meet/>

const e6 = <Weet name="keshav" age="23" />
const obj = {
    name:"keshav verma",
    age:"23"
}
const e7=Weet(obj,"indian")

const e8 = <Weet personality="indian"/>
const reactroot = ReactDOM.createRoot(document.getElementById('root'))
// reactroot.render(greet("keshav"))
// reactroot.render(element2)
// reactroot.render(element3)
// reactroot.render(element4)
// reactroot.render(e5)
// reactroot.render(<Meet/>)
// reactroot.render(e6)
// reactroot.render(e7)
// reactroot.render(e8)

reactroot.render(e6)