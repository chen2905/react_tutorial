import React, { Component } from 'react'

 class HoverCounter2 extends Component {
    
    render() {
        const {count,increaseCount} = this.props
        return (
            <div>
                <h3 onMouseOver={increaseCount}>Hover {count} times</h3>
            </div>
        )
    }
}

export default HoverCounter2
