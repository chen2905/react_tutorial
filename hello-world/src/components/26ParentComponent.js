import React, { Component } from 'react'
import RegComp from './26RegularComponent'
import PureComp from './26PureComponent'
import uuid from 'react-uuid'
 class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:`Mighty God`
        }
    }
    componentDidMount(){
        setInterval(()=>{
           this.setState({
            name:`Great God${uuid()}`
           })
        },2000)
    }
    render() {
        console.log('****************parent component render()**********************************')
        return (
            <div>
                This God's parent's component
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent
