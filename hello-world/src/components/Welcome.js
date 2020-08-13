import React, { Component } from 'react'

class Welcome extends Component{
    render(){
    return(  <h1>oh, {this.props.name}! please bless your hero  {this.props.heroname} from welcome class Component</h1>)
    }

}
export default Welcome