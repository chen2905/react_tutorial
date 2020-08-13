import React, {Component} from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state ={
            message:'Welcome God!'
        }
    }
     onClickFunc(){
         this.setState({
             message:"God, I am worshipping you! thanks you!"
         })
     } 
    render(){
    
    return(
    <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.onClickFunc()}>Worship you! My God!</button>
    </div>
    
)
    }
}

export default Message