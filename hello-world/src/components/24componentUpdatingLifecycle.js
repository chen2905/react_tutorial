import React, { Component } from 'react'
import ComponentUpdatingLifecycleB from './24componentUpdatingLifecycleB'

 class ComponentUpdatingLifecycleA extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:"Mighty God!"
    }

    console.log ('Life cycle A:constructor')
    this.clickHandler =this.clickHandler.bind(this)

}

clickHandler(){
    this.setState(
        {
            name:"Might God! please bless your believers!"
        }
    )

}

static getDerivedStateFromProps(props,state){
    console.log ('Life cycle A:getDerivedStateFromProps')

    return null
}

componentDidMount(){
    console.log ('Life cycle A: componentDidMount')
}

shouldComponentUpdate(){
    console.log ('Life cycle A: should component update')
    return true
}


 getSnapshotBeforeUpdate(preProps,preState){
    console.log('Life cycle A: getSnapshotBeforeUpdate')
    return null
}
    render() {
        console.log ('Life cycle A: render')
        return (
            <div>
                <div>Life cycle A</div>
                <button onClick={this.clickHandler}>Pray to the God</button>
                <br/>
                {this.state.name}
                <ComponentUpdatingLifecycleB/>
            </div>
        )
    }
}

export default ComponentUpdatingLifecycleA
