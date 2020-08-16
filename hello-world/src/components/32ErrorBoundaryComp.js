import React, { Component } from 'react'

 class ErrorBoundary extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            hasError:false
         }
     }
     

    static getDerivedStateFromError(error){
        return{
                
            hasError:true
        }
    }
    componentDidMount(error,info){
        console.log(error)
        console.log(info)
    }
    
    render() {
       if(this.state.hasError){
           return <h3>Something with wrong with the component</h3>
       }
       return this.props.children
    }
}

export default ErrorBoundary
