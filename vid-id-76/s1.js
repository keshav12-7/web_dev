

function create(content){

    let element = document.createElement('li')
    element.innerHTML=content
    const element2 = document.createElement('li')
    element2.innerHTML=content+"V2.0"
    const parent = document.getElementById('root')
    // parent.appendChild(element);
    parent.append(element,element2)

}
create("ts")
create("git")
create("github")
create("react")
create("node")
create("mongodb")
create("express js")
create("next js")
create("block chain")

const e3 = document.createTextNode("hello coders ")
const e4 = document.createTextNode("hello coders ")


const parent = document.getElementById("root")
parent.append(e3)
parent.appendChild(e4)


// create attribute node
// first li
const e5 = document.createAttribute('id')
e5.value="first"
const curr_list = document.querySelector('li')
curr_list.setAttributeNode(e5);


// to any li
// console.log(parent.children);


let c2 = parent.children[1]
console.log(c2);
const e6 = document.createAttribute('id')
e6.value="second"
c2.setAttributeNode(e6)


