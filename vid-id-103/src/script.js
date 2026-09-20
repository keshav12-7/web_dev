import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Colorful from "./component/Colorful";
// background color changer

function Main() {
  const [count, setcount] = useState(0);
  console.log("jhvjh");
  
  return (
    <div className="main">
        
        
      <div className="counter">
        
        
        
        <h1>Counter is : {count}</h1>
        <button onClick={() => setcount(count + 1)}>Increment</button>
      </div>

      {/* <Colorful name="hunny" /> */}
      <Colorful name={count}/>
    </div>
  );
  console.log("hello");
  
}

const reactroot = ReactDom.createRoot(document.getElementById("root")).render(
  <Main />,
);
