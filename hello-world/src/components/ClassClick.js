import React, { Component } from 'react'

export class ClassClick extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:''
        }
    }
    
    ClickHandler(){
        this.setState(()=>(
            {message:"God, I am worshipping you! thanks you!"}
        ))
    } 
    //not like function component, inside class component, you need pass event
    //handler as funciton call 
    render() {
        return (
            <div>{this.state.message}
                   <button onClick={this.ClickHandle.bind(this)}>Worship the God! from classClick Component</button>
            </div>
        )
    }
}

export default ClassClick
