import React, { Component } from 'react'
import withCounter from './34HOC'
 class ClickCounter extends Component {


    render() {
      const  {name,countTime,increasePrayCount} = this.props
        return (
            <div>
                {name} pray to God {countTime} times
                <button onClick={increasePrayCount}>Pray to God!</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,1)
