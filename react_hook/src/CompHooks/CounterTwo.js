import React from 'react'
import useCounter from '../CustomHooks/useCounter'

function CounterTwo() {
const [count,increament,decreament,reset] =useCounter(100,10)

    return (
        <div>
            <h1>count2-{count}</h1>
            <button onClick={increament}>increase 10</button>
            <button onClick={decreament}>decrease 10</button>
            <button onClick={reset}>reset to 100</button>
        </div>
    )
}

export default CounterTwo
