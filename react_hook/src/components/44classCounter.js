import React, { Component } from 'react'

 class classCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        
    }
    
    increaseCount=()=>{

        this.setState((prevState)=>(
            {
                count: prevState.count+1
            }
        )
        )
    }
    render() {
        const {count} =this.state
        return (
            <div>
                <button onClick={this.increaseCount}>clicked {count}</button>
            </div>
        )
    }
}

export default classCounter
