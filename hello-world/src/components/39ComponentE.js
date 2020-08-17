import React, { Component } from 'react'
import ComponentF from './39ComponentF'
import UserContext from './39UserContext'
export class ComponentE extends Component {
    render() {
        return (
            <div>
                component E
            Component E context {this.context}
            <ComponentF/>
            </div>
        )
    }
}
ComponentE.contextType=UserContext
export default ComponentE
