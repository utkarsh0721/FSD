import React from "react";


function Card(props){
    const [count, setCount] = React.useState(0);
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            height:"100%",
            border:"1px solid black",
            borderRadius:"5px"
        }}>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <h3>Price: {props.price}</h3>
            <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    )
}

export default Card;