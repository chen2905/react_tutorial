import React, { Component } from 'react'
import withCounter from './34HOC'
 class HoverCounter extends Component {


    render() {
        const  {name,countTime,increasePrayCount} = this.props
    
        return (
            <div>
                {name} pray to God {countTime} times
                <h1 onMouseOver={increasePrayCount}>Hover me to pray to the God!</h1>
                
            </div>
        )
    }
}

export default withCounter(HoverCounter,2)
