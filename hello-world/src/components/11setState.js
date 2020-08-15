import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment(id) {
        // this.setState(//must setState method to change the state, never directly change the state, call back has to be a function
        //     {
        //         count: this.state.count + 1
        //     }
        // ,  ()=>  console.log(`Callback value ${this.state.count}`)
        // )

       this.setState((prevState)=>({
           count:prevState.count+id
       }))
    }
  
    render() {
        return (
            <div>
                <div>
                    count -{this.state.count}
                </div>
                <button onClick={() => this.increment(5)}>Increment</button>

            </div>

        )
    }
}

export default Counter
