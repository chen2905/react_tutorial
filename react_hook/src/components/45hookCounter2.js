import React,{useState} from 'react'


function HookCounter2() {

    const initCount =0
    const[count, setCount]=useState(initCount)
    return (
        <div>{count}
            <button onClick={()=>setCount(prevcount=>prevcount+1)}>increase</button>
            <button onClick={()=>setCount(prevcount=>prevcount-1)}>decrease</button>
            <button onClick={()=>setCount(initCount)}>reset</button>
        </div>
    )
}

export default HookCounter2
