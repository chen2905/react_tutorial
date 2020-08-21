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

function CounterUseReducer3() {

    const [counter,dispatch]=useReducer(reducer,initialState)
    const [counter2,dispatch2]=useReducer(reducer,initialState)
    return (
        <div>
            <button onClick={()=>dispatch('Increase')}>Increase pray</button>
            <button onClick={()=>dispatch('Decrease')}>Decrease pray</button>
          
            <button onClick={()=>dispatch('Reset')}>Reset</button>

            <button onClick={()=>dispatch2('Increase')}>Increase pray</button>
            <button onClick={()=>dispatch2('Decrease')}>Decrease pray</button>
            <button onClick={()=>dispatch2('Reset')}>Reset</button>
           <h1>Pray to God {counter}</h1> 
           <h1>Pray to God {counter2}</h1> 
        </div>
    )
}

export default CounterUseReducer3
