import React, { Component } from 'react'
import InputComp from './29RefsWithClassComponents'
 class FocusInput extends Component {
     constructor(props) {
         super(props)
     
         this.compRef=React.createRef()
     }
     clickHandler=(e)=>{
       this.compRef.current.focusInput()
     }
    render() {
        return (
            <div>
                <InputComp ref={this.compRef}/>
                <button
                onClick ={this.clickHandler}
                >Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
