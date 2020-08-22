import React from 'react'

function Button({text,clickHandle}) {
    console.log(`rending button ${text} component`)
    return (
        <div>
           <button onClick={clickHandle}>{text}</button>
        </div>
    )
}

export default React.memo(Button)
