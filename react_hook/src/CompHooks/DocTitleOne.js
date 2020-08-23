import React,{useState} from 'react'
import useDocTitle from '../CustomHooks/useDocTitle'
function DocTitleOne() {
const [count,setCount]= useState(0)
useDocTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>click {count}</button>
        </div>
    )
}

export default DocTitleOne
