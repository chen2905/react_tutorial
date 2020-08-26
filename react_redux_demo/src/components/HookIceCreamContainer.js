import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buyIceCream } from '../redux'

function HookIceCreamContainer() {

    const numberOfIceCream=useSelector(state=>state.iceCream.numberOfIceCream)
    const dispatch =useDispatch()
    return (
        <div>
            <h1>Hook Ice Cream -{numberOfIceCream}</h1>
            <button onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default HookIceCreamContainer
