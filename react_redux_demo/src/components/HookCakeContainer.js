import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux'
function HookCakeContainer() {
    const numberofCake = useSelector(state => state.cake.numberOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>number of cake from hook container -{numberofCake}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
