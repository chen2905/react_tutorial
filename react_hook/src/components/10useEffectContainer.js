import React,{useState} from 'react'
import UseEffectHookOnce from './8UseEffectHook.js'
function useEffectContainer() {
   const[display,setDisplay] =useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>toggle the mouse</button>
           {display && <UseEffectHookOnce/>}
        </div>
    )
}

export default useEffectContainer
