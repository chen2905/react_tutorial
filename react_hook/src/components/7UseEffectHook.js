import React, {useState,useEffect}from 'react'

function UseEffectHook() {

   const [count, setCount] =useState(0)
   const [name, setName] = useState('')
   useEffect(
       ()=>{
           console.log('useEffect updates')
           document.title=`Clicked ${count}`
       },
       [count]
   )
    return (
        <div>

            <input type='text' onChange={(e)=>setName(e.target.value)}></input> your enterred {name}
            <button onClick={()=>{setCount(count+1)}} >click {count} times</button>
        </div>
    )
}

export default UseEffectHook
