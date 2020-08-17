import React from 'react'

const withCounter = (WrappedComponent,increment) =>{
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 countTime:0
            }
        }
        
        increasePrayCount =()=>{
            this.setState(prevState=>{
                return {
                    countTime:prevState.countTime+increment
                }
            }
              
           )
       }


        render(){
            return <WrappedComponent countTime={this.state.countTime} increasePrayCount={this.increasePrayCount} {...this.props} />
        }
    }
    return WithCounter
}

export default withCounter