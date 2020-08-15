import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggIn: false
        }
    }

    render() {
        const isLoggIn = this.state.isLoggIn

        let message =""
     
        return   this.isLoggIn? (<div>Worship you, my God</div>):(<div>To worship God, please log in first</div>)
        
        // if (this.isLoggin){
        //     return (  <div>
        //         Worship you, my God!
        //         </div>)
        // }else{
        //     return( <div>To Worship God, please log in first</div>)
        // }

       
    }
}

export default UserGreeting
