// create element through normal  js 



// const heading1 = document.createElement("h1")
// heading1.innerText="hello react"
// heading1.style.backgroundColor="blue"
// heading1.style.fontSize="23px"
// heading1.style.color="white"

// const heading2 = document.createElement("h2")
// heading2.innerText="kaise ho aap sab log"
// heading2.style.backgroundColor="black"
// heading2.style.fontSize="20px"
// heading2.style.color="white"
// heading2.style.padding="10px"

// const root = document.getElementById('root')
// root.append(heading1);



// create element with oject through js


const react = {
    createElement:function(tag,styling,children){
        const element = document.createElement(`${tag}`);
        if(Array.isArray(children)){
            for (let i =0;i<children.length;i++) { 
                element.appendChild(children[i]);
            }
        }
        else{
            element.innerText = children;
        }
        
        for (const keys in  styling) {
            element.style[`${keys}`]=`${styling[keys]}`;
        }
        return element;
    }
}

const reactdom = {
    render:function(element,root){
        root.append(element);
    }
}


const heading1 = react.createElement('h1',{},"hello coder army");
const heading2 = react.createElement('h2',{},"kaise h aap sab");
const heading3 = react.createElement('h3',{backgroundColor:"blue",fontSize:"23px",padding:"12px",color:"white"},"kaise h aap sab log");



reactdom.render(heading1,document.getElementById('root'))
reactdom.render(heading2,document.getElementById('root'))
reactdom.render(heading3,document.getElementById('root'))


// ul 
// const li1 = react.createElement('li',{},"html")
// const li2 = react.createElement('li',{},"css")
// const li3 = react.createElement('li',{},"js")
// const li4 = react.createElement('li',{},"ts")
// const li5 = react.createElement('li',{},"git")
// const li6 = react.createElement('li',{},"github")




// const ul = react.createElement('ul',{backgroundColor:"gray",fontSize:"23px",color:"white"},[li1,li2,li3,li4,li5,li6])

// reactdom.render(ul,document.getElementById('root'))





