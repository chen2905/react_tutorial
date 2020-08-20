import React,{useState,useEffect} from 'react'

function HookCounter5() {


const [count, setCount] =useState(0)


const tick =()=>{
    setCount(count+1)
}
useEffect(
    ()=>{
     const  interval= setInterval(tick,1000)
     return ()=>{
         clearInterval(interval)
     } 
    },[count]
)
    return (
        <div>
            <h1>Pray for God {count} times!</h1>
        </div>
    )
}

export default HookCounter5
