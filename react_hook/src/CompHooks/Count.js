import React from 'react'

function Count({text,count}) {
    console.log(`rending ${text}count component`)
    return (
      
        <div>
           <h2>{text} - {count}</h2>
        </div>
    )
}

export default React.memo(Count)
