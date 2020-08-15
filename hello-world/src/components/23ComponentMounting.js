import React, { Component } from 'react'

 class LifeCycleA extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:"Mighty God!"
    }

    console.log ('Life cycle A:constructor')

}

static getDerivedStateFromProps(props,state){
    console.log ('Life cycle A:getDerivedStateFromProps')

    return null
}

componentDidMount(){
    console.log ('Life cycle A: componentDidMount')
}
    render() {
        console.log ('Life cycle A: render')
        return (
            <div>
                Life cycle A
            </div>
        )
    }
}

export default LifeCycleA
