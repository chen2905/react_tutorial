import React from 'react'

function Title( {text} ) {
    console.log ('rending Title Component')
 
    return (
        <div>
            Title comp
            <h1>{text}</h1>
        </div>
    )
}

export default React.memo(Title)
