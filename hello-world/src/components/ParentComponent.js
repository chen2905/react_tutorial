import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
 class ParentComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
         parentName:'God'
    }
    this.greetParent = this.greetParent.bind(this)
}

greetParent(props){
    alert(`Hello ${this.state.parentName} from ${props}`)
}

    render() {
        return (
            <div>
                <ChildComponent greetParent={this.greetParent} childMessage="your child"/>
            </div>
        )
    }//don't pass (), we just want to pass the reference of the function, if you want to pass parameters, please use arrow function from child component
}

export default ParentComponent
