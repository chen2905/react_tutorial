import React, { Component } from 'react'
import ForwardInput from './30ForwardInput'
class ForwardParentInput extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    this.ForwardInputRef =React.createRef()
    }
    clickHandler=()=>{
        this.ForwardInputRef.current.focus()
    }
    render() {
        return (
            <div>
              <ForwardInput ref={this.ForwardInputRef}/>
              <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardParentInput
