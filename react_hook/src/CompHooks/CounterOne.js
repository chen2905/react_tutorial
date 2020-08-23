import React from 'react'
import useCounter from '../CustomHooks/useCounter'

function CounterOne() {
const [count,increament,decreament,reset] =useCounter(0,1)

    return (
        <div>
            <h1>Count 1-{count}</h1>
            <button onClick={increament}>increase 1</button>
            <button onClick={decreament}>decrease 1</button>
            <button onClick={reset}>reset to 0</button>
        </div>
    )
}

export default CounterOne
