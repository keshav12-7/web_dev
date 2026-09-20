const parent = document.getElementById("root")

// prepend
const element = document.createElement("li")
element.innerHTML="TS"
parent.prepend(element)


// append
const element2 = document.createElement("li")
element2.innerHTML="react"
parent.append(element2)

// insert before

const child2 = parent.children[2]
const e3 = document.createElement("li")
e3.innerHTML="git"

parent.insertBefore(e3,child2)

// replace child

const e4 = document.createElement("li")
e4.innerHTML= "github"
const c3 = parent.children[1]
parent.replaceChild(e4,c3)

// using innerhtml

parent.innerHTML += "<li>html</li>"

const e6 = document.createElement("div")
e6.innerHTML="hello coders "
// parent.insertAdjacentElement("beforebegin",e6)
parent.insertAdjacentElement("beforeend",e6)

// remove or delete element

document.querySelector("li").remove()
