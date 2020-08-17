import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
   

    render() {
        const { count,increaseCount } = this.props
        return (
            <React.Fragment><button onClick={increaseCount}>click {count}  times </button>
              </React.Fragment>

        )
    }
}

export default ClickCounterTwo
