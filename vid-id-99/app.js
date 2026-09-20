import React from "react";
import ReactDOM from "react-dom/client"


const element1 = React.createElement(
  "h1",
  { id: "first", style: { color: "pink", backgroundColor: "red" } },
  "hello coder army",
);

const element2 = React.createElement(
  "h2",
  { id: "second", style: { backgroundColor: "blue", color: "gray" } },
  "kaise h aap log",
);

// with jsx 
const newelement = <h1>hello coder army with jsx</h1>


const main_element = React.createElement("div", { id: "main"}, [
  element1,
  element2,
]);

const reactroot = ReactDOM.createRoot(document.getElementById("root"));
// reactroot.render(main_element);

reactroot.render(newelement);