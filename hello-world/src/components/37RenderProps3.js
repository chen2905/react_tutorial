import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

    }
    increaseCount = () => {
        this.setState(
            prevState => {
                return {
                    count: prevState.count + 1
                }
            }
        )
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count,this.increaseCount)}
            </div>
        )
    }
}

export default Counter