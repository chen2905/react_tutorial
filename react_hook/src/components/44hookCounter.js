import React,{useState} from 'react'

function HookCounter() {
    useState(0)
    const [count,increaseCount] =useState(0)
    return (
        <div>
            <button onClick={()=>increaseCount(count+1)}>click {count} times</button>
        </div>
    )
}

export default HookCounter
