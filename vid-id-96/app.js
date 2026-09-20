const element = React.createElement("h1",{color:"blue"},"hello coders")

 
// ReactDom.render(element,document.getElementById('root'));


const Reactroot = ReactDOM.createRoot(document.getElementById('root'))
Reactroot.render(element);
