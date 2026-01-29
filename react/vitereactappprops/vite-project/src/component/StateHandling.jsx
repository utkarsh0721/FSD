import React, {useState} from 'react'

function StateHandling() {
    const [counter,setCounter]=useState(20);
  
  function increaseCounter(){
    setCounter(counter+5);
  }
    return (
    <div>StateHandling

        <h2>Counter Value={counter}</h2>
        <button onClick={increaseCounter}>Increase Value</button>
        <button onClick={()=>setCounter(counter-10)}>Decrease Value</button>
    </div>
  )
}

export default StateHandling