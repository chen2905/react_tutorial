import React,{useContext} from 'react'

import {NameContext,ActionContext} from '../App'
function ComponentE() {

const name =useContext(NameContext)
const action =useContext(ActionContext)

    return (
        <div>
            hello from compentE<br/>
            {name} {action}
        </div>
    )
}

export default ComponentE
