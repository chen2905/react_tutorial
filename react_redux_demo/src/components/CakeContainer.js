import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'
function CakeContainer(props) {
   
    return (
        <div>
            <h1>Number of cakes {props.numberOfCake}</h1>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numberOfCake: state.numberOfCake
    } 
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(CakeContainer)
