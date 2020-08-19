import React,{useState,useEffect} from 'react'

function UseEffectHookOnce() {
const [pointX,setPointX] = useState(0)
const [pointY,setPointY] = useState(0)

const ChangeXY =(e)=>{
    console.log('changing XY')
    setPointX(e.clientX)
    setPointY(e.clientY)
}

useEffect(()=>{
    console.log('using useEffect')
    window.addEventListener('mousemove',ChangeXY)
    return ()=>{
        console.log('unmount the component')
        window.removeEventListener('mousemove',ChangeXY)
    }
},[])
    return (
        <div>
            The mouse is pointting to x:{pointX} and y:{pointY}
        </div>
    )
}

export default UseEffectHookOnce
