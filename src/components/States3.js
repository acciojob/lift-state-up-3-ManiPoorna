import React, { useState } from "react";

const States3 = ()=>{

    let [option,setOption] = useState("");
    return(
        <div>
            <div className="parent">
                <h1>Parent Component</h1>
                <div className="child1">
                    <h3>Child Component 1</h3>
                    <button onClick={(e)=>setOption(e.target.innerText)}>Option 1</button>
                </div>
                <div className="child2">
                    <h3>Child Component 2</h3>
                    <button onClick={(e)=>setOption(e.target.innerText)}>Option 2</button>
                </div>
                {
                    option &&  <p>Selected Option: {option}</p>
                }
            </div>
        </div>
    )
}

export default States3;