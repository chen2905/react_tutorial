import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'God...'
        }
        this.ClickHandler=this.ClickHandler.bind(this)
    }

    //beware, even handler will trigger the component to render(), it might have chain reaction if component contains child components
    ClickHandler(){
        this.setState(
            {
                message:"God...please bless ECJ and my families! Thank you so much!"
            }

        )
     
    }
    render() {
        return (
            <div>
                <p>
                    <button onClick={this.ClickHandler.bind(this)}>Pray to the God!</button>
                    
                    <button onClick={()=>this.ClickHandler()}>Pray to the God! Again</button>


                    <button onClick={this.ClickHandler}>This is the best way to Pray to the God! Again</button>
                    </p>
                <p>{this.state.message}</p>
            </div>
        )
    }
}

export default EventBind
