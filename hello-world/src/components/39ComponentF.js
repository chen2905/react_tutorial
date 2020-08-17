import React, { Component } from 'react'
import { UserConsumer } from './39UserContext'
 class ComponentF extends Component {
    render() {
        return (
         
              
                <UserConsumer>
                    {(value)=>{
                        return    <div> <h1>Hello, {value} ! please destory the </h1>   </div>
                    }}
                </UserConsumer>

         
        )
    }
}

export default ComponentF
