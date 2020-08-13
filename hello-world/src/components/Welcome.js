import React, { Component } from 'react'

class Welcome extends Component{

   
    render(){
        const   {name,heroname} =this.props
    return(  <h1>oh, {name}! please bless your hero  {heroname}! from welcome class Component</h1>)
    }

}
export default Welcome