import React,{ useContext } from 'react'
import { CountContext } from '../App'
function CompD() {
    const countContext = useContext(CountContext)
    return (
        
             <div>
            <button onClick={()=>countContext.countDispatch('Increase')}>Increase pray</button>
            <button onClick={()=>countContext.countDispatch('Decrease')}>Decrease pray</button>
            <button onClick={()=>countContext.countDispatch('Reset')}>Reset</button>
           <h1>D Pray to God {countContext.countState}</h1> 
        </div>
    )
}

export default CompD
