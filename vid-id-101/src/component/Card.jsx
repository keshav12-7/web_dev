function Card(props){
    return(
        <div className="card" style={{border:"2px solid black", padding:"2px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xSeY2vf2OLQu15toiixOMBHpHevMqTZ9VSueqMUz1w&s=10" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer} OFF</h1>
                <h2>Shop Now</h2>
                <h2>Price = {props.price}</h2>
            </div>
        </div>
    )
}

export default Card;