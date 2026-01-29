import React from "react"

function ICard({props}){
    return (
        <div style={{
            display:"flex",
            justifyContent:"center"
        }
        }>
        <div style={
            {
                border:"1px solid black", 
                borderRadius:"5px", 
                padding:"10px", 
                margin:"10px", 
                textAlign:"left", 
                width:"400px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }
            }>

            <h1 style={{textAlign:"center",textDecoration:"underline"}}>Identity Card</h1>
            <h2>Name:{props.name}</h2>
            <h2>Age:{props.age}</h2>
            <h2>Branch:{props.branch}</h2>
            <h2>College:{props.college}</h2>
            <h2>Location:{props.location}</h2>
        </div>
        </div>
    )
}

export default ICard