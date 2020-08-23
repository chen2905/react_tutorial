import React,{useEffect, useRef} from 'react'

function InputUseRef() {

const inpRef=useRef(null)


useEffect(()=>{
    inpRef.current.focus()
},[])

    return (
        <div>
            <input ref={inpRef} type='text'/>
        </div>
    )
}

export default InputUseRef
