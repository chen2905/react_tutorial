import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element=>{
            this.cbRef = element
        }
        this.state = {
             
        }
    }
    
    componentDidMount(){
        //console.log(this.inputRef)
        //this.inputRef.current.focus() 
        if (this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler =()=>{
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <React.Fragment>
                <input type="text" ref = {this.inputRef}/>
                <input type="text" ref = {this.setCbRef}/>
                <input type="text" ref = {this.setCbRef}/>
                        <button onClick={this.clickHandler}>Click</button>
            </React.Fragment>
        )
    }
}

export default RefsDemo
