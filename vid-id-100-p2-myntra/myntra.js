import React from "react";
import reactDOM from "react-dom/client"

// header
// body
// footer

function Card(props){
    return(
        <div style={{border:"2px solid black", padding:"2px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xSeY2vf2OLQu15toiixOMBHpHevMqTZ9VSueqMUz1w&s=10" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer} OFF</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

const arr=[{cloth:"T-shirt",offer:"30-50%"},{cloth:"Lower",offer:"70%"},{cloth:"Pants",offer:"50%"},{cloth:"Skirt",offer:"10%"},{cloth:"Inner",offer:"30-50%"}]

function App(){
    return(
        // header
        // body
        <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            {/* <Card cloth="T-shirt" offer="40-80%"/>
            <Card cloth="Lower" offer="50-60%"/>
            <Card cloth="pants" offer="12%"/>
            <Card cloth="inner" offer="80%"/> */}


                {/* return js expression array,react element,string and numbers  */}

            {
                arr.map((val,index)=><Card key={index} cloth={val.cloth} offer={val.offer} />)

                // here map returns array which is acceptable here because in this block only something which is some returnable is accepted , 
                // it's like [<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,<card/>,]
            }
            
        </div>
        // footer
    )
}

const reactRoot = reactDOM.createRoot(document.getElementById('root'));

reactRoot.render(<App/>);

