import React from 'react'

function FunctionClick() {

  function  ClickHandler(props){
       console.log(`${props}, Let's pray to the God!`)
    }
    //make sure don't pass function call with (), just pass function name
    return (
        <div>
            <button onClick={ClickHandler}>Worship the God!</button>
            
        </div>
    )
}

export default FunctionClick
