import React,{useReducer} from 'react'

const initialState =0
const reducer=(state,action)=>{
    switch(action){
        case 'Increase' :
        return state+1
        case 'Decrease' :
        return state-1
        case 'Reset':
        return initialState
        default:
        return state
    }
}

function CounterUseReducer() {

    const [counter,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <button onClick={()=>dispatch('Increase')}>Increase pray</button>
            <button onClick={()=>dispatch('Decrease')}>Decrease pray</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
           <h1>Pray to God {counter}</h1> 
        </div>
    )
}

export default CounterUseReducer
