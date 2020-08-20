import React, { useReducer } from 'react'

const objInitialCounterState = {
    firstCounter: 0,
    secondCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increase':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'Decrease':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'Increase2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'Decrease2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'Reset':
            return objInitialCounterState
        default:
            return state
    }
}

function CounterUseReducer2() {

    const [counterState, dispatch] = useReducer(reducer, objInitialCounterState)
    return (
        <div>
            <button onClick={() => dispatch({ type: 'Increase', value: 1 })}>Increase pray 1 time</button>
            <button onClick={() => dispatch({ type: 'Decrease', value: 1 })}>Decrease pray 1 time</button>
            <button onClick={() => dispatch({ type: 'Increase2', value: 5 })}>Increase second pray 5 time</button>
            <button onClick={() => dispatch({ type: 'Decrease2', value: 5 })}>Decrease second pray 5 time</button>
            <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>
            <h1>Pray to God {counterState.firstCounter}</h1>
            <h1>Pray to our God {counterState.secondCounter}</h1>
        </div>
    )
}

export default CounterUseReducer2
