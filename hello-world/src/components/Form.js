import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:''
         }
         this.inputHandler=this.inputHandler.bind(this)
     }
     inputHandler(e){
    
         this.setState(
            {username:e.target.value}

         )
     }
    render() {
        const username= this.state.username
        return (
            
          <form>
             
                <input type='text' value={username} onChange={this.inputHandler}></input>
                <label>This is God's form input:{username}</label>
          </form>
        )
    }
}

export default Form
