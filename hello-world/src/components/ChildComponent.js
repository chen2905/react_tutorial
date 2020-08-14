import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetParent(props.childMessage)}>greet God from your child!</button>
        </div>
    )
}

export default ChildComponent
