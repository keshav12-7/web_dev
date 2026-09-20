import React,{useState} from "react";
import reactDOM from "react-dom/client"
import Card from "./component/card";
import Header from "./component/header";
import arr from "./utils/dummy";
import {Meet} from "./utils/dummy";
import {Greet as Goa} from "./utils/dummy";


// header
// body
// footer



function App(){
    let [A,setA]=useState(arr);

    function sortArray(){
        A.sort((a,b)=> a.price-b.price)
        setA([...A])
        console.log(A);
        
    }
    function filter500(){
        const B = arr.filter((value)=>value.price>499);
        setA(B);
    }

    return(
        <>
        {/* header */}

        <Header/>

        {/* // body */}
        
        <div className="upper-mid">
            <button onClick={sortArray} id="sort">sort by Price</button>
            <button className="filter" onClick={filter500} >Price above 499</button>
        </div>

        <div className="middle" style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            

                {/* return js expression array,react element,string and numbers  */}

            {
                A.map((val,index)=><Card key={index} cloth={val.cloth} offer={val.offer} price={val.price} />)

                // here map returns array which is acceptable here because in this block only something which is some returnable is accepted , 
                // it's like [<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,]
            }
            
        </div>


        {/* // footer */}
        <Goa/>
        <Meet/>

        </>
    )
}



const reactRoot = reactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<App/>);